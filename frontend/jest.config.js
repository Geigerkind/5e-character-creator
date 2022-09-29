module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    },
  },
  transform: {},
  modulePaths: ['<rootDir>'],
  reporters: ['default', 'jest-junit'],
  testResultsProcessor: 'jest-junit',
  collectCoverage: true,
  coverageReporters: ['html', 'cobertura', 'text'],
  cacheDirectory: './jestCache',
};
