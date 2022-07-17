import React from 'react';
import { UtiLClass } from '@packages/util';
import { UserClass } from '@packages/user';
import { UserClass as UserClass2  } from '@packages/user2';
import { UserClass as UserClass3} from '@packages/user3';
import { UserClass as UserClass4} from '@packages/user4';
import { UserClass as UserClass5} from '@packages/user5';
import { UserClass as UserClass6} from '@packages/user6';
import { UserClass as UserClass7} from '@packages/user7';
import { UserClass as UserClass8} from '@packages/user8';
import { UserClass as UserClass9} from '@packages/user9';
import MyModel from 'server/model'

import Component from 'client/components/TestComponent';

interface Props {
    prop: any[];
}

const Page = ({ prop }: Props): React.ReactElement => {
    return (
        <Component />
    );
};

Page.getInitialProps = async ({ req }) => {
    const util = new UtiLClass();
    const r= util.test();
    return {
        prop: r
    };
};

export default Page;
