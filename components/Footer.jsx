// Create a footer that has current contract address 
export default function Footer() {
    return (
        <center>
            <div>
                <p>BadgeFactory</p>
                <p> 
                    | <span style={{color: "blue"}}>ETH Goerli EXP Token Contract</span> | 
                    <span style={{color: "blue"}}> ETH Goerli EthernautNFT Contract</span> | 
                    <span style={{color: "blue"}}> Demo Badges at OpenSea</span> | 
                </p>
            </div>
        </center>
    );
}