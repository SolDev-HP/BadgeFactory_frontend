import { useMoralis } from "react-moralis";
import BadgeDeployTab from "./BadgeDeployTab";
import BadgeMintTab from "./BadgeMintTab";
import BadgeViewTab from "./BadgeViewTab";
import { etherPresent } from "../utils/check_ethereum";

export default function TabContent(props) {

    const { isWeb3Enabled, isAuthenticated } = useMoralis()

    // useEffect(() => {
    //     console.log("User Authentication")
    //     console.log(isAuthenticated)
    // }, [isAuthenticated])

    // DOESN'T WORK [ FIX THIS ]
    // if (!etherPresent()) {
    //     return (
    //         <div className="tab-fixed-common">
    //             <div 
    //                 style={{
    //                     margin: '0 auto',
    //                     padding: '0 auto',
    //                     height: '100%',
    //                     lineHeight: '27'
    //                 }} 
    //             >
    //                 Install Metamask or any Web3 enabled wallet </div>               
    //         </div>    
    //     );
    // } else 

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
        return (
            <div className="tab-fixed-common">
                <div 
                    style={{
                        margin: '0 auto',
                        padding: '0 auto',
                        height: '100%',
                        lineHeight: '27'
                    }} 
                > Connect Wallet </div>               
            </div>    
        );
    }

    // It may not come here, but in case we can't find any injected ethereum
    return (
        <div className="m-auto">
            Web3 Is not enabled
        </div>
    );
}