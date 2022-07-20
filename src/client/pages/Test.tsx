import React from 'react';
import { BusinessClass } from '@packages/business';
import { UtiLClass } from '@packages/util';
import { UserClass } from '@packages/user';
import MyModel from 'server/product/model';

import Component from 'client/components/TestComponent';

interface Props {
    prop: any[];
}

const Page = ({ prop }: Props): React.ReactElement => {
    return <Component />;
};

Page.getInitialProps = async ({ req }) => {
    const business = new BusinessClass();
    const util = new UtiLClass();
    const r = util.test();
    return {
        prop: r,
    };
};

export default Page;
