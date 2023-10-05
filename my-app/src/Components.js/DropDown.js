
import React, { useState } from 'react';

function DropDown({ options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button">{selectedOption}</button>
      <ul className="dropdown-options">
        {options.map((option) => (
          <li key={option} onClick={() => handleSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
