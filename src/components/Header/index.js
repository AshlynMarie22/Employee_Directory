import React from "react";
import "./style.css";

function EmployeeHeader() {
  return (
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Ocupation</th>
      <th scope="col">Location</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  );
}

export default EmployeeHeader;
