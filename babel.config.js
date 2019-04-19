const defaultPlugins = [
  ['emotion', { 'sourceMap': false }]
]

const devPlugins = [
  ['emotion', { 'sourceMap': true }]
]

const cjsPresetEnvConfig = {
  loose: true,
  modules: 'commonjs',
  targets: { esmodules: false }
}

const defaultPresets = [
  ['@babel/preset-env', cjsPresetEnvConfig],
  '@babel/preset-react'
]

const esPresetEnvConfig = {
  loose: false,
  modules: false,
  targets: { esmodules: true }
}

const esModulePresets = [
  ['@babel/preset-env', esPresetEnvConfig],
  '@babel/preset-react'
]

module.exports = {
  env: {
    cjs: {
      plugins: defaultPlugins,
      presets: defaultPresets
    },
    es: {
      plugins: defaultPlugins,
      presets: esModulePresets
    },
    test: {
      plugins: defaultPlugins,
      presets: defaultPresets
    },
    dev: {
      plugins: devPlugins,
      presets: defaultPresets
    }
  }
}
