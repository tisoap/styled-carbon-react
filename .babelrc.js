module.exports = {
  env: {
    cjs: {
      plugins: [
        '@babel/plugin-proposal-export-default-from'
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            targets: { esmodules: false },
            loose: true,
          }
        ],
        '@babel/preset-react'
      ]
    },
    es: {
      plugins: [
        '@babel/plugin-proposal-export-default-from'
      ],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: { esmodules: true },
            loose: false,
          }
        ],
        '@babel/preset-react'
      ]
    }
  }
}
