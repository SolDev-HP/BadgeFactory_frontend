import { Button, ConnectButton, Dropdown } from "web3uikit"
import { Navbar, Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { etherPresent } from "../utils/check_ethereum"

function Header() {
    const [ connectedWallet, setConnectedWallet ] = useState('Connect With Wallet')
    const [ ethereumPresent, setEthereumPresent ] = useState(false)

    useEffect(() => {
        if(etherPresent()) {
            setEthereumPresent(true)
            return
        }
        setEthereumPresent(false)
    }, [])

    async function performUserLogin() {
        // If ethereum exists 
        const provider = new ethers.providers.Web3Provider(window.ethereum); //Using injected one by metamask
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner()
        try {
            const signerAddress = await signer.getAddress()
            const walletstatestr = `Connected:  ${signerAddress.slice(0, 6)}...${signerAddress.slice(signerAddress.length - 4)}`
            setConnectedWallet(walletstatestr)
        } catch {
            setConnectedWallet("Connect With Wallet")
        }
    }

    return (
        <Navbar bg="light" expand="lg" className="">
            <Container>
                <Navbar.Brand href="#">BadgeFactory</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {/* <Dropdown
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
                        isDisabled="true"
                        hasOutline="true"
                    /> */}
                    {/* * Remove react moralis connectbutton and prepare login button from the groundup
                    <ConnectButton moralisAuth={false} /> */}

                    <Button
                        onClick={performUserLogin}
                        text={connectedWallet}
                        theme="outline"
                        {...(!ethereumPresent && { disabled: true })}   // Disable if there's no injected ethereum in window obj
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;