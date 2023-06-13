import React from 'react';
import SummaryList from '../components/SummaryList';

const Summary = ({ formData }) => {
	const { firstName, lastName, email, newsletter, phone } = formData;

	const summaryData = [
		{ label: 'First name', value: firstName },
		{ label: 'Last name', value: lastName },
		{ label: 'Email', value: email },
		{ label: 'Newsletter', value: newsletter },
		{ label: 'Phone', value: phone },
	];

	return (
		<>
			<h2>Check your details</h2>
			<SummaryList data={summaryData} />
		</>
	);
};

export { Summary };
