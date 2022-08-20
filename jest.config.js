module.exports = {
  verbose: false,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    `/node_modules`,
  ],
}
