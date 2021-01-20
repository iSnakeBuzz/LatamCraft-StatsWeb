import React from 'react';

const Avatar = ({ user }) => {
    return (
        <div className="avatar">
            <img src={`https://crafatar.com/avatars/${user.uuid}`} height="100%" width="100%" style={{objectFit: 'cover'}} alt={user.playerName} />
        </div>
    );
};

export default Avatar;