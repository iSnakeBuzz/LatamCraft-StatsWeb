import React from 'react';
import Versus from './Player/Versus';

const Banner = () => {
    return (
        <div className="grid g-center gmx-5 banner w-100" style={{ backgroundImage: "url('/bannerBackground.png')" }} >
            <div className="flex g-center gmx-10">
                <Versus position="right" type="killer" />
                <div>VS</div>
                <Versus position="left" type="victim" />
            </div>
        </div>
    );
};

export default Banner;