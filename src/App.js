import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import EmployeeHeader from "./components/Header";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees,
  };

  removeEmployee = (id) => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(
      (employee) => employee.id !== id
    );
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <>
        <Title>Employee List</Title>
         <Wrapper>
          <EmployeeHeader></EmployeeHeader> 

                <tbody>
                  {this.state.employees.map((employee) => (
                    <EmployeeCard
                      removeEmployee={this.removeEmployee}
                      id={employee.id}
                      key={employee.id}
                      name={employee.name}
                      image={employee.image}
                      occupation={employee.occupation}
                      location={employee.location}
                    />
                  ))}
                </tbody>
              
         </Wrapper>  
      </>
    );
  }
}

export default App;
