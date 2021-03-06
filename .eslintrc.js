module.exports = {
	env: {
		es6: true,
		browser: true,
	},
	extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
	plugins: ['babel', 'import', 'react', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		// General rules
		'import/imports-first': ['error', 'absolute-first'],
		'import/newline-after-import': 'error',
		'react/default-props-match-prop-types': 'off',
		'react/prop-types': 0,
		'arrow-parens': 'off',
		'object-curly-newline': 'off',
		'no-mixed-operators': 'off',
		'arrow-body-style': 'off',
		'function-paren-newline': 'off',
		'no-plusplus': 1,
		'space-before-function-paren': 0,
		'no-multiple-empty-lines': 0,
		'consistent-return': [0, { treatUndefinedAsUnspecified: false }],
		'array-callback-return': [0, { allowImplicit: true }],
		'no-unused-expressions': [0, { allowTaggedTemplates: true }],
		'no-use-before-define': ['error', { variables: false }],
		indent: [0, 2, { SwitchCase: 1 }],
		'no-case-declarations': 0,
		'react/button-has-type': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/jsx-props-no-spreading': 'off',
		'max-len': [
			'error',
			80,
			2,
			{ ignoreUrls: true, ignoreRegExpLiterals: true },
		],
		'no-console': 'error',
		'no-alert': 'error',
		'no-param-reassign': 'off',
		radix: 1,
		'prefer-destructuring': 1,
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
				ignoreReadBeforeAssign: false,
			},
		],
		'no-useless-concat': 'error',
		'no-shadow': 0,
		quotes: ['error', 'single'],
		'no-multi-spaces': 2,
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
		'no-irregular-whitespace': 2,
		camelcase: [2, { properties: 'always' }],
		'no-var': 2,
		'prefer-arrow-callback': 1,
		'prefer-spread': 1,
		'prefer-template': 1,
		'no-trailing-spaces': [2, { skipBlankLines: true }],
		'babel/new-cap': 0,
		'prettier/prettier': 0,
		// React rules
		'react/require-default-props': 'off',
		'react/forbid-prop-types': 0,
		'react/no-did-mount-set-state': 'off',
		'react/no-unused-prop-types': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/destructuring-assignment': [
			1,
			'always',
			{ ignoreClassFields: true },
		],
		'react/no-array-index-key': 0,

		// Import rules
		'import/prefer-default-export': 0,
	},
};
