import React from "react";
import "./style.css";

function EmployeeHeader(props) {
  return (
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col" onClick={() => props.sort()}>
          Name
        </th>
        <th scope="col">Phone Number</th>
        <th scope="col">Email</th>
        <th scope="col">Date of Birth</th>
        <th scope="col">Remove</th>
      </tr>
    </thead>
  );
}

export default EmployeeHeader;
