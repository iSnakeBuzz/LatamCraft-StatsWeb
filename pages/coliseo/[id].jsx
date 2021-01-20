import React from 'react';
import Banner from '../../modules/Banner';
import UsersContext from '../../modules/Contexts/UsersContext';
import Layout from '../../modules/Layout';
import Player from '../../modules/Player';

import Router from 'next/router';
import Game from '../../modules/Game';
import useResize from '../../modules/useResize'

const index = ({ data }) => {

    const { width } = useResize();
    const [respGrid, setRespGrid] = React.useState("flex gmx-5 g-center");
    const [divider, setDivider] = React.useState("15% 2px");

    React.useEffect(() => {
        if (width < 900) {
            setRespGrid('grid g-center gmy-5');
            setDivider("2px 48%")
        } else {
            setRespGrid("flex gmx-10 g-center");
            setDivider("12% 2px")
        };
    }, [width])

    return (
        <UsersContext.Provider value={data}>
            <Layout>
                <div className='grid g-center gmy-25'>
                    <Banner />
                    <Game />

                    <div className={respGrid}>
                        <Player type='killer' config={{ direction: 'left' }} />

                        <div style={{ backgroundColor: "var(--paper-background)", padding: divider }} />

                        <Player type='victim' config={{ direction: 'right' }} />
                    </div>
                </div>
            </Layout>
        </UsersContext.Provider>
    );
};

index.getInitialProps = async ({ res, query }) => {
    const { id } = query;
    console.log('ID:', id)

    let data = await fetch(`https://api.latamcraft.es/coliseo/${id}`);
    let usersData = await data.json();

    if (usersData.error) {
        if (res) {
            res?.writeHead(302, { Location: '/', });
            res?.end();
        } else Router.push('/');
        return {};
    }

    console.log('Data:', usersData)

    return { data: usersData }
}

export default index;