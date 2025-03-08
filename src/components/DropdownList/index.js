import './dropdownList.css';

const DropdownList = (props) => {

    const onSelect = (event) => {
        props.onAltered(event.target.value);

    }

    return(
        <div className="dropdown-list">
            <label>{props.label}</label>
            <select onChange={onSelect} required={props.required}>
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList;