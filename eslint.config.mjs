import { defineConfig, globalIgnores } from 'eslint/config';

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';
import globals from 'globals';
import js from '@eslint/js';
import path from 'node:path';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";
import tsParser from '@typescript-eslint/parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    {
      ignores: [
        '**/*.mjs',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/assets/**',
        '**/coverage/**',
        '**/dist/**',
        '**/node_modules/**',
        '**/public/**',
        'apps/admin/.next/**',
        'apps/graph-api/codegen.ts',
        'apps/graph-api/src/types.ts',
        'apps/tarot/.expo/**',
        'apps/tarot/metro.config.js',
        'packages/ui/.storybook_server/**',
        'packages/ui/.storybook/**',
        'packages/ui/storybook-static/**',

      ]
    },
    {
        extends: compat.extends(
            'eslint:recommended',
            'prettier',
            'plugin:@typescript-eslint/recommended',
            'plugin:react/recommended'
        ),

        plugins: {
            '@typescript-eslint': typescriptEslint
        },
        languageOptions: {
            globals: {
                ...globals.node
            },

            parser: tsParser,
            ecmaVersion: 5,
            sourceType: 'commonjs',

            parserOptions: {
                project: true
            }
        },
        rules: {
            'arrow-body-style': [2, 'as-needed'],
            'arrow-parens': [2, 'as-needed'],
            'array-bracket-spacing': 0,
            'arrow-spacing': 2,
            'block-scoped-var': 2,

            'brace-style': [2, '1tbs', {
                allowSingleLine: true
            }],

            camelcase: [0, {
                properties: 'never'
            }],

            'comma-dangle': [2, 'never'],

            'comma-spacing': [2, {
                before: false,
                after: true
            }],

            'comma-style': [2, 'last'],
            'consistent-return': 0,
            curly: [2, 'multi-line'],
            'default-case': 2,

            'dot-notation': [2, {
                allowKeywords: true
            }],

            'eol-last': 2,
            eqeqeq: 2,
            'func-names': 0,
            'guard-for-in': 2,

            'key-spacing': [2, {
                beforeColon: false,
                afterColon: true
            }],

            'keyword-spacing': 2,

            'new-cap': [0, {
                newIsCap: true
            }],

            'no-alert': 1,
            'no-caller': 2,
            'no-class-assign': 0,
            'no-cond-assign': [2, 'always'],
            'no-console': 1,
            'no-constant-condition': 1,
            'no-debugger': 2,
            'no-dupe-class-members': 2,
            'no-dupe-keys': 2,
            'no-duplicate-case': 2,
            'no-else-return': 2,
            'no-empty': 2,
            'no-eq-null': 2,
            'no-eval': 2,
            'no-ex-assign': 2,
            'no-extend-native': 2,
            'no-extra-bind': 2,
            'no-extra-boolean-cast': 0,
            'no-extra-parens': [2, 'functions'],
            'no-extra-semi': 2,
            'no-fallthrough': 2,
            'no-floating-decimal': 2,
            'no-func-assign': 2,
            'no-implied-eval': 2,
            'no-inner-declarations': 2,
            'no-invalid-regexp': 2,
            'no-irregular-whitespace': 2,
            'no-lone-blocks': 2,
            'no-loop-func': 2,
            'no-mixed-spaces-and-tabs': 2,
            'no-multi-str': 2,

            'no-multiple-empty-lines': [2, {
                max: 2
            }],

            'no-native-reassign': 2,
            'no-nested-ternary': 1,
            'no-new': 2,
            'no-new-func': 2,
            'no-new-object': 2,
            'no-new-wrappers': 2,
            'no-obj-calls': 2,
            'no-octal': 2,
            'no-octal-escape': 2,
            'no-param-reassign': 2,
            'no-proto': 2,
            'no-redeclare': 0,
            'no-return-assign': 0,
            'no-script-url': 2,
            'no-self-compare': 2,
            'no-sequences': 2,
            'no-shadow': 2,
            'no-shadow-restricted-names': 2,
            'no-spaced-func': 2,
            'no-sparse-arrays': 2,
            'no-throw-literal': 2,
            'no-trailing-spaces': 2,
            'no-undef': 2,
            'no-underscore-dangle': 0,
            'no-unreachable': 2,

            'no-unused-vars': "off",
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-require-imports': 'off',

            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': ['warn'],
            'no-with': 2,
            'object-curly-spacing': [2, 'always'],
            'one-var': [2, 'never'],
            'padded-blocks': [2, 'never'],
            'prefer-spread': 2,
            quotes: [2, 'single', 'avoid-escape'],
            radix: 2,
            semi: [2, 'always'],

            'semi-spacing': [2, {
                before: false,
                after: true
            }],

            'sort-vars': 2,
            'space-before-blocks': 2,

            'space-before-function-paren': [2, {
                anonymous: 'always',
                named: 'never'
            }],

            'space-infix-ops': 2,
            'spaced-comment': 2,
            strict: [2, 'never'],
            'use-isnan': 2,
            'vars-on-top': 0,
            'wrap-iife': [2, 'any'],
            yoda: 2,
            'no-var': 2,
            'prefer-const': 2,
            'newline-before-return': 2,
            'prefer-template': 2,
            'no-const-assign': 2,

            'prefer-destructuring': [1, {
                VariableDeclarator: {
                    array: false,
                    object: true
                },

                AssignmentExpression: {
                    array: true,
                    object: true
                }
            }, {
                    enforceForRenamedProperties: false
                }],

            'prefer-rest-params': 2,
            'no-useless-concat': 2,
            'jsx-quotes': [2, 'prefer-double'],
            'react/display-name': 2,
            'react/forbid-prop-types': 1,
            'react/jsx-boolean-value': [0, 'always'],
            'react/jsx-closing-bracket-location': 0,
            'react/jsx-curly-spacing': [2, 'never'],
            'react/jsx-equals-spacing': 2,
            'react/jsx-indent': 0,
            'react/jsx-indent-props': 2,
            'react/jsx-key': 2,
            'react/jsx-max-props-per-line': 0,
            'react/jsx-no-bind': 0,
            'react/jsx-no-duplicate-props': 2,
            'react/jsx-no-literals': 0,
            'react/jsx-no-undef': 2,
            'react/jsx-pascal-case': 0,
            'react/jsx-sort-props': 0,
            'react/jsx-uses-react': 2,
            'react/jsx-uses-vars': 2,
            'react/jsx-wrap-multilines': 2,
            'react/no-deprecated': 2,
            'react/no-did-mount-set-state': 2,
            'react/no-did-update-set-state': 2,
            'react/no-multi-comp': 1,
            'react/no-unknown-property': 2,
            'react/prop-types': 0,
            'react/react-in-jsx-scope': 2,
            'react/self-closing-comp': 2,
            'react/sort-prop-types': 2,
            'react/no-unused-prop-types': 2,
            'react/no-string-refs': 1,
            'react/no-unescaped-entities': 0,

            'react/sort-comp': [2, {
                order: [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'mixins',
                    'statics',
                    'defaultProps',
                    'constructor',
                    'getDefaultProps',
                    'getInitialState',
                    'getChildContext',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount',
                    '/^on.+$/',
                    '/^get.+$/',
                    '/^render.+$/',
                    'render'
                ]
            }],

            'react/prefer-stateless-function': 1
        }
    }
]);
