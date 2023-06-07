function formValidation(data, fields) {
	const errors = [];
	let passwordValue = '';

	fields.forEach((field) => {
		const value = data[field.name];
		const { name, label, required = true, pattern = null, type } = field;

		if (required) {
			if (value.length < 1) {
				errors.push({
					name,
					message: `'${label}' is required.`,
				});
			}
		}

		if (pattern && name === 'password') {
			const reg = new RegExp(pattern);
			if (!reg.test(value)) {
				errors.push({
					name,
					message: `The password should be at least 8 characters, including a number and a special character.`,
				});
			}
		}

		if (name === 'password') {
			passwordValue = value;
		}

		if (name === 'confirmPassword') {
			if (value !== passwordValue) {
				errors.push({
					name,
					message: `'${label}' does not match the password.`,
				});
			}
		}

		if (pattern) {
			const reg = new RegExp(pattern);
			if (!reg.test(value)) {
				errors.push({
					name,
					message: `Invalid format in '${label}' `,
				});
			}
		}

		if (type === 'number') {
			if (Number.isNaN(Number(value))) {
				errors.push({
					name,
					message: `'${label}' must be a number.`,
				});
			}
		}
	});

	return errors;
}

export default formValidation;
