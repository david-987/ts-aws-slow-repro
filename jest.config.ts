/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
    // The root directory that Jest should scan for tests and modules within
    rootDir: 'src',
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/**/node_modules'],
    // Run tests from one or more projects
    projects: ['<rootDir>/**/jest.config.ts'],
};
