import { ConnectButton, Dropdown } from "web3uikit"
import { Dapps } from '@web3uikit/icons'
import { Navbar, Container } from "react-bootstrap"
import { useEffect } from "react"
import { useMoralis, useChain } from "react-moralis"

function Header() {

    const { isWeb3Enabled, chainId, network } = useMoralis()
    useEffect(() => {
        // Whenever Web3Enabled changes, check for login status
        // If logged in
        if(isWeb3Enabled) {
            // Check for supported chainID. currently we support 
            // ETH-Goerli (5 - 0x5) and Optimism-Goerli (420 - 0x1A4)
            console.log(chainId)
            // console.log(network)    // evm

        } else {
            console.log("User is not authenticated")
        }
    }, [isWeb3Enabled]);

    return (
        <Navbar bg="light" expand="lg" className="">
            <Container>
                <Navbar.Brand href="#">BadgeFactory</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Dropdown
                        className="network-chainid-selection"
                        defaultOptionIndex={1}
                        icon={<Dapps fontSize='18px'/>}
                        label="Network: "
                        onChange={(e) => {
                            // Check current chainid
                            // Check selected dropdown option value
                            const currentChainId = chainId
                            console.log(e.id)
                        }}
                        options={[
                            {
                                id: 'ethereum-goerli',
                                label: 'Ethereum Testnet (Goerli)',
                                value: 'test1'
                            },
                            {
                                id: 'optimism-goerli',
                                label: 'Optimism Testnet (Goerli)',
                                value: 'test2'
                            }
                        ]}
                        //isDisabled="true"
                        hasOutline="true"
                    />
                    <ConnectButton moralisAuth={false} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;