import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="contact">Contact Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search contact"
          id="search"
        />
        <datalist id="contact">
          {props.contact.map(contact => (
            <option value={contact} key={contact} />
          ))}
        </datalist>
        {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button> */}
        
      </div>
    </form>
  );
}

export default SearchForm;
