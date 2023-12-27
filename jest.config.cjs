module.exports = {
    verbose: true,
    moduleFileExtensions: ['js', 'json'],
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    testPathIgnorePatterns: ['/node_modules/', 'coverage', 'dist'],
    collectCoverage: true,
    collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/jest.config.cjs', '!**/coverage/**'],
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
    coverageDirectory: 'coverage',
};