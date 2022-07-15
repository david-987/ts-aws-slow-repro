import React from 'react';

const Page = ({ prop }) => {
    return (
        prop
    );
};

Privacy.getInitialProps = async () => {
    return { prop: '' };
};

export default Page;
