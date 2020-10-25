module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jest/globals': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react', 'jest', 'cypress'
  ],
  settings: {
    'react': {
      'version': 'detect'
    }
  },
  'rules': {
    'indent': [
      'warn',
      2
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'eqeqeq': 'warn',
    'no-trailing-spaces': 'warn',
    'object-curly-spacing': [
      'warn', 'always'
    ],
    'arrow-spacing': [
      'warn', { 'before': true, 'after': true }
    ],
    'no-console': 0,
    'react/prop-types': 0
  }
}