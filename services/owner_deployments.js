import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL } from "../contracts/badgefactory_config.js";
import { ERC721METADATA_ABI } from "../contracts/erc721metadata_config.js";
import { ethers } from "ethers";

async function getuserDeployments() {
    // The resultant list
    var contract_details = [];
    // perform connection and function calls
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner()
    try {
        const signerAddress = signer.getAddress()
        const chainID = await (await provider.getNetwork()).chainId // why?? :')
        // console.log(chainID)
        // Based on chainID, select appropriate badgefactory address
        const badgeFactoryContract = new ethers.Contract(
            chainID === 5777 ? BADGEFACTORY_LOCAL : chainID === 420 ? BADGEFACTORY_ADDRESS_OP_GOERLI : BADGEFACTORY_ADDRESS_ETH_GOERLI,
            BADGEFACTORY_ABI,
            provider
        ) 
        // Make sure we have the address
        // console.log(badgeFactoryContract.address)
        try {
            // get_total_badges_deployments_by_owner(address)
            const totalDeploys = await badgeFactoryContract.get_total_badges_deployments_by_owner(signerAddress)
            const totalDeploys_int = parseInt(totalDeploys["_hex"], 16)
            for(let i = 0; i < totalDeploys_int; i++) {
                // For each deployment, get the address
                const badges_deployed_at = await badgeFactoryContract.get_nth_badges_contract_address(signerAddress, i)
                // console.log(badges_deployed_at)
                // Prepare the contract 
                const badges_contract = new ethers.Contract(badges_deployed_at, ERC721METADATA_ABI, provider)
                const badgesName = await badges_contract.name()
                const badgesSymbol = await badges_contract.symbol()
                //console.log(await badges_contract.symbol())
                // Add this to contract details 
                contract_details.push({
                    contract_address: badges_deployed_at,
                    badge_name: badgesName,
                    badge_symbol: badgesSymbol
                });

            }
            // Once you're done with this, return the list
            return contract_details
        } catch (e) {
            console.log(e)
            console.log("Couldn't get total badges deployments")
        }
    } catch (e) {
        // If we are unable to get signer, use provider?
        console.log("Couldnt catch")
        console.log(e)
    }
}

export default getuserDeployments;