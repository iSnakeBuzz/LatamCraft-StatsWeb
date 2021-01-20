import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="grid g-center vh-100">
            <main>
                {children}
            </main>
            <footer className="footer flex g-center gmx-2">
                <div>Made</div>
                <div>with</div>
                <div className="animate__animated animate__heartBeat animate__infinite" style={{ color: '#eb2f06' }}>❤</div>
                <div>by</div>
                <a href="https://github.com/iSnakeBuzz" target="_blank">iSnakeBuzz_</a>
            </footer>
        </div>
    );
};

export default Layout; 