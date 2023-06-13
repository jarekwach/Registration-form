import React, { useState } from 'react';

import Button from './Button';
import ArrowButton from './ArrowButton';
import Form from './Form';
import ProgressBar from './ProgressBar';
import Switch from './Switch';
import ButtonBox from './ButtonBox';
import Header from './Header';
import Section from './Section';
import formFields from '../formFields';
import formValidation from '../formValidation';
import { UserForm, LoginForm, Consents, Summary } from '../Pages';
import { initialFormData } from '../initialData';
import Alert from './Alert';

const MyForm = () => {
	const [darkTheme, setDarkTheme] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const [progressValue, setProgressValue] = useState(0);
	const [formErrors, setFormErrors] = useState([]);
	const [showAlert, setShowAlert] = useState(false);

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSelect = (name, option) => {
		setFormData({ ...formData, [name]: option });
	};

	const handleCheckboxChange = (name, checked) => {
		setFormData({ ...formData, [name]: checked });
	};

	const [formData, setFormData] = useState(initialFormData);

	const formPages = [
		<UserForm
			formFields={formFields[currentPage]}
			onChange={handleInputChange}
			onSelect={handleSelect}
			inputValue={formData}
			formErrors={formErrors}
		/>,
		<LoginForm
			formFields={formFields[currentPage]}
			onChange={handleInputChange}
			inputValue={formData}
			formErrors={formErrors}
		/>,
		<Consents
			formFields={formFields[currentPage]}
			onChange={handleInputChange}
			onChecked={handleCheckboxChange}
			inputValue={formData}
			formErrors={formErrors}
		/>,
		<Summary formData={formData} />,
	];

	const handleSwitch = () => {
		setDarkTheme(!darkTheme);
	};

	const handleNextPageBtn = (e) => {
		e.preventDefault();
		const errors = formValidation(formData, formFields[currentPage]);

		if (errors.length === 0) {
			setCurrentPage(currentPage + 1);
			setProgressValue(progressValue + 33.33);
		}

		setFormErrors(errors);
	};

	const handlePreviousPageBtn = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
		setProgressValue(progressValue - 33.33);
	};

	const handleSendBtn = (e) => {
		e.preventDefault();
		setShowAlert(true);
	};

	const handleCloseAlert = (e) => {
		e.preventDefault();
		setShowAlert(false);
		setFormData(initialFormData);
		setCurrentPage(0);
		setProgressValue(0);
	};

	return (
		<Section darkTheme={darkTheme}>
			<Header>
				<h1>Registration form</h1>
				<Switch
					isOn={darkTheme}
					onChange={handleSwitch}>
					Dark mode
				</Switch>
			</Header>
			<Form onSubmit={handleNextPageBtn}>
				{formPages[currentPage]}
				<ButtonBox>
					<ArrowButton
						type='button'
						variant='left'
						onClick={handlePreviousPageBtn}
						disabled={currentPage === 0}
					/>
					{currentPage !== formPages.length - 1 ? (
						<ArrowButton
							type='submit'
							variant='right'
						/>
					) : (
						<Button
							type='button'
							onClick={handleSendBtn}>
							Send
						</Button>
					)}
				</ButtonBox>
				{showAlert && (
					<Alert
						darkTheme={darkTheme}
						message={`Form completed. Check your email: ${formData.email}`}
						onClick={handleCloseAlert}
					/>
				)}
				<ProgressBar value={progressValue}></ProgressBar>
			</Form>
		</Section>
	);
};

export default MyForm;
