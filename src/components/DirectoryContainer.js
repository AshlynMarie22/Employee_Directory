import React, { Component } from "react";
import SearchForm from "./Search/SearchForm.js";
import API from "../utils/API";
import EmployeeCard from "./EmployeeCard";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Header from "./Header";

class SearchResultContainer extends Component {
  state = {
    ascending: true,
    result: [],
    alteredResult: [],
    search: "",
  };

  componentDidMount() {
    this.searchPeople();
  }

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change

    let value = event.target.value;
    const name = event.target.name;

    this.filterSearch(value);
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  filterSearch = (search) => {
    search = search.toLowerCase();
    const result = this.state.result.filter(
      (emp) =>
        emp.name.first.toLowerCase().indexOf(search) !== -1 ||
        emp.name.last.toLowerCase().indexOf(search) !== -1
    );
    this.setState({ alteredResult: result });
  };

  searchPeople = (query) => {
    API.search(query).then((res) =>
      this.setState({
        result: res.data.results,
        alteredResult: res.data.results,
      })
    );
  };

  removeEmployee = (id) => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(
      (employee) => employee.id !== id
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  sortByName = (event) => {
    const compare = (a, b) => {
      if (this.state.ascending) {
        if (a.name.first > b.name.first) return 1;
        if (a.name.first < b.name.first) return -1;
        return 0;
      } else {
        if (a.name.first < b.name.first) return 1;
        if (a.name.first > b.name.first) return -1;
        return 0;
      }
    };

    const ascendingOrder = this.state.result.sort(compare);
    this.setState({
      ascending: !this.state.ascending,
      alteredResult: ascendingOrder,
    });

    // console.log(ascendingOrder);
  };

  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <>
        <Title>Employee Directory</Title>
        <SearchForm
          search={this.state.search}
          // handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        ></SearchForm>
        <Wrapper>
          <Header sort={this.sortByName}></Header>

          <tbody>
            {this.state.alteredResult.map((employee) => (
              <EmployeeCard
                removeEmployee={this.removeEmployee}
                id={employee.dob.date}
                key={employee.dob.date}
                name={employee.name}
                image={employee.picture.thumbnail}
                phone={employee.phone}
                email={employee.email}
                dob={employee.dob.date.substr(0, 10)}
              />
            ))}
          </tbody>
        </Wrapper>
      </>
    );
  }
}

export default SearchResultContainer;
