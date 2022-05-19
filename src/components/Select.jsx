import './Select.scss';


function Select({ text, options, handleChangeEvent }) {

	options.map(it => console.log('it', it));

	return (
		<div className="container-select">
			<h2>{text} Selection</h2>
			<select className="select" name="buttons" onChange={handleChangeEvent}>
				{options.map(it => <option value={it}>{it}</option>)}
			</select>
		</div>
	)
}

export default Select