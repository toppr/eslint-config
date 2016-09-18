'use strict';

module.exports = {
    'extends': [
        '@toppr/eslint-config',
    ],
    'env': {
        'es6': true,
        'commonjs': true,
    },
    'ecmaFeatures': {
        'modules': true,
    },
    'parser': 'babel-eslint',
};
