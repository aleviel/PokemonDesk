import React from 'react';

interface IHeading {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    classname?: string;
}

const Heading: React.FC<IHeading> = ({ tag = 'p', children, classname }) => {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return <Tag className={classname}>{children}</Tag>;
};

export default Heading;
