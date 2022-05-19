
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Input from './components/Input';
import Select from './components/Select';
import ToggleButton from './components/ToggleButton';


function App() {
	const [disabledIcon, setDisabledIcon] = useState(false);
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
			<h1>Hello world</h1>
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
				<Input disabled />
			</div>

			<div className="container-box">
				<h2>Helper Text</h2>
				<Input helperText='Some Interresting text' />
				<Input helperText='Some Interresting text' error />
			</div>

			<div className="container-box">
				<Select text='Icon' options={iconsOptions} handleChangeEvent={handleIconOptionEvent} />
				<h3>Choose Icon Position</h3>
				<ToggleButton handleOnClick={(e) => setDisabledIcon(e.target.checked)} />
				<div className="container-buttons">
					{
						disabledIcon ? <Input text="Default" startIcon={targetIcon} />
							: <Input text="Default" color='primary' endIcon={targetIcon} />
					}
				</div>
			</div>


			<Footer></Footer>
		</div>
	)
}

export default App 
