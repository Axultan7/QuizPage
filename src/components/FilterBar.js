import React from "react";
import "./FilterBar.css";
import pickIcon from "../images/pick.svg"
import SelectDifficult from "./Select/SelectDifficult";
import SelectTopic from "./Select/SelectTopic";
import SelectStatus from "./Select/SelectStatus";


const FilterBar = ({
  selectedDifficulty,
  setSelectedDifficulty,
  searchText,
  setSearchText,
}) => {
  return (
    <>

      <div className="filter-bar">
         {/* Topics Filter */}
         <SelectTopic/>

        {/* Difficulty Filter */}

        <SelectDifficult/>

        {/* Status Filter */}
        <SelectStatus/>

        

        {/* Search Input */}
        <input
          type="text"
          placeholder="   Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button type="button">
            <img src={pickIcon} alt="Pick Icon"></img>
            <p>Pick One</p>
        </button>
      </div>
    </>
  );
};

export default FilterBar;