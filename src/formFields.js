const formFields = [
	[
		{
			name: 'firstName',
			label: 'First name',
			required: true,
			pattern: '[a-z]{3,}',
		},
		{
			name: 'lastName',
			label: 'Last name',
			required: true,
			pattern: '[a-z]{3,}',
		},
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true,
			pattern: /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,4}$/i,
		},
		{
			name: 'phone',
			label: 'Phone',
			required: true,
			type: 'number',
			pattern: '[0-9]{9}',
		},
	],
];

export default formFields;
