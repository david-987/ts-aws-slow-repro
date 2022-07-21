import S3 from 'aws-sdk/clients/s3';
import { ExpressReceiver } from '@slack/bolt';

import { creds } from '@packages/aws';
const s3 = new S3({
    credentialProvider: creds,
});

class UtiLClass<T> {
    constructor() {}
    async test() {
        const receiver = new ExpressReceiver({ signingSecret: '' });
        s3.getObject(undefined);
    }

    get(): T {
        throw Error();
    }
}

export default UtiLClass;
