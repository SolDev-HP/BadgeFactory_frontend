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

import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL } from "../contracts/badgefactory_config.js";
import getAllDeployments from "../services/all_deployments.js";
import { useState, useEffect } from "react";

export default function AllDeploymentsTab(props) {

    useEffect(() => {
        getAllDeployments()
    }, [])
    // Fetch first data of get_total_badges_deployers

    // Need a custom object that can hold all contract addresses 
    // So that we can use that as state to update when we come out of 
    // useEffect's hellish looking await -> then() deep calls
    // Until we find a better solution for this.

    return (
        <div>
           {/** This should print total deployers number */}
        </div>
    );
}