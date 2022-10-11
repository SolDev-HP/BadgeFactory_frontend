import Head from 'next/head'
import Image from 'next/image'
import DappContainer from '../components/DappContainer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BadgeFactory - Prototype 1</title>
        <meta name="description" content="BadgeFactory prototype to demonstrate how badges are created and how users can mint their badges and view it on the frontend" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <DappContainer />
    </div>
  )
}
