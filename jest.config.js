module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^Components/(.*)$': '<rootDir>/src/components/$1',
    '^Styles/(.*)$': '<rootDir>/src/styles/$1',
    '^Utils/(.*)$': '<rootDir>/src/utils/$1',
    '^Types/(.*)$': '<rootDir>/src/types/$1'
  },
  testPathIgnorePatterns: [
    'node_modules',
    '.cache'
  ]
};