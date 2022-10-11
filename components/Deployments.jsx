import { Tab, TabList } from "web3uikit";
import { useMoralis } from "react-moralis";
import AllDeploymentsTab from "./AllDeploymentsTab";
import YourDeploymentsTab from "./YourDeploymentsTab";

export default function Deployments() {
    const { isWeb3Enabled } = useMoralis();

    return (
        <div className="container deployment-container">
            <TabList
                defaultActiveKey={1}
                onChange={function noRefCheck(){}}
                style={{ "background-color": "rgb(248,249,250)", "height" : "100%", "padding-left" : "15px" }}
            >
                <Tab
                    lineHeight={30}
                    tabKey={1}
                    tabName="Your Deployments"
                    isDisabled={!isWeb3Enabled}
                >
                    {/* <div> <All> </div> */}
                    <YourDeploymentsTab />
                </Tab>

                <Tab
                    lineHeight={30}
                    tabKey={2}
                    tabName="All Deployments"
                    isDisabled={!isWeb3Enabled}
                >
                    <AllDeploymentsTab />
                </Tab>
            </TabList>
        </div>
    );
}