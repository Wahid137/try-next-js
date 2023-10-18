import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <nav>
                Header
            </nav>
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default layout;