import React, { useState } from 'react';

import Button from './Button';
import ArrowButton from './ArrowButton';
// import InputRadio from './InputRadio';
import Form from './Form';
import ProgressBar from './ProgressBar';
import Switch from './Switch';
import ButtonBox from './ButtonBox';
import { Page1, Page2, Page3, Page4 } from '../Pages';
import Header from './Header';
import formFields from '../formFields';
import formValidation from '../formValidation';
import Section from './Section';

const MyForm = (props) => {
	const [darkTheme, setDarkTheme] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const [progressValue, setProgressValue] = useState(0);
	const [formErrors, setFormErrors] = useState([]);

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSelect = (name, option) => {
		setFormData({ ...formData, [name]: option });
	};

	const [formData, setFormData] = useState({
		gender: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const formPages = [
		<Page1
			formFields={formFields[currentPage]}
			onChange={handleInputChange}
			onSelect={handleSelect}
			inputValue={formData}
			formErrors={formErrors}
		/>,
		<Page2
			formFields={formFields[currentPage]}
			onChange={handleInputChange}
			inputValue={formData}
			formErrors={formErrors}
		/>,
		<Page3 />,
		<Page4 />,
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

	return (
		<Section darkTheme={darkTheme}>
			<Header>
				<h1 onClick={() => console.log(formData)}>MyForm</h1>
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
							onClick={(e) => {
								e.preventDefault();
							}}>
							Send
						</Button>
					)}
				</ButtonBox>
				<ProgressBar value={progressValue}></ProgressBar>
			</Form>
		</Section>
	);
};

export default MyForm;
