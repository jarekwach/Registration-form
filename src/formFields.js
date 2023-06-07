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
			pattern: '[a-z]{3,}',
			type: 'text',
		},
		{
			name: 'lastName',
			label: 'Last name',
			required: true,
			pattern: '[a-z]{3,}',
			type: 'text',
		},
	],
	[
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true,
			pattern: /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,4}$/i,
		},
		{
			name: 'password',
			label: 'Password',
			required: true,
			type: 'password',
			pattern: /^(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).{8,}$/,
		},
		{
			name: 'confirmPassword',
			label: 'Confirm password',
			required: true,
			type: 'password',
		},
	],
	[
		{
			name: 'phone',
			label: 'Phone number',
			required: false,
			type: 'number',
			pattern: '[0-9]{9}',
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
