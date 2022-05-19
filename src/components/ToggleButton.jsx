import './ToggleButton.scss'

function ToggleButton({ handleOnClick }) {


	return (
		<label className="switch">
			<input className="switch__input" type="checkbox" onClick={handleOnClick} />
			<span className="switch__slider"></span>
		</label>
	)
}

export default ToggleButton