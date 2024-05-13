module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { configFile: './babel.config.js' }],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
