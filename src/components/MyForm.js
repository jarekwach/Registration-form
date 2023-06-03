import React, { useState } from 'react';

import Button from './Button';
import ArrowButton from './ArrowButton';
import InputText from './InputText';
// import InputRadio from './InputRadio';
import Form from './Form';
import ProgressBar from './ProgressBar';
import Switch from './Switch';
import Label from './Label';
import FormField from './FormField';
import ButtonBox from './ButtonBox';
import { Page1, Page2, Page3, Page4 } from '../Pages';

const MyForm = (props) => {
	// do switcha
	// const [isOn, setIsOn] = useState(false);
	// const handleToggle = () => {
	// 	setIsOn(!isOn);
	// };

	const formPages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />];
	const [currentPage, setCurrentPage] = useState(0);
	const [progressValue, setProgressValue] = useState(0);

	const nextPage = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage + 1);
		setProgressValue(progressValue + 33.33);
	};

	const previousPage = (e) => {
		e.preventDefault();
		setCurrentPage(currentPage - 1);
		setProgressValue(progressValue - 33.33);
	};

	return (
		<section style={{ width: '1200px', margin: '100px ' }}>
			<Form>
				{formPages[currentPage]}
				<ButtonBox>
					<ArrowButton
						variant='left'
						onClick={previousPage}
						disabled={currentPage === 0}
					/>
					<ArrowButton
						variant='right'
						onClick={nextPage}
						disabled={currentPage === formPages.length - 1}
					/>
				</ButtonBox>
				<ProgressBar value={progressValue}></ProgressBar>
			</Form>
		</section>
	);
};

export default MyForm;
