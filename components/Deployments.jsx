import { Tab, TabList } from "web3uikit";
import AllDeploymentsTab from "./AllDeploymentsTab";
import YourDeploymentsTab from "./YourDeploymentsTab";
import { etherPresent } from "../utils/check_ethereum";
import ErrorTab from "./ErrorTab";
import { useEffect, useState } from "react";

export default function Deployments(props) {
    return (
        <div className="container deployment-container">
            {/** Check if ethereum is injected, don't render tablist if not present */}
            <TabList
                defaultActiveKey={1}
                onChange={function noRefCheck(){}}
                style={{ "backgroundColor": "rgb(248,249,250)", "height" : "100%", "paddingLeft" : "15px" }}
            >
                <Tab
                    lineHeight={30}
                    tabKey={1}
                    tabName="Your Deployments"
                    isDisabled={!props.userLoggedIn}
                >
                    {/** If user is logged in, render deployments */}
                    {
                        props.userLoggedIn ? (
                            <YourDeploymentsTab userLoggedIn={props.userLoggedIn} />
                        ) : (
                            <ErrorTab errormsg="Connect Wallet" fullheight={false} />
                        )
                    }
                    
                </Tab>

                <Tab
                    lineHeight={30}
                    tabKey={2}
                    tabName="All Deployments"
                    isDisabled={!props.userLoggedIn}
                >
                    {
                        props.userLoggedIn ? (
                            <AllDeploymentsTab userLoggedIn={props.userLoggedIn} />
                        ) : (
                            <ErrorTab errormsg="Connect Wallet" fullheight={false} />
                        )
                    }
                </Tab>
            </TabList>
        </div>
    );
}