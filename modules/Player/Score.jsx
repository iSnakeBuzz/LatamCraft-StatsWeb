import React from 'react';

const Score = ({ data }) => {
    return (
        <div className="paper grid g-center gmy-2 w-100">
            <div className="bold">{data.name}</div>
            <div className="flex gmx-2 g-center">
                <div>{data.value}</div>
                <div>{data.icon}</div>
            </div>
        </div>
    );
};

export default Score;