import React from 'react';

import '../styles/snake.css'
import '../styles/shark.css'
import '../styles/turtle.css'
import '../styles/mc-font.css'

import '../styles/theme.css'
import '../styles/animations.min.css'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Estadísticas - LatamCraft</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#e67e22" />
        <meta name="description" content="En este sitio encontrarás las estadísticas más recientes de LatamCraft." />

        <link name="shortcut icon" href="https://cdn.latamcraft.es/128x128.png" />

        <meta property="og:url" content="https://stats.latamcraft.es/" />
        <meta property="og:type" content="website" />

        <meta property="og:title" content="Estadísticas - LatamCraft" />
        <meta property="og:site_name" content="LatamCraft" />

        <meta property="og:image" content="https://cdn.latamcraft.es/512x512.png" />
        <meta property="og:image:alt" content="Logo" />

        <meta property="og:description" content="En este sitio encontrarás las estadísticas más recientes de LatamCraft." />

        <meta property="og:locale" content="en_US" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
