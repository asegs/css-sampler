//requires a list of options and an update function
//options = list of entries
//update = update parent function

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Select = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selected,setSelected] = useState("");
    const toggle = () => setDropdownOpen(prevState => !prevState);
    let options = {}
    if ('idx' in props){
        options = props.options.map(x=><DropdownItem onClick={()=>{props.update(x,props.idx);setSelected(x)}}>{x}</DropdownItem>);
    }else{
        options = props.options.map(x=><DropdownItem onClick={()=>{props.update(x,props.idx);setSelected(x)}}>{x}</DropdownItem>);
    }
    return (
        <div className={"Padded-mid"}>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {selected === "" ? "Choose an option:" : selected}
            </DropdownToggle>
            <DropdownMenu>
                {options}
            </DropdownMenu>
        </Dropdown>
        </div>
    );
}

export default Select;
