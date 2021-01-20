import React from 'react';
import UsersContext from '../Contexts/UsersContext';
import Avatar from './Avatar';

const Versus = ({ position, type }) => {

    let userData = React.useContext(UsersContext).data;

    const getAvatar = (direction) => {
        if (position == direction)
            return (<Avatar user={userData[type]} />)
    }

    return (
        <div className="flex g-center gmx-5">
            {getAvatar('right')}
            <div className="versus">{userData[type].playerName}</div>
            {getAvatar('left')}
        </div>
    );
};

export default Versus;