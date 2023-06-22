export const getFieldError = (errorsArr, field) =>
	errorsArr.map((error) => {
		if (error.name === field.name) {
			return error.message;
		}
		return null;
	});
