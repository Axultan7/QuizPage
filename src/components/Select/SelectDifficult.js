import React, { useState } from 'react';
import "boxicons/css/boxicons.min.css"; // Импортируем стили Boxicons
import "../Select/SelectDifficult.css";

const optionsData = [
  { label: 'Easy', color: '#00C09A' },
  { label: 'Medium', color: '#FFC107' },
  { label: 'Hard', color: '#FF1744' },
];

const SelectDifficult = ({ options = optionsData }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleOptionClick = (option) => {
    // Добавляем выбранную опцию в метки, если её там нет
    if (!selectedTags.find((tag) => tag.label === option.label)) {
      setSelectedTags([...selectedTags, option]);
    }
    setMenuOpen(false);
  };

  const handleRemoveTag = (option) => {
    setSelectedTags(selectedTags.filter((tag) => tag.label !== option.label));
  };

  return (
    <div className="select-difficult-container">
      <div className={`select-menu ${menuOpen ? 'active' : ''}`}>
        <div className="select-btn" onClick={toggleMenu}>
          <span className="sBtn-text">Difficulty</span>
          <i className="bx bx-chevron-down chevron-icon"></i> 
        </div>

        {menuOpen && (
          <ul className="options">
            {options.map((option, index) => (
              <li
                className="option"
                key={index}
                onClick={() => handleOptionClick(option)}
              >
                <span className="option-dot" style={{ backgroundColor: option.color }}></span>
                <span className="option-text" style={{ color: option.color }}>
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Отображение выбранных тегов */}
      <div className="selected-tags">
        {selectedTags.map((tag, index) => (
          <div key={index} className="tag" style={{ borderColor: tag.color }}>
            <span className="tag-label" style={{ color: tag.color }}>
              {tag.label}
            </span>
            <button className="remove-tag-btn" onClick={() => handleRemoveTag(tag)}>
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectDifficult;
