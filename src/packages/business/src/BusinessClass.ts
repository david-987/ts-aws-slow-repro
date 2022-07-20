import S3 from 'aws-sdk/clients/s3';
import rekognition from 'aws-sdk/clients/rekognition';

import { UtiLClass } from '@packages/util';
import { ExpressReceiver, UnknownError } from '@slack/bolt';

const s3 = new S3({
    credentialProvider: undefined,
});

class BusinessClasss {
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

export default BusinessClasss;
