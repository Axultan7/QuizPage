import React, { useState } from 'react';
import "../Select/SelectStatus.css";

const optionsData = [
  { label: 'Complete', color: '#00C09A' },
  { label: 'Incomplete', color: '#FF1744' },
];

const SelectStatus = ({ options = optionsData }) => {
  const [selectedOption, setSelectedOption] = useState('Status');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setMenuOpen(false);
  };

  return (
    <div className={`select-menu ${menuOpen ? 'active' : ''}`}>
      <div className="select-btn" onClick={toggleMenu}>
        <span className="sBtn-text">{selectedOption}</span>
        <i className="bx bx-chevron-down"></i>
      </div>

      {menuOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              className="option"
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{ color: option.color }}
            >
              <span className="option-text">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectStatus;
