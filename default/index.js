'use strict';

module.exports = {
    'extends': [
        'eslint:recommended',
    ],
    'rules': {
        'quotes': ['error', 'single', {
            'avoidEscape': true,
        }],
        'no-console': 'warn',
        'no-debugger': 'warn',
    },
};
