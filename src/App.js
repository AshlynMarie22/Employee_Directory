import React, { Component } from "react";
import SearchResultContainer from "./components/SearchResultContainer";



class App extends Component {
//   // Setting this.state.employees to the employees json array
//   state = {
// employees
//   };

//   removeEmployee = (id) => {
//     // Filter this.state.employees for employees with an id not equal to the id being removed
//     const employees = this.state.employees.filter(
//       (employee) => employee.id !== id
//     );
//     // Set this.state.employees equal to the new employees array
//     this.setState({ employees });
//   };
  
//   sortByName = () => {
//     const compare = (a, b) => {
//       if (this.state.ascending) {
//         if (a.name.first > b.name.first) return 1;
//         if (a.name.first < b.name.first) return -1;
//         return 0;
//       } else {
//         if (a.name.first < b.name.first) return 1;
//         if (a.name.first > b.name.first) return -1;
//         return 0;
//       }
//     };

//     const ascendingOrder = this.state.result.sort(compare);
//     this.setState({
//       ascending: !this.state.ascending,
//       alteredResult: ascendingOrder,
//     });

//     // console.log(ascendingOrder);
//   };



//   // Map over this.state.employees and render a employeeCard component for each employee object
  render() {
    return (
      <>
<SearchResultContainer></SearchResultContainer>
      </>
    );
  }
}


export default App;
