// Get total deployments done by this address 
// For each deployment -> find contract address and display
import { useWeb3ExecuteFunction, useMoralis, useWeb3Contract } from "react-moralis";
import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL } from "../contracts/badgefactory_config.js";
import { useEffect, useState } from "react";

export default function YourDeploymentsTab(props) {

    const { isWeb3Enabled, account } = useMoralis();

    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
        abi: BADGEFACTORY_ABI,
        contractAddress: BADGEFACTORY_LOCAL,
        functionName: "get_total_badges_deployments_by_owner",
        params: {
            "aDeployerAddress": account
        }
    });

    useState(() => {
        if(isWeb3Enabled) {
            console.log(account)
        }
    }, [isWeb3Enabled])

    return (
        <div>
            <button onClick={() => fetch()}>Fetch My Contracts</button>
            {error && <div>ERRRORRRRR {console.log(error)}</div>}
            {data && <div>
                {console.log(data)}
                </div>
                }
        </div>
    );
}