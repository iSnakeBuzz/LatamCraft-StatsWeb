import React from 'react';
import Layout from '../modules/Layout';

import Head from 'next/head';
const index = () => {

    return (
        <Layout>
            <Head>
                <meta name="description" content="En este sitio encontrarás las estadísticas más recientes de LatamCraft." />
                <meta property="og:description" content="En este sitio encontrarás las estadísticas más recientes de LatamCraft." />
            </Head>

            <div className="grid g-center">
                <div className="grid paper g-center gmy-5">
                    <div>
                        Hola, por favor inserte una ID válida.
                    </div>
                    <div style={{ color: "var(--link)" }}>stats.latamcraft.es/coliseo/[ID]</div>
                </div>
            </div>
        </Layout>
    );
};

export default index;