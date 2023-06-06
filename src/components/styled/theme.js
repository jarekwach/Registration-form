import { css } from 'styled-components';

export default {
	darkTheme: css`
		background-color: #333;
		color: #fff;

		h1 {
			text-shadow: none;
		}

		button,
		div,
		span {
			box-shadow: none;
		}
	`,

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
