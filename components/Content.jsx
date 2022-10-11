import { Tab, TabList } from "web3uikit";
import TabContent from "./TabContent";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { etherPresent } from "../utils/check_ethereum";

export default function Content(props) {
    const { isWeb3Enabled, chainId } = useMoralis()
    const [ walletConnected, setWalletConnected ] = useState(false)

    return (
        <div className="container">
            <TabList
                defaultActiveKey={1}
                isWidthAuto
                onChange={function noRefCheck(){}}
                tabStyle="bulbUnion"
                style={{ "backgroundColor": "rgb(248,249,250)" }}
            >
                <Tab
                    lineHeight={30}
                    tabKey={1}
                    tabName="Deploy Badges"
                    isDisabled={!props.userLoggedIn}
                >
                    <div> <TabContent tabid="1" userLoggedIn={props.userLoggedIn} /> </div>
                </Tab>

                <Tab
                    lineHeight={30}
                    tabKey={2}
                    tabName="Mint Badge"
                    isDisabled={!props.userLoggedIn}
                >
                    <div>  <TabContent tabid="2" userLoggedIn={props.userLoggedIn} /> </div>
                </Tab>
                <Tab
                    lineHeight={30}
                    tabKey={3}
                    tabName="View Badge"
                    isDisabled={!props.userLoggedIn}
                >
                    <div> <TabContent tabid="3" userLoggedIn={props.userLoggedIn} /> </div>
                </Tab>
            </TabList>
        </div>
    );
}