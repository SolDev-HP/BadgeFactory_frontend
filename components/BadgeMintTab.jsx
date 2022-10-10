import { Skeleton, Button } from "web3uikit";

export default function BadgeMintTab() {
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