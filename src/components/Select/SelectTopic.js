import React, { useState } from 'react';
import "../Select/SelectTopic.js"

const optionsData = [
    { label: '1.Независимый Казахстан', color: '#ffffff' },
    { label: '2.Древняя Греция', color: '#ffffff' }
  ];
  
  const SelectTopic = ({ options = optionsData }) => {
    const [selectedOption, setSelectedOption] = useState('Topics');
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

  export default SelectTopic;