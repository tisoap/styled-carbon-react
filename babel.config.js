const plugins = [
  '@babel/plugin-proposal-export-default-from'
]

const defaultPresets = [
  '@babel/preset-env',
  '@babel/preset-react'
]

const esModulePresets = [
  ['@babel/preset-env', { 'modules': false }],
  '@babel/preset-react'
]

module.exports = {
  env: {
    cjs: {
      plugins,
      presets: defaultPresets
    },
    es: {
      plugins,
      presets: esModulePresets
    },
    test: {
      plugins,
      presets: defaultPresets
    }
  }
}
