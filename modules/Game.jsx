import React from 'react';
import UsersContext from './Contexts/UsersContext';

const Game = () => {

    let gameData = React.useContext(UsersContext).data;

    const parseTime = (SECONDS) => {
        return new Date(SECONDS * 1000).toISOString().substr(11, 8)
    }

    return (
        <div className="flex g-center gmx-10">
            <div className="flex g-center gmx-2">
                <div>⌛</div>
                <div>{parseTime(gameData.duration)}</div>
            </div>
            <div className="flex g-center gmx-2">
                <div>🌍</div>
                <div>{gameData.server}</div>
            </div>
        </div>
    );
};

export default Game;