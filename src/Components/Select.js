//requires a list of options and an update function

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Select = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const options = props.options.map(x=><DropdownItem onClick={()=>props.update(x)}>x</DropdownItem>);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Choose an option:
            </DropdownToggle>
            <DropdownMenu>
                {options}
            </DropdownMenu>
        </Dropdown>
    );
}

export default Select;
