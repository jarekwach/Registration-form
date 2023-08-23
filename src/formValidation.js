function formValidation(data, fields) {
	const errors = [];

	fields.forEach((field) => {
		const value = data[field.name];
		const {
			name,
			label,
			required = true,
			pattern = null,
			type,
			errorMsg,
		} = field;

		if (required) {
			if (value.length < 1 || value === false) {
				errors.push({
					name,
					message: `${label} is required.`,
				});
			}
		}

		if (value.length > 0 && pattern) {
			const reg = new RegExp(pattern);
			if (!reg.test(value)) {
				errors.push({
					name,
					message: errorMsg,
				});
			}
		}

		if (type === 'confirmPassword') {
			if (data[field.compareWith] !== value) {
				errors.push({
					name,
					message: errorMsg,
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
