import S3 from 'aws-sdk/clients/s3';
import { creds } from '@packages/aws';
import { UtiLClass } from '@packages/util';
import { UserClass as U } from '@packages/user';
import { UserClass } from '@packages/user2';
import { UserClass as U3 } from '@packages/user3';
import { UserClass as U4 } from '@packages/user4';
import { UserClass as U5 } from '@packages/user5';
import { UserClass as U6 } from '@packages/user6';
import { ExpressReceiver } from '@slack/bolt';

const s3 = new S3({
    credentialProvider: creds,
});


class ServerClass {
    constructor() {};
    async test() {
        const util = new UtiLClass();
        await util.test();
        const receiver = new ExpressReceiver({ signingSecret: ''});
        const u = new UserClass();
        u.loader();
        const u2 = new U();
        u2.loader();
        s3.getObject(undefined);
    }
}

export default ServerClass;