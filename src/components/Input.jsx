import './Input.scss';
import * as MdIcons from 'react-icons/md';
import { useState } from 'react';

function Input({
	textLabel = 'Label',
	value = '',
	helperText = '',
	placeholder = 'Placeholder',
	startIcon = '',
	endIcon = '',
	disabled,
	size,
	error,
	fullWidth,
	multiline,
	row = 5
}) {

	const [text, setText] = useState(value);
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

	if (disabled) { setOfClassNames += ` disabled-component`; }


	if (size === 'sm') { setOfClassNames += ` container-input--size--small`; }
	if (size === 'md') { setOfClassNames += ` container-input--size--medium`; }
	if (size === 'lg') { setOfClassNames += ` container-input--size--large`; }

	if (fullWidth) { setOfClassNames += ` container-input--fullwidth`; }

	if (multiline) { setOfClassNamesInput += ` container-input__textarea` }

	return (
		<div className={setOfClassNames}>
			<label className='input-component__label' htmlFor="local-input">{textLabel}</label>
			<div className={setOfClassNamesInput}>
				{startIcon ? startIconVal : ''}
				{multiline ?
					<textarea className={setOfClassNamesInput} rows={row} value={text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} disabled={disabled} />
					: <input type="text" value={disabled ? '' : text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} disabled={disabled} />}
				{endIcon ? endIconVal : ''}
			</div>
			<span className='helper-text'>{helperText}</span>
		</div>
	)
}

export default Input