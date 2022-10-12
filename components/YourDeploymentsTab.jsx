// Get total deployments done by this address => "get_total_badges_deployments_by_owner"
// For each deployment -> find contract address and display => get_nth_badges_contract_address(address, uint)
import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL } from "../contracts/badgefactory_config.js";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function YourDeploymentsTab(props) {
    //const [ totalDeployments, setTotalDeployments ] = useState(0)

    // run once, check for user address and get total deployments 
    useEffect(() => {
        if(!props.userLoggedIn) return
        // If user is logged in, get the provider, signer, and signer address
        async function getuserdetails() {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner()
            try {
                const signerAddress = signer.getAddress()
                const chainID = await (await provider.getNetwork()).chainId // why?? :')
                console.log(chainID)
                // Based on chainID, select appropriate badgefactory address
                const badgeFactoryContract = new ethers.Contract(
                    chainID === 5777 ? BADGEFACTORY_LOCAL : chainID === 420 ? BADGEFACTORY_ADDRESS_OP_GOERLI : BADGEFACTORY_ADDRESS_ETH_GOERLI,
                    BADGEFACTORY_ABI,
                    provider
                ) 
                // Make sure we have the address
                console.log(badgeFactoryContract.address)
                try {
                    // get_total_badges_deployments_by_owner(address)
                    const totalDeploys = await badgeFactoryContract.get_total_badges_deployments_by_owner(signerAddress)
                    console.log(totalDeploys)
                } catch (e) {
                    console.log("Couldn't get total badges deployments")
                }
            } catch (e) {
                // If we are unable to get signer, use provider?
                console.log("Couldnt catch")
                console.log(e)
            }
        }
        getuserdetails()
    }, [])

    return (
        <div>
            {/* {props.userLoggedIn ? (<div>Helllo World</div>) : (<div>Connect Wallet</div>)} */}
        </div>
    );
}