import S3 from 'aws-sdk/clients/s3';
import { creds } from '@packages/aws';
import { UtiLClass, Optional } from '@packages/util';
import { UserClass } from '@packages/user';
import { BusinessClass } from '@packages/business';

import { ExpressReceiver } from '@slack/bolt';

const s3 = new S3({
    credentialProvider: creds,
});

class ServerClass {
    constructor() {}
    async test() {
        const util = new UtiLClass();
        await util.test();
        const receiver = new ExpressReceiver({ signingSecret: '' });
        const u = new UserClass();
        u.loader();
        s3.getObject(undefined);
    }

    private async testMethod(): Promise<Optional<BusinessClass>> {
        return new UserClass().userMethod();
    }
}

export default ServerClass;
