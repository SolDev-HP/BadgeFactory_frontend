import { Skeleton, Button } from "web3uikit";
import { useSearchParams } from "react-router-dom";
import { useRouter } from 'next/router';

export default function BadgeMintTab() {

    const router = useRouter()
    console.log(router.query["address"])

    if(router.query["address"] !== undefined) {
        return (
            <div className="tab-fixed-common">
                <div>
                    <Skeleton 
                        style={{
                            width: '250px',
                            height: '250px',
                            padding: '5px',
                            marginRight: '5px'
                        }} 
                        theme="image" 
                    /> <br/>
                    <center>
                    <p style={{ color: 'green'}}> Badges Minted: x/xyz</p>
                    <Button
                        color="blue"
                        onClick={function noRefCheck() {}} // function responsible for mint 
                        text="Mint a Badge"
                        theme="colored"
                    />
                </center>
                </div>
            </div>
        )
    }

    return (
        <div className="tab-fixed-common">
            <div>
                <center>
                    <p style={{ color: 'red'}}> Select a Badge From Deployments to Mint </p>
                </center>
            </div>
        </div>
    )
}