// Get total deployments done by this address => "get_total_badges_deployments_by_owner"
// For each deployment -> find contract address and display => get_nth_badges_contract_address(address, uint)
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import getuserDeployments from "../services/owner_deployments"

export default function YourDeploymentsTab(props) {
    //const [ totalDeployments, setTotalDeployments ] = useState(0)
    const [ addressList, setAddressList ] = useState([])
    // run once, check for user address and get total deployments 
    useEffect(() => {
        if(!props.userLoggedIn) return
        // How do we load data in one shot, and then update addressList which later can be
        // mapped to list items 
        let mounted = true;
        // If user is logged in, get the provider, signer, and signer address
        // if(addressList.length === 0) {
        //     setAddressList(getuserDeployments())
        // }
        getuserDeployments()
        .then(addresses => {
            if(mounted) {   
                setAddressList(addresses)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <ul>
                {/** Display list of owner deployments */}
                {  addressList.length !== 0 ? 
                    addressList.map(item => <li key={item.badge_name}>{item.contract_address} -- {item.badge_symbol}</li>)
                    : <li>You don't have any badges deployed yet.</li> 
                }
            </ul>
        </div>
    );
}