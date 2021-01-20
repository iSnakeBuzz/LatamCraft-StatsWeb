import React from 'react';

const Skin = ({ name, className }) => {
    return (
        <img className={className} src={`https://crafatar.com/renders/body/${name}?overlay`} alt="Winner" />
    );
};

export default Skin;