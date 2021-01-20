import React from 'react';

const Section = ({ children, size }) => {
    return (
        <div className={"grid gmx-5 g-center w-100" + (` c-${size ? size : 1} `)}>
            {children}
        </div>
    );
};

export default Section;