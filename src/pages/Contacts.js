import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchResults from "../components/SearchResults";
import SearchForm from "../components/SearchForm";

class Search extends Component {
  state = {
    search: "",
    contact: [],
    results: [],
  };
//checking if the contacts was retrieved from the api, if not, call the api and store in local storage
  componentDidMount() {
    let storedContacts = JSON.parse(localStorage.getItem("Contacts"));
    if (storedContacts != null) {
        this.setState({ results: storedContacts })
    }
    else{
        API.getContacts()
        .then(res => {
        console.log(res.data)
        this.setState({ results: res.data })
        localStorage.setItem("Contacts", JSON.stringify(res.data))
        })
        .catch(err => console.log(err));}
  }

  //filter contacts
  handleInputChange = event => {
    const value = event.target.value;
    let storedContacts = JSON.parse(localStorage.getItem("Contacts"));
    let filteredContacts = storedContacts.filter(letter => letter.name.includes(value))
    this.setState({ results: filteredContacts });
  };
//Render on the screen
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">My Contacts</h1>
          <SearchForm
            handleInputChange={this.handleInputChange}
            contact={this.state.contact}
          />
          {/* <button type="button" class="btn btn-dark" onClick={event => {event.preventDefault(); this.sortContacts();}}>Order by Name</button> */}
            <SearchResults results={this.state.results}/>
        </Container>
      </div>
    );
  }
}

export default Search;
