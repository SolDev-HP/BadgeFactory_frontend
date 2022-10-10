import { Skeleton } from "web3uikit";

export default function BadgeViewTab() {
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