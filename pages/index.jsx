import React from 'react';
import Banner from '../modules/Banner';
import Layout from '../modules/Layout';
import Player from '../modules/Player';

import { useRouter } from 'next/router';
const index = () => {

    return (
        <Layout>
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