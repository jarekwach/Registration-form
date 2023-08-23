const formFields = [
	[
		{
			name: 'gender',
			label: 'Gender',
			required: true,
			type: 'select',
			options: ['male', 'female'],
		},
		{
			name: 'firstName',
			label: 'First name',
			required: true,
			type: 'text',
			pattern: '[a-z]{3,}',
			errorMsg: 'Minimum 3 characters.'
		},
		{
			name: 'lastName',
			label: 'Last name',
			required: true,
			type: 'text',
			pattern: '[a-z]{3,}',
			errorMsg: 'Minimum 3 characters.'
		},
	],
	[
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true,
			pattern: /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,4}$/i,
			errorMsg: 'Invalid email format.',
		},
		{
			name: 'password',
			label: 'Password',
			required: true,
			type: 'password',
			pattern: /^(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/,
			errorMsg:
				'The password should be at least 8 characters, including a number and a special character.',
		},
		{
			name: 'confirmPassword',
			label: 'Confirm password',
			required: true,
			type: 'confirmPassword',
			compareWith: 'password',
			errorMsg: 'Confirm password does not match the password.',
		},
	],
	[
		{
			name: 'phone',
			label: 'Phone number',
			required: false,
			type: 'number',
			pattern: '[0-9]{9}',
			errorMsg: 'Phone number must have 9 numbers.'
		},
		{
			label: 'Receive offers on phone number',
			name: 'offers',
			required: false,
			type: 'checkbox',
		},

		{
			label: 'Subscribe to newsletter',
			name: 'newsletter',
			required: false,
			type: 'checkbox',
		},
		{
			label: 'Accept regulations',
			name: 'regulations',
			required: true,
			type: 'checkbox',
		},
	],
	[],
];

export default formFields;
