import { useState } from "react";
import { Form, Skeleton } from "web3uikit";

// Take a default object to store user entered data
const badgeDeployFormData = Object.freeze({
    input_0 : "",
    input_1 : "EthernautDAO",
    input_2 : "eBadge"
});

export default function BadgeDeployTab() {

    // Use state to reflect changes in badgedeployformdata 
    const [ formdata, updateFormData ] = useState(badgeDeployFormData);

    const handleFormDataChange = (e) => {
        updateFormData({
            ...formdata,
            [e.target.id] : e.target.value.trim()
        });
    };

    // Handle form submit. We need a way to verify EXP token address
    // name and symbol could be taken as they are 
    const handleFormSubmit = (e) => {
        //e.preventDefault()
        console.log(formdata);
    };

    return (
        <div className="tab-fixed-common">
            <div 
                style={{
                    display: 'flex'
                }}
            >
                {/* <img
                    style={{
                        width: '250px',
                        height: '250px',
                        padding: '5px',
                        marginTop: '40px',
                        marginRight: '5px'
                    }} 
                    src=""/> */}
                <Skeleton 
                    style={{
                        width: '250px',
                        height: '250px',
                        padding: '5px',
                        marginTop: '40px',
                        marginRight: '5px'
                    }} 
                    theme="image" 
                />
                <center>
                <Form
                    buttonConfig={{
                        theme: 'outline'
                    }}
                    data={[
                        {
                            inputWidth: '100%',
                            name: 'EXP Token Contract Address',
                            id: 'test',
                            type: 'text',
                            validation: {
                                required: true
                            },
                            value: ''
                        },
                        {
                            inputWidth: '100%',
                            name: 'Badge Name',
                            id: 'test2',
                            type: 'text',
                            value: ''
                        },
                        {
                            inputWidth: '100%',
                            name: 'Badge Symbol',
                            id: 'test3',
                            type: 'text',
                            value: ''
                        }
                    ]}
                    onChange={handleFormDataChange}
                    onSubmit={handleFormSubmit} // This will be the function that deploys
                    title="Deploy Badges"
                /></center>
            </div>
        </div>
    );
}