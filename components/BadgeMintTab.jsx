import { Button } from "web3uikit";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import badgesimage from '../assets/badgeFactory_ethernaut_mint.svg'
import { BADGES_ABI } from "../contracts/badges_config";
import { ERC721METADATA_ABI } from "../contracts/erc721metadata_config";
import { ethers } from "ethers";

export default function BadgeMintTab() {

    const router = useRouter()
    const [ totalSupply, setTotalSupply ] = useState(0)
    const [ hasMinted, setHasMinted ] = useState(false)
    // console.log(router.query["address"])

    function handleGettingProvider() {
        const badges_contract_address = router.query["address"]
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // await provider.send('eth_requestAccounts', []); // Not required as per the flow, but just in case use midway changes the wallet
        const signer = provider.getSigner()
        // get badges contract address 
        const badges_contract = new ethers.Contract(
            badges_contract_address,
            BADGES_ABI,
            signer      //This time we need the signer, as this tx needs signing
        ) 
        return [provider, signer, badges_contract]
    }

    // Load the totalsupply only once
    useEffect(() => {
        // Get total supply of given contract address
        // from querystring
        let mounted = true
        async function totalsupply_load() {
            // Load total supply here 
            const [provider, signer, badges_contract] = handleGettingProvider()
            const total_supply = await badges_contract.totalSupply()
            // console.log(total_supply)
            return parseInt(total_supply["_hex"], 16)    //maybe?
        }
        totalsupply_load()
        .then(totalsupply => {
            if(mounted) {
                setTotalSupply(totalsupply)
            }
        });

        // Also check if user has already minted
        async function has_user_minted() {
            const [ provider, signer, badges_contract ] = handleGettingProvider()
            const badges_erc721 = new ethers.Contract(
                router.query["address"],
                ERC721METADATA_ABI,
                provider
            )

            const balance = await badges_erc721.balanceOf(localStorage.getItem("connectedWallet"))

            return parseInt(balance["_hex"], 16)
        }

        has_user_minted()
        .then(balance => {
            if(mounted) {
                if(balance > 0) {
                    setHasMinted(true)
                }
            }
        });

        return () => mounted = false
    }, [])

    function handleMint() {
        if(router.query["address"] === undefined) return // Return incase this page was open and there was no badge contract address in querystring
        async function mint_a_badge() {
            try {
                const [provider, signer, badges_contract] = handleGettingProvider()
                // Mint a badge for self
                const mint_tx = await badges_contract.generateExperienceNFT()
                await mint_tx.wait()
            } catch (e) {
                console.log("Minting experienced an exception")
                console.log(e)
            }
            // Based on completion of above, we can display notification of minting success/failure
        }
        // Call the function
        mint_a_badge()
        setHasMinted(true)  // Refresh state, user has minted
    }

    if(router.query["address"] !== undefined) {
        return (
            <div className="tab-fixed-common">
                <div>
                <img
                    style={{
                        width: '250px',
                        height: '250px',
                        padding: '5px',
                        marginTop: '40px',
                        marginRight: '5px'
                    }} 
                    src={badgesimage.src} /><br/>
                    <center>
                    <p style={{ color: 'green'}}> Total Badges Minted: {totalSupply}</p>
                    <Button
                        color="blue"
                        onClick={handleMint} // function responsible for mint 
                        text={ hasMinted ? "Claimed!" : "Mint a Badge" }
                        theme="colored"
                        disabled={hasMinted}
                    />
                </center>
                </div>
            </div>
        )
    }

    return (
        <div className="tab-fixed-common">
            <div>
                <center>
                    <p style={{ color: 'red'}}> Select a Badge From Deployments to Mint </p>
                </center>
            </div>
        </div>
    )
}