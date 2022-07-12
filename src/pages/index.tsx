import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-end mr-11">this is a header</header>
        <h1 className="flex justify-center text-blue-800 font-extrabold">
          Welcome to my page
        </h1>
    </>
  )
}

export default Home