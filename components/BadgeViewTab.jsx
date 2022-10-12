import { Skeleton } from "web3uikit";
import { useRouter } from "next/router";

export default function BadgeViewTab() {
    const router = useRouter()

    if(router.query["address"] === undefined) {
        return (
            <div className="tab-fixed-common"> 
                <center>
                    <p style={{ color: 'red'}}> Select a Badge From Deployments to View your holding </p>
                </center>
            </div>
        );
    } else {
        return (
            <div className="tab-fixed-common"> 
                <Skeleton 
                    style={{
                        width: '250px',
                        height: '250px',
                        padding: '5px',
                        marginRight: '5px'
                    }} 
                    theme="image" 
                /> <br/>
            </div>
        );
    }
}