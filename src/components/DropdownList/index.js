import './dropdownList.css';

const DropdownList = (props) => {
    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select value={props.value} onChange={event => props.onAltered(event.target.value)} required={props.required}>
                <option value="">Selecione um time</option>
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList;