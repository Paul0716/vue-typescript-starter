// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
<<<<<<< HEAD
    'plugin:vue/essential',
=======
    'plugin:vue/essential', 
>>>>>>> tsc setup
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
<<<<<<< HEAD
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-labels': ['error', { 'allowLoop': true }]
=======
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
>>>>>>> tsc setup
  }
}
