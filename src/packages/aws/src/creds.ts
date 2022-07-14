import {
    CredentialProviderChain,
    EnvironmentCredentials,
    SharedIniFileCredentials,
    EC2MetadataCredentials,
} from 'aws-sdk/global';

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