import BadgeDeployTab from "./BadgeDeployTab";
import BadgeMintTab from "./BadgeMintTab";
import BadgeViewTab from "./BadgeViewTab";
import { etherPresent } from "../utils/check_ethereum";
import ErrorTab from "./ErrorTab";
import { useState, useEffect } from "react";

export default function TabContent(props) {

    const [ isEtherPresent, setEtherPresent ] = useState(false)

    useEffect(() => {
        if(etherPresent()) {
            setEtherPresent(true)
            return
        }
        setEtherPresent(false)
    }, [])

    if (isEtherPresent) {
        if (props.userLoggedIn) {
            // Check props and display content accordingly 
            if (props.tabid == 1) {
                return (<BadgeDeployTab />)
            } else if (props.tabid == 2) {
                return (<BadgeMintTab />)
            } else {
                return (<BadgeViewTab />)
            } 
        } else {
            return (<ErrorTab errormsg="Connect Wallet" fullheight={true} />);
        }
    } else {
        return (<ErrorTab errormsg="Install Metamask or any Web3 enabled wallet" fullheight={true} />)
    }

    // It may not come here, but in case we can't find any injected ethereum
    return (
        <div className="m-auto">
            Web3 Is not enabled
        </div>
    );
}