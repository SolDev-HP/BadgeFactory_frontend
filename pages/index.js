import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import Footer from '../components/Footer'
// Header, logo, network selection dropdown and login button
// For now, we can use moralis-react hooks and connectButton
import Header from '../components/Header'
// This bit is to understand the connect button under the hood
// usual case where we check whether ethereum is injected or not and then perform account/sign requests 
// react-moralis hooks are useful here, use connectButton component 
// import ManualHeader from '../components/ManualHeader'
import Deployments from '../components/Deployments'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BadgeFactory - Prototype 1</title>
        <meta name="description" content="BadgeFactory prototype to demonstrate how badges are created and how users can mint their badges and view it on the frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/** Header, logo on left and connect button on right */}
      <Header />
      {/** Content, tabs for Deploy Badges, Mint Badge, View Badge/Props */}
      <Content />
      {/** A box to show deployed contracts, one tab for self and other for global */}
      <Deployments />
      {/** Footer, badgefactory and links */}
      <Footer />
    </div>
  )
}
