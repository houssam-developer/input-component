
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Input from './components/Input';
import Select from './components/Select';
import ToggleButton from './components/ToggleButton';


function App() {
	const [disabledIcon, setDisabledIcon] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [helperTextFlag, setHelperTextFlag] = useState(false);
	const [fullWidthFlag, setFullWidthFlag] = useState(false);
	const [iconsOptions, setIconsOptions] = useState([]);
	const [targetIcon, setTargetIcon] = useState('MdAddShoppingCart');


	useEffect(() => {
		setIconsOptions(['MdAddShoppingCart', 'MdAccountCircle', 'MdDns', 'MdMarkunreadMailbox', 'MdQuestionAnswer']);
	}, []);

	function handleIconOptionEvent(e) {
		console.log('iconEvent: ', e);
		const targetSelect = e.target; // target is the element that emits the event
		const targetOption = targetSelect.options[targetSelect.selectedIndex].value;
		setTargetIcon(targetOption);
	}

	return (
		<div className="container">
			<h1>Input Component Challenge</h1>
			<div className="container-box">
				<h2>Default Input</h2>
				<Input />
			</div>
			<div className="container-box">
				<h2>Error Input</h2>
				<Input error />
			</div>

			<div className="container-box">
				<h2>Disabled Input</h2>
				<ToggleButton handleOnClick={(e) => setDisabled(e.target.checked)} />
				<Input disabled={disabled} />
			</div>

			<div className="container-box">
				<h2>Helper Text</h2>
				<ToggleButton handleOnClick={(e) => setHelperTextFlag(e.target.checked)} />
				{
					helperTextFlag ?
						<>
							<Input helperText='Some Interresting text' />
							<Input helperText='Some Interresting text' error />
						</>
						:
						<>
							<Input />
							<Input error />
						</>
				}

			</div>

			<div className="container-box">
				<Select text='Icon' options={iconsOptions} handleChangeEvent={handleIconOptionEvent} />
				<h3>Choose Icon Position</h3>
				<ToggleButton handleOnClick={(e) => setDisabledIcon(e.target.checked)} />
				<div className="container-buttons">
					{
						!disabledIcon ? <Input text="Default" startIcon={targetIcon} />
							: <Input text="Default" color='primary' endIcon={targetIcon} />
					}
				</div>
			</div>

			<div className="container-box">
				<h2>Text Input</h2>
				<Input value='Hello world !' />
			</div>

			<div className="container-box">
				<h2>Text Input</h2>
				<Input size='sm' />
				<Input size='md' />
				<Input size='lg' />
			</div>

			<div className="container-box">
				<h2>Full Width Input</h2>
				<ToggleButton handleOnClick={(e) => setFullWidthFlag(e.target.checked)} />
				<Input fullWidth={fullWidthFlag} />
			</div>

			<div className="container-box">
				<h2>Multiline Input</h2>
				<Input multiline row={2} />
			</div>

			<Footer></Footer>
		</div>
	)
}

export default App 
