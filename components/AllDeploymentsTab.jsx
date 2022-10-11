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

import { useWeb3ExecuteFunction, useMoralis, useWeb3Contract } from "react-moralis";
import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL } from "../contracts/badgefactory_config.js";
import { useEffect, useState } from "react";

export default function AllDeploymentsTab() {

    // Fetch first data of get_total_badges_deployers
    const { data: alldeployersData, error: alldeployersError, fetch: alldeployersFetch, isFetching: alldeployersOIsFetching, isLoading: alldeployersIsLoading } = useWeb3ExecuteFunction({
        abi: BADGEFACTORY_ABI,
        contractAddress: BADGEFACTORY_LOCAL,
        functionName: "get_total_badges_deployers",
    });

    const { isWeb3Enabled, web3 } = useMoralis()
    // Need a custom object that can hold all contract addresses 
    // So that we can use that as state to update when we come out of 
    // useEffect's hellish looking await -> then() deep calls
    // Until we find a better solution for this.

    return (
        <div>
            {alldeployersError && <div>ERRRORRRRR</div>}
            {alldeployersData && <h4>Total Unique Deployers: {
                    parseInt(alldeployersData["_hex"], 16)
                } </h4> 
            }

            <button onClick={() => alldeployersFetch()}> TestButton </button>
        </div>
    );
}