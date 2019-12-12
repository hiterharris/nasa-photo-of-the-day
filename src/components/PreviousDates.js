import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PreviousDates = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown className='dropdown' isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>More</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>2019-12-11</DropdownItem>
        <DropdownItem>2019-12-10</DropdownItem>
        <DropdownItem>2019-12-09</DropdownItem>
        <DropdownItem>2019-12-08</DropdownItem>
        <DropdownItem>2019-12-07</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default PreviousDates;