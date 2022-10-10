import { Tab, TabList } from "web3uikit";
import TabContent from "./TabContent";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

export default function Content() {
    const { isWeb3Enabled, chainId } = useMoralis()

    useEffect(() => {
        // Get chainID
        console.log(chainId)
        
    }, [])

    return (
        <div className="container">
            <TabList
                defaultActiveKey={1}
                isWidthAuto
                onChange={function noRefCheck(){}}
                tabStyle="bulbUnion"
                style={{ "background-color": "rgb(248,249,250)" }}
            >
                <Tab
                    lineHeight={30}
                    tabKey={1}
                    tabName="Deploy Badges"
                    isDisabled={!isWeb3Enabled}
                >
                    <div> <TabContent tabid="1" /> </div>
                </Tab>

                <Tab
                    lineHeight={30}
                    tabKey={2}
                    tabName="Mint Badge"
                    isDisabled={!isWeb3Enabled}
                >
                    <div>  <TabContent tabid="2" /> </div>
                </Tab>
                <Tab
                    lineHeight={30}
                    tabKey={3}
                    tabName="View Badge"
                    isDisabled={!isWeb3Enabled}
                >
                    <div> <TabContent tabid="3" /> </div>
                </Tab>
            </TabList>
        </div>
    );
}