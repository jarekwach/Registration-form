import { css } from 'styled-components';

export default {
	button: {},

	arrowButton: {
		variant: {
			left: css`
				transform: rotate(135deg);
				left: 2px;
			`,
			right: css`
				transform: rotate(315deg);
				right: 2px;
			`,
			up: css`
				transform: rotate(225deg);
				top: 2px;
			`,
			down: css`
				transform: rotate(45deg);
				bottom: 2px;
			`,
		},

		disabled: css`
			cursor: not-allowed;
		`,
	},
};
