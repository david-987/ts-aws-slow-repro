/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The root directory that Jest should scan for tests and modules within
    testMatch: ['**/*.(unit|integrated).test.js'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['node_modules/'],

    // A map from regular expressions to paths to transformers
    transform: {
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.ts$': 'ts-jest',
    },
};
