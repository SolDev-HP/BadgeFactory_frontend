import Content from '../components/Content'
import Footer from '../components/Footer'
// Header, logo, network selection dropdown and login button
// import Header from '../components/Header'
import Deployments from '../components/Deployments'
// Trying to port header here so we can share connected state across componenets
import { Navbar, Container } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { Button } from 'web3uikit'
import { etherPresent } from '../utils/check_ethereum'
import { ethers } from 'ethers'

export default function DappContainer() {

    const [ connectedWallet, setConnectedWallet ] = useState('Connect With Wallet')
    const [ ethereumPresent, setEthereumPresent ] = useState(false)
    const [ isUserLoggedIn, setUserLoggedIn ] = useState(false)

    useEffect(() => {
        if(etherPresent()) {
            setEthereumPresent(true)
            return
        }
        setEthereumPresent(false)
    }, [])

    // When login button is clicked
    // this function checks if user is trying to login or logout, and change connectedWallet accordingly
    async function performUserLogin() {
        // Check if local connection exists
        if(localStorage.getItem("connectedWallet") !== null) {
            // Delete storage
            localStorage.removeItem("connectedWallet")
            // reset login 
            setConnectedWallet("Connect With Wallet")
        } else {
            // Local storage doesn't exist
            // If ethereum exists 
            const provider = new ethers.providers.Web3Provider(window.ethereum); //Using injected one by metamask
            await provider.send('eth_requestAccounts', []);
            const signer = provider.getSigner()
            try {
                const signerAddress = await signer.getAddress()
                const walletstatestr = `Connected:  ${signerAddress.slice(0, 6)}...${signerAddress.slice(signerAddress.length - 4)}`
                setConnectedWallet(walletstatestr)
                // Store the wallet connected locally to verify
                localStorage.setItem("connectedWallet", signerAddress);
            } catch {
                setConnectedWallet("Connect With Wallet")
            }
        }
    }

    // When the connection happens
    useEffect(() => {
        if(connectedWallet === "Connect With Wallet") {
            setUserLoggedIn(false)
            return
        }
        setUserLoggedIn(true)
    }, [connectedWallet])

    return(
        <>
            {/** Header, logo on left and connect button on right */}
            <Navbar bg="light" expand="lg" className="">
                <Container>
                    <Navbar.Brand href="#">BadgeFactory</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Dropdown /> */}
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
            {/** Content, tabs for Deploy Badges, Mint Badge, View Badge/Props */}
            <Content userLoggedIn={isUserLoggedIn} />
            {/** A box to show deployed contracts, one tab for self and other for global */}
            <Deployments userLoggedIn={isUserLoggedIn} />
            {/** Footer, badgefactory and links */}
            <Footer userLoggedIn={isUserLoggedIn} />
        </>
    )
}