// import React from "react";

// function SearchForm(props) {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="search">Search:</label>
//         <input
//           onChange={props.handleInputChange}
//           // value={props.search}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search for a Gif"
//           id="search"
//         />
//         <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
//           Search
//         </button>
//       </div>
//     </form>
//   );
// }

// export default SearchForm;

import React from 'react';

const SearchForm = (props) => {
    return (
        <form className="text-center" style= {formStyle}>
            <input
          type="text"
          name="search"
          style={searchStyle}
          placeholder="Search"
        //   value={this.props.search}
          onChange={props.handleInputChange}
        />
        </form>
    );
};

const formStyle = {
    background: '#f4f4f4',
    padding: "10px", 
}

const searchStyle = {
    flex: "10",
    padding: "5px", 
}

export default SearchForm;