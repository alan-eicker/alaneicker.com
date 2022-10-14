module.exports = {
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
  },
  rootDir: './',
  verbose: true,
};
