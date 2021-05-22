import React from 'react';

interface IEmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<IEmptyPageProps> = ({ title }) => {
    return <div>Empty page {title}</div>;
};

export default EmptyPage;
