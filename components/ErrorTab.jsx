export default function ErrorTab(props) {
    return (
        <div className={props.fullheight ? "tab-fixed-common" : "tab-error-common"}>
            <div 
                style={{
                    margin: '0 auto',
                    padding: '0 auto',
                    height: '100%',
                    lineHeight: props.fullheight ? "27" : "5"
                }} 
            > {props.errormsg} </div>               
        </div> 
    );
}