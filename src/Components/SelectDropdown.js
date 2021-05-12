//requires a list of options and an update function
//options = list of entries
//update = update parent function

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Select from 'react-select';

const SelectDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected,setSelected] = useState("");
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const formatted = props.options.map(x=>{
        return {value:x,'label':x}
    });
    const send=(data)=>{
        data = data.value;
        if ('idx' in props){
            props.update(data,props.idx);
        }else{
            props.update(data);
        }
    }
    return (
        <div className={"Padded-mid"} style={{"width":"40%","margin":"auto"}}>
        <Select
            options={formatted}
            onChange={send}
        />
        </div>
    );
}

export default SelectDropdown;
