module.exports = {
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each',
    '<rootDir>/jest.setup.js'
  ],
  snapshotSerializers: ['jest-emotion']
}
