module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: true,
    },
    NODE_ENV: 'test',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx', '!**/index.ts'],
  testMatch: ['<rootDir>/src/**/?(*.)(test).{ts,tsx}'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^axios$': 'axios',
    '^react-flexbox-grid$': 'react-flexbox-grid/dist/react-flexbox-grid',
    // '\\.(css|scss)$': '<rootDir>/jest/cssMock.js',
    // '\\.svg': '<rootDir>/jest/svgMock.js',
  },
  rootDir: '../',
  verbose: true,
};
