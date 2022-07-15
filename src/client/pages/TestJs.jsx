import React from 'react';

const Page = ({ prop }) => {
    return (
        prop
    );
};

Page.getInitialProps = async () => {
    return { prop: '' };
};

export default Page;
