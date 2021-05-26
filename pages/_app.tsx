import React from 'react'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Chorus Radio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp