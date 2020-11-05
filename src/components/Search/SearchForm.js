import React from 'react';

const SearchForm = (props) => {
    return (
        <form className="text-center" style= {formStyle}>
            <input
          type="text"
          name="search"
          style={searchStyle}
          placeholder="Search"
          onChange={props.handleInputChange}
        />
        </form>
    );
};

const formStyle = {
    background: '#f4f4f4',
    padding: "10px", 
    marginBottom: "50px",
}

const searchStyle = {
    flex: "10",
    padding: "5px", 
}

export default SearchForm;