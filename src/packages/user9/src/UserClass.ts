import S3 from 'aws-sdk/clients/s3';
import rekognition from 'aws-sdk/clients/rekognition';

import { UserClass as UserClass10 } from '@packages/user';
import { UserClass as UserClass2 } from '@packages/user2';
import { UserClass as UserClass3 } from '@packages/user3';
import { UserClass as UserClass4 } from '@packages/user4';
import { UserClass as UserClass5 } from '@packages/user5';
import { UserClass as UserClass6 } from '@packages/user6';
import { UserClass as UserClass7 } from '@packages/user7';
import { UserClass as UserClass8 } from '@packages/user8';

import { UtiLClass } from '@packages/util';
import { ExpressReceiver, UnknownError } from '@slack/bolt';

const s3 = new S3({
    credentialProvider: undefined,
});

class UserClass {
    constructor() {}

    async loader() {
        s3.deleteBucket();
        s3.headBucket();
        s3.upload({ Bucket: '', Key: '' });
        const util = new UtiLClass();
        const recog = new rekognition();
        const receiver = new ExpressReceiver({ signingSecret: '' });
        await util.test();
    }
}

export default UserClass;
