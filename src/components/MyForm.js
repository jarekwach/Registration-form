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

const MyForm = (props) => {
	// do switcha
	const [isOn, setIsOn] = useState(false);
	const handleToggle = () => {
		setIsOn(!isOn);
	};

	return (
		<div style={{ width: '1200px', margin: '100px ' }}>
			<Form style={{ margin: '0 auto' }}>
				<Button>Button</Button>
				<ArrowButton variant='right'></ArrowButton>
				<FormField>
					<Label>
						<InputText></InputText>
					</Label>
				</FormField>
				<ProgressBar value='50'></ProgressBar>
				<Switch
					isOn={isOn}
					onChange={handleToggle}></Switch>
			</Form>
		</div>
	);
};

export default MyForm;
