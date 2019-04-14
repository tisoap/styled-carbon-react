export default {
  title: 'IBM Digital Design',
  modifyBabelRc: config => ({
    ...config,
    plugins: [
      '@babel/plugin-proposal-export-default-from'
    ]
  })
}
