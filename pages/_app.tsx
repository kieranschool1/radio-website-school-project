import React from 'react'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My new cool app</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp