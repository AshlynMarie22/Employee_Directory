import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (


    <tr>
      <th scope="row">{props.id}</th>
      <td className="img-container"><img alt={props.name} src={props.image} /></td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
      <td><span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span></td>
    </tr>


  );
}

export default EmployeeCard;
