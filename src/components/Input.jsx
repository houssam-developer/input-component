import './Input.scss';
import * as MdIcons from 'react-icons/md';

function Input({ textLabel = 'Label', text = '', placeholder = 'Placeholder', startIcon = 'MdAddShoppingCart', endIcon = 'MdAddShoppingCart', size, error, fullWidth, multiline, row = 2 }) {
	let startIconVal;
	let endIconVal;
	let setOfClassNames = 'container-component input-component';
	let setOfClassNamesInput = 'container-input';

	if (startIcon) {
		try {
			startIconVal = MdIcons[startIcon]();
		} catch (ex) {
			console.log('unknown icon name');
		}
	}
	if (endIcon) {
		try {
			endIconVal = MdIcons[endIcon]();
		} catch (ex) {
			console.log('unknown icon name');
		}
	}

	if (error) {
		setOfClassNames += ` input-component--error`;
		setOfClassNamesInput += ` container-input--error`;
	}

	return (
		<div className={setOfClassNames}>
			<label className='input-component__label' htmlFor="local-input">{textLabel}</label>
			<div className={setOfClassNamesInput}>
				{startIcon ? startIconVal : ''}
				<input type="text" value={text} placeholder={placeholder} />
				{endIcon ? endIconVal : ''}
			</div>
		</div>
	)
}

export default Input