import { Skeleton } from "web3uikit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BADGES_ABI } from "../contracts/badges_config";
import { json } from "react-router-dom";

export default function BadgeViewTab() {
    const router = useRouter()
    const [ tokenURIdata, setTokenURIData ] = useState(undefined)
    // Re-used? refactor 
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

    // A way to decode base64 to utf-8 string 
    function base64_to_utf8(str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        }).join(''))
    }


    useEffect(() => {
        // Let's perform the same task of getting the balance of owner
        // If balance exists, get the tokenID 
        // and call tokenURI on it 
        let mounted = true

        async function get_user_balance() {
            const [ provider, signer, badges_contract ] = handleGettingProvider()
            const signerAddress = await signer.getAddress()
            const balance = await badges_contract.balanceOf(signerAddress)  // Get logged-in user's balance

            // If there's any balance 
            if(parseInt(balance["_hex"], 16) !== 0) {
                // User has badge
                const _tokenID = await badges_contract.getTokenIdOfOwner(signerAddress)
                // We got the tokenID, now get the data 
                const _tokenURIdata = await badges_contract.tokenURI(parseInt(_tokenID["_hex"], 16))
                // Console log it 
                // console.log(_tokenURIdata)
                return _tokenURIdata
            } else {
                return undefined    //eh??
            }
        }

        get_user_balance()
        .then(_tokenURIdata => {
            if(mounted) {
                if (_tokenURIdata === undefined) return
                const _tokenURIUpdated = _tokenURIdata.replace("data:application/json;base64,","")
                const decodeURI = base64_to_utf8(_tokenURIUpdated)
                const decode_json = JSON.parse(decodeURI)
                setTokenURIData(decode_json["image"])
            }
        })

        return () => mounted = false
    }, [])

    if(router.query["address"] === undefined) {
        return (
            <div className="tab-fixed-common"> 
                <center>
                    <p style={{ color: 'red'}}> Select a Badge From Deployments to View your holding </p>
                </center>
            </div>
        );
    } else {
        return (
            <div className="tab-fixed-common"> 
                { tokenURIdata !== undefined ?
                    (<img style={{ width: '250px', height: '250px', padding: '5px', marginTop: '40px', marginRight: '5px' }} 
                        src={tokenURIdata}/>) : (
                            <div> You haven't claimed any badge yet for contract : {router.query["address"]}</div>
                    ) 
                }
            </div>
        );
    }
}