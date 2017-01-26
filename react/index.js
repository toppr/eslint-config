'use strict';

module.exports = {
    'extends': [
        '@toppr/eslint-config/es6',
        'plugin:react/recommended',
    ],
    'plugins': [
        'react',
    ],
    'env': {
        'browser': true,
    },
    'ecmaFeatures': {
        'jsx': true,
    },
    'rules': {
        'react/display-name': ['warn'],
        'react/require-render-return': ['warn'],
        'react/prefer-es6-class': ['warn', 'always'],
        'react/style-prop-object': 'warn',
        'react/jsx-wrap-multilines': 'warn',
        'react/jsx-no-bind': 'warn',
        'react/jsx-max-props-per-line': ['warn', {
            'maximum': 2,
        }],
        'react/sort-comp': ['warn', {
            'order': [
                'static-methods',
                'lifecycle',
                'everything-else',
                'rendering',
            ],
            'groups': {
                'rendering': [
                    '/^render.+$/',
                    'render',
                ],
            },
        }],
    },
};
