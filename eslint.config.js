module.exports = [
  {
    extends: ['prettier'],
    files: ['.ts', '.tsx'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react-native/no-inline-styles': 'off',
      'no-lone-blocks': 'off',
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-void': 'off',
    },
  },
];
