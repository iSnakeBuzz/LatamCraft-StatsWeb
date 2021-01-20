import React from 'react';
import UsersContext from './Contexts/UsersContext';
import Score from './Player/Score';
import Section from './Player/Section';
import Skin from './Player/Skin';

const Player = ({ type, config }) => {

    const userContext = React.useContext(UsersContext).data;
    const data = userContext[type];

    const getSkin = (position) => {
        if (config && config.direction && config.direction === position)
            return (<Skin className={position === 'right' ? "left-image" : ""} name={data.uuid} />);
    }

    return (
        <div className="flex g-center gmx-10">
            {getSkin('left')}
            <div className="grid g-center gmy-5">
                <Section size={3}>
                    <Score data={{
                        name: "Vida",
                        value: parseFloat(data.health).toFixed(2),
                        icon: (<label style={{ color: '#FF5555' }}>❤</label>)
                    }} />

                    <Score data={{
                        name: "Asesinatos",
                        value: data.kills,
                        icon: (<label style={{ color: '#55FFFF' }}>⚔</label>)
                    }} />

                    <Score data={{
                        name: "Muertes",
                        value: data.deaths,
                        icon: (<label style={{ color: '#AA0000' }}>✗</label>)
                    }} />
                </Section>
                <Section size={2}>
                    <Score data={{
                        name: "Hits",
                        value: data.hits,
                        icon: ''
                    }} />

                    <Score data={{
                        name: "Combo",
                        value: data.combo,
                        icon: ''
                    }} />
                </Section>
            </div>
            {getSkin('right')}
        </div>
    );
};

export default Player;