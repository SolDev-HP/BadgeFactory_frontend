import { useState } from "react";
import { Form, Skeleton } from "web3uikit";
import { BADGEFACTORY_ABI, BADGEFACTORY_ADDRESS_ETH_GOERLI, BADGEFACTORY_ADDRESS_OP_GOERLI, BADGEFACTORY_LOCAL, GENERATOR_LIB_LOCAL } from "../contracts/badgefactory_config.js";
import { ethers } from "ethers";

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
        // Perform ethers' tx - deploy badges
        async function perform_badge_deploy() {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            await provider.send('eth_requestAccounts', []); // Not required as per the flow, but just in case use midway changes the wallet
            const signer = provider.getSigner()
            const signerAddress = await signer.getAddress()

            // Prepare contract location 
            const chainID = await (await provider.getNetwork()).chainId // why?? :')
            // Based on chainID, select appropriate badgefactory address
            const badgeFactoryContract = new ethers.Contract(
                chainID === 5777 ? BADGEFACTORY_LOCAL : chainID === 420 ? BADGEFACTORY_ADDRESS_OP_GOERLI : BADGEFACTORY_ADDRESS_ETH_GOERLI,
                BADGEFACTORY_ABI,
                signer      //This time we need the signer, as this tx needs signing
            ) 
            // Make sure we have the address
            console.log(badgeFactoryContract.address)
            const deploy_tx = await badgeFactoryContract.deploy_badges_erc721_with_erc20_attached(
                formdata.input_0,
                GENERATOR_LIB_LOCAL,
                formdata.input_1,
                formdata.input_2
            )

            await deploy_tx.wait()
            console.log(deploy_tx);
        }
        perform_badge_deploy()
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