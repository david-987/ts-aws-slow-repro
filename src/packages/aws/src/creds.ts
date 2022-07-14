import {
    CredentialProviderChain,
    EnvironmentCredentials,
    SharedIniFileCredentials,
    EC2MetadataCredentials,
} from 'aws-sdk/global';
import { ExpressReceiver } from '@slack/bolt';
import slack from '@slack/web-api';

let a = new slack.WebClient();
let b = new ExpressReceiver({ signingSecret: undefined});
CredentialProviderChain.defaultProviders = [

    () => new EnvironmentCredentials('AWS'),

    () =>
        new SharedIniFileCredentials({
            profile: '',
        }),
    () => new EC2MetadataCredentials(),
];
let creds = new CredentialProviderChain();
export default creds;