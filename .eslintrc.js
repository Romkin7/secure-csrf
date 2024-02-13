module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        'no-explicit-any': 0,
        'no-unresolved': 0,
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true, // Disallow `const { props, state } = this`; true by default
                allowedNames: ['self', 'user', 'product'], // Allow `const self = this`; `[]` by default
            },
        ],
    },
    ignorePatterns: ['node_modules', 'build'],
    overrides: [
        {
            files: ['tests/**/*'],
            env: {
                jest: true,
            },
        },
    ],
};
