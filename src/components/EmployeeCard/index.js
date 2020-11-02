import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div>
    <table class="table table-striped">
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
  <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td className="img-container"><img alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
      <td><span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span></td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default EmployeeCard;
