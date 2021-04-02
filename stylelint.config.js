module.exports = {
  defaultSeverity: 'warning',
  extends: ['stylelint-config-recommended', 'stylelint-a11y/recommended'],
  plugins: ['stylelint-use-nesting'],
  rules: {
    'color-hex-case': 'lower',
    'csstools/use-nesting': 'always',
    'at-rule-no-unknown': [true, { ignoreAtRules: ['function', 'return', 'include', 'mixin', 'each'] }],
    'property-no-unknown': [true, { ignoreProperties: ['composes', 'composes-with']}],
    'selector-class-pattern': '^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$',
    'selector-id-pattern': '^([a-z][a-z0-9]*)([A-Z][a-z0-9]+)*$',
    'string-quotes': 'single',
    'unit-blacklist': 'px',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ]
  }
};
