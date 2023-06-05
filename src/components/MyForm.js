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

const MyForm = (props) => {
	const [isOn, setIsOn] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const [progressValue, setProgressValue] = useState(0);

	const handleInputChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	});

	const formPages = [
		<Page1
			formFields={formFields[currentPage]}
			onChange={handleInputChange}
		/>,
		<Page2 />,
		<Page3 />,
		<Page4 />,
	];

	const handleSwitch = () => {
		setIsOn(!isOn);
	};

	const handleNextPageBtn = (e) => {
		e.preventDefault();

		const errors = formValidation(formData, formFields[currentPage]);
		console.log(errors);

		if (errors.length === 0) {
			setCurrentPage(currentPage + 1);
			setProgressValue(progressValue + 33.33);
		}
	};

	const handlePreviousPageBtn = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
		setProgressValue(progressValue - 33.33);
	};

	return (
		<section style={{ width: '1200px', margin: '100px ' }}>
			<Header>
				<h1 onClick={() => console.log(formData)}>MyForm</h1>
				<Switch
					isOn={isOn}
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
						<Button type='submit'>Submit</Button>
					)}
				</ButtonBox>
				<ProgressBar value={progressValue}></ProgressBar>
			</Form>
		</section>
	);
};

export default MyForm;
