module.exports = {
  setupFilesAfterEnv: [
    'jest-dom/extend-expect',
    'react-testing-library/cleanup-after-each',
    '<rootDir>/jest.setup.js'
  ],
  snapshotSerializers: ['jest-emotion']
}
