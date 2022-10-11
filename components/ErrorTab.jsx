export default function ErrorTab(props) {
    return (
        <div className="tab-fixed-common">
            <div 
                style={{
                    margin: '0 auto',
                    padding: '0 auto',
                    height: '100%',
                    lineHeight: '27'
                }} 
            > {props.errormsg} </div>               
        </div> 
    );
}