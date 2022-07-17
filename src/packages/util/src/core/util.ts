import S3 from 'aws-sdk/clients/s3';
import { ExpressReceiver } from '@slack/bolt';

import { creds } from '@packages/aws';
const s3 = new S3({
    credentialProvider: creds,
});


class UtiLClass {
    constructor() {};
    async test() {
        const receiver = new ExpressReceiver({ signingSecret: ''});
        s3.getObject(undefined);
    }
}

export default UtiLClass;