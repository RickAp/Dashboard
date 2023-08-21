module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        "/node_modules/(?!(uuid)/)"
    ],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/setupTest.js'],
};