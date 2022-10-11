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

import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL } from "../contracts/badgefactory_config.js";
import { useEffect } from "react";

export default function AllDeploymentsTab() {

    const { isWeb3Enabled } = useMoralis()

    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction({
        abi: BADGEFACTORY_ABI,
        contractAddress: BADGEFACTORY_LOCAL,
        functionName: "get_total_badges_deployers"
    });

    useEffect(() => {
        if(isWeb3Enabled) {
            fetch()
            console.log(data)
        }
    }, [isWeb3Enabled])

    return (
        <div>
            {error && <div>ERRRORRRRR</div>}
            <button onClick={() => fetch()}> TestButton </button>
            {data && <pre>
                {JSON.stringify(data,
                    null,
                    2,
                )}
                </pre> 
            }
        </div>
    );
}