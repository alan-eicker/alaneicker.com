module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx', '!**/index.ts'],
  setupFilesAfterEnv: ['./jestSetup.ts'],
  testMatch: ['<rootDir>/src/**/?(*.)(test).{ts,tsx}'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^axios$': 'axios',
    '\\.(css|scss)$': '<rootDir>css-mock.ts',
    '^.+\\.(css|less|scss|yaml)$': '<rootDir>/src/__tests__/mocks/content.json',
    '^react-flexbox-grid$': 'react-flexbox-grid/dist/react-flexbox-grid',
  },
  rootDir: './',
  verbose: true,
};
