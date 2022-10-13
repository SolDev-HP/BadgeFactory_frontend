// Check the selected chain
// Find all deployments on that chain by 
// 1.  get_total_badges_deployers -> int
// 2. for each deployer from 0 to _total_badges_deployers
//    {
//          totaldeploys_bydeployer = get_total_badges_deployments_by_owner( deployer address )
//          for all deployments 0 to totaldeploys -> i
//          {
//              get_nth_badges_contract_address(deployer, index of contract)
//          }
//    }
import getAllDeployments from "../services/all_deployments";
import { useState, useEffect } from "react";

export default function AllDeploymentsTab(props) {
    const [ addList, setAddressList ] = useState([])
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
        getAllDeployments()
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
                { addList && addList.length !== 0 ? 
                    addList.map(item => <li key={item.contract_address}>{item.contract_address} -- <a href={'?address='+item.contract_address}>{item.badge_symbol}</a></li>)
                    : <li>There are no badges deployed</li> 
                }
            </ul>
        </div>
    );
}