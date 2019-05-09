// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  {{/if_eq}}
  {{#if_eq lintConfig "none"}}
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential'],
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  rules: {
    {{#if_eq lintConfig "standard"}}
    // allow async-await
    'generator-star-spacing': 'off',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    {{/if_eq}}
    // two spaces indent
    'indent': 'off',
    'vue/script-indent': ['error', 2, {
        "baseIndent": 1,
        "switchCase": 1,
    }],
    // forbid using semi at the end of expression
    'semi': ['error', 'never'],
    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',
    // one space needed after comment start
    'spaced-comment': ['error', 'always'],
    // suggest to use '', if there are some variables, `` is ok
    'quotes': ['error', 'single'],
    // warning async function without await keyword
    'require-await': 'warn',
    // no dumplicated variables in function
    'no-dupe-keys': 'error',
    // no unused variables
    'no-unused-vars': 'error',
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [1, "always-multiline"],
    // vue将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错,忽略此项
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    // 禁用 eval()
    'no-eval': 'error',
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': 'error',
    // 禁止多行字符串
    'no-multi-str': 'error',
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': 'error',
    // 禁用未声明的变量
    'no-undef': 'error',
    // 不允许初始化变量值为 undefined
    'no-undef-init': 'error',
    // 要求使用骆驼拼写法
    camelcase: ['error', { properties: 'always' }],
    // 强制关键字周围空格的一致性
    // 'keyword-spacing': ['error', { before: true, after: true }],
    'keyword-spacing': ['error', { "overrides": {
          "if": { "after": false },
          'else': { 'before': false,"after": true },
          "for": { "after": false },
          "while": { "after": false },
          "switch": { "after": false }
        }
      }
    ],
    // 不允许多个空行,最大为2行,强制文件末尾的最大连续空行数为1,强制文件开始的最大连续空行数为1
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 不允许改变用const声明的变量
    'no-const-assign': 'error',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
