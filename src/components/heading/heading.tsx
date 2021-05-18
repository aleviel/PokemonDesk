import React from 'react';

interface IHeading {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const Heading: React.FC<IHeading> = ({ tag = 'p', children }) => {
    return React.createElement(tag, null, children);
};

export default Heading;
