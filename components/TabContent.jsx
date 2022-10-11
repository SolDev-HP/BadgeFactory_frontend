import { useMoralis } from "react-moralis";
import BadgeDeployTab from "./BadgeDeployTab";
import BadgeMintTab from "./BadgeMintTab";
import BadgeViewTab from "./BadgeViewTab";
import { etherPresent } from "../utils/check_ethereum";
import ErrorTab from "./ErrorTab";
import { useState, useEffect } from "react";

export default function TabContent(props) {

    const { isWeb3Enabled, isAuthenticated } = useMoralis()
    const [ isEtherPresent, setEtherPresent ] = useState(false)

    // const { isEthereumAvailable } = etherPresent()
    useEffect(() => {
        if(!etherPresent()) {
            setEtherPresent(false)
            return
        }
        setEtherPresent(true)
    }, [])

    if (isEtherPresent) {
        if (isWeb3Enabled) {
            // Check props and display content accordingly 
            if (props.tabid == 1) {
                return (<BadgeDeployTab />)
            } else if (props.tabid == 2) {
                return (<BadgeMintTab />)
            } else {
                return (<BadgeViewTab />)
            } 
        } else {
            return (<ErrorTab errormsg="Connect Wallet" />);
        }
    } else {
        return (<ErrorTab errormsg="Install Metamask or any Web3 enabled wallet" />)
    }

    // It may not come here, but in case we can't find any injected ethereum
    return (
        <div className="m-auto">
            Web3 Is not enabled
        </div>
    );
}