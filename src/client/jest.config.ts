/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: 'v8',

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: ['node_modules', 'src'],

    // The paths to modules that run some code to configure or set up the testing environment before each test
    setupFiles: ['<rootDir>/test/setupTests.js'],
    setupFilesAfterEnv: ['<rootDir>/test/setupTests-env.ts'],

    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        //https://jestjs.io/docs/webpack#handling-static-assets
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/fileMock.js',
    },

    // The root directory that Jest should scan for tests and modules within
    rootDir: '.',

    // The test environment that will be used for testing
    testEnvironment: 'jsdom',

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>/**/?(*.)+(spec|test).[tj]s?(x)'],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '.*/dist/'],

    transformIgnorePatterns: ['../package/', 'dist/', 'node_modules/'],

    // A map from regular expressions to paths to transformers
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(jsx|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
        '^.+\\.(js|ts)$': ['ts-jest'],
    },
};
