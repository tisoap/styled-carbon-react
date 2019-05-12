const DesignTokens = {
  fontSizes: [
    12,
    14,
    16,
    18,
    20,
    24,
    28,
    32,
    36,
    42,
    48,
    54,
    60,
    68,
    76,
    84,
    92,
    102,
    112,
    122,
    132,
    144,
    156
  ],
  fontFamilies: {
    mono: "'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace",
    sans: "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
    sansCondensed: "'IBM Plex Sans Condensed', 'Helvetica Neue', Arial, sans-serif",
    sansHebrew: "'IBM Plex Sans Hebrew', 'Helvetica Hebrew', 'Arial Hebrew', sans-serif",
    serif: "'IBM Plex Serif', 'Georgia', Times, serif"
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 600
  },
  space: [
    0,
    1,
    2,
    4,
    8,
    12,
    16,
    24,
    32,
    40,
    48,
    64,
    80,
    96
  ],
  layout: [
    16,
    24,
    32,
    48,
    64,
    96,
    160
  ],
  fluidSpace: [
    0,
    2,
    5,
    10
  ],
  breakpoints: [
    320,
    672,
    1056,
    1312,
    1584
  ],
  colors: {
    black: '#000000',
    white: '#ffffff',
    yellow: '#fdd13a',
    orange: '#fc7b1e',
    red: {
      10: '#fff0f1',
      20: '#fcd0d3',
      30: '#ffa4a9',
      40: '#ff767c',
      50: '#fb4b53',
      60: '#da1e28',
      70: '#a51920',
      80: '#750e13',
      90: '#570408',
      100: '#2c080a'
    },
    magenta: {
      10: '#fff0f6',
      20: '#ffcfe1',
      30: '#ffa0c2',
      40: '#fa75a6',
      50: '#ee538b',
      60: '#d12765',
      70: '#a11950',
      80: '#760a3a',
      90: '#57002b',
      100: '#2a0a16'
    },
    purple: {
      10: '#f7f1ff',
      20: '#e6d6ff',
      30: '#d0b0ff',
      40: '#bb8eff',
      50: '#a66efa',
      60: '#8a3ffc',
      70: '#6e32c9',
      80: '#4f2196',
      90: '#38146b',
      100: '#1e1033'
    },
    blue: {
      10: '#edf4ff',
      20: '#c9deff',
      30: '#97c1ff',
      40: '#6ea6ff',
      50: '#408bfc',
      60: '#0062ff',
      70: '#054ada',
      80: '#0530ad',
      90: '#061f80',
      100: '#051243'
    },
    cyan: {
      10: '#e3f6ff',
      20: '#b3e6ff',
      30: '#6ccaff',
      40: '#30b0ff',
      50: '#1191e6',
      60: '#0072c3',
      70: '#0058a1',
      80: '#003d73',
      90: '#002b50',
      100: '#07192b'
    },
    teal: {
      10: '#dbfbfb',
      20: '#92eeee',
      30: '#20d5d2',
      40: '#00bab6',
      50: '#009c98',
      60: '#007d79',
      70: '#006161',
      80: '#004548',
      90: '#003137',
      100: '#081a1c'
    },
    green: {
      10: '#dafbe4',
      20: '#9deeb2',
      30: '#56d679',
      40: '#3dbb61',
      50: '#24a148',
      60: '#198038',
      70: '#10642a',
      80: '#054719',
      90: '#01330f',
      100: '#081b09'
    },
    coolGray: {
      10: '#f2f4f8',
      20: '#d5d9e0',
      30: '#b9bfc7',
      40: '#9fa5ad',
      50: '#868d95',
      60: '#697077',
      70: '#50565b',
      80: '#373d42',
      90: '#242a2e',
      100: '#13171a'
    },
    gray: {
      10: '#f3f3f3',
      20: '#dcdcdc',
      30: '#bebebe',
      40: '#a4a4a4',
      50: '#8c8c8c',
      60: '#6f6f6f',
      70: '#565656',
      80: '#3d3d3d',
      90: '#282828',
      100: '#171717'
    },
    warmGray: {
      10: '#f7f3f1',
      20: '#e0dbda',
      30: '#c1bcbb',
      40: '#a7a2a2',
      50: '#8f8b8b',
      60: '#726e6e',
      70: '#595555',
      80: '#403c3c',
      90: '#2b2828',
      100: '#1a1717'
    }
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0.38, 0.9)',
    entrance: 'cubic-bezier(0, 0, 0.38, 0.9)',
    exit: 'cubic-bezier(0.2, 0, 1, 0.9)'
  },
  durations: [
    70,
    150,
    250,
    350,
    720
  ],
  zIndex: [
    0,
    10,
    100,
    1000,
    10000
  ]
}

// -- Aliases --

// Font Sizes
DesignTokens.fontSizes['base'] = 16

// Spacing
DesignTokens.space['4xs'] = 1
DesignTokens.space['3xs'] = 2
DesignTokens.space['2xs'] = 4
DesignTokens.space['xs'] = 8
DesignTokens.space['sm'] = 12
DesignTokens.space['md'] = 16
DesignTokens.space['lg'] = 24
DesignTokens.space['xl'] = 32
DesignTokens.space['2xl'] = 40
DesignTokens.space['3xl'] = 48

// Layout Sizes
DesignTokens.layout['2xs'] = 16
DesignTokens.layout['xs'] = 24
DesignTokens.layout['sm'] = 32
DesignTokens.layout['md'] = 48
DesignTokens.layout['lg'] = 64
DesignTokens.layout['xl'] = 96
DesignTokens.layout['2xl'] = 160

// Break points
DesignTokens.breakpoints['sm'] = 320
DesignTokens.breakpoints['md'] = 672
DesignTokens.breakpoints['lg'] = 1056
DesignTokens.breakpoints['xlg'] = 1312
DesignTokens.breakpoints['max'] = 1584

// Durations
DesignTokens.durations['fast'] = 70
DesignTokens.durations['moderate'] = 150
DesignTokens.durations['base'] = 250
DesignTokens.durations['expansion'] = 350
DesignTokens.durations['slow'] = 720

export default DesignTokens
