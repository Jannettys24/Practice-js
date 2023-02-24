import React from "react";






function searchBar({ value, isLoading, handleSubmit, onChange }) {
    return (
        <form onSubmit={handleSubmit}>
        <input
        value={value}
        disabled={isLoading}
        onChange={onChange}
        placeholder="Search Recipes"
        className="form-control"
        />
        <input 
        disabled={ isLoading }
        type="submit"
            className="btn"
            value="search"
        />
        </form>
      
    )
}

export default searchBar











// const searchBar = (props) => ({
// value,
// isLoading,
// handleSubmit,
// onChange

// }) => {

//     return (
//         <form onSubmit={handleSubmit}>
//         <input
//         value={value}
//         disabled={isLoading}
//         onChange={onChange}
//         placeholder="Search Recipes"
//         className="form-control"
//         />
//         <input 
//         disabled={ isLoading }
//         type="submit"
//             className="btn"
//             value="search"
//         />
//         </form>
      
//     )
// };
// export default searchBar;