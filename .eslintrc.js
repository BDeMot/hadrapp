const INLINE_ELEMENTS = [ 'el-button', 'h1', 'h2', 'h3', 'p', 'span', 'small', 'el-tag', 'em' ]

module.exports = {
  extends: [
    '@nuxtjs',
    // 'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'array-bracket-spacing': [ 'error', 'always' ],
    camelcase: 'warn',
    'comma-dangle': [ 'error', 'only-multiline' ],
    'no-console': 'off',
    'object-curly-spacing': [ 'error', 'always' ],
    'padded-blocks': [ 'error', {
      classes: 'always',
    } ],
    'prefer-promise-reject-errors': [ 'error', {
      allowEmptyReject: true,
    } ],
    'vue/attributes-order': [ 'warn', {
      alphabetical: true,
      order: [
        'DEFINITION',
        'CONDITIONALS',
        'LIST_RENDERING',
        'TWO_WAY_BINDING',
        'EVENTS',
        'GLOBAL',
        'UNIQUE',
        'OTHER_DIRECTIVES',
        'CONTENT',
        'RENDER_MODIFIERS',
        'OTHER_ATTR',
      ],
    } ],
    'vue/multiline-html-element-content-newline': [ 'warn', {
      ignores: [ 'pre', 'textarea', ...INLINE_ELEMENTS ]
    } ],
    'vue/singleline-html-element-content-newline': [ 'warn', {
      ignores: [ 'pre', 'textarea', ...INLINE_ELEMENTS ]
    } ]
  },
}