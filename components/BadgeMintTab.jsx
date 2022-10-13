import { Skeleton, Button } from "web3uikit";
import { useSearchParams } from "react-router-dom";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import badgesimage from '../assets/badgeFactory_ethernaut_mint.svg'

export default function BadgeMintTab() {

    const router = useRouter()
    // console.log(router.query["address"])

    if(router.query["address"] !== undefined) {
        return (
            <div className="tab-fixed-common">
                <div>
                <img
                    style={{
                        width: '250px',
                        height: '250px',
                        padding: '5px',
                        marginTop: '40px',
                        marginRight: '5px'
                    }} 
                    src={badgesimage.src} /><br/>
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

    return (
        <div className="tab-fixed-common">
            <div>
                <center>
                    <p style={{ color: 'red'}}> Select a Badge From Deployments to Mint </p>
                </center>
            </div>
        </div>
    )
}