module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/jest.setup.js'
  ],
  snapshotSerializers: ['jest-emotion']
}
