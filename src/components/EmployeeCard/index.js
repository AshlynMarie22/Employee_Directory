import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (


    <tr>
      <td className="img-container"><img alt={props.name} src={props.image} /></td>
      <td>{props.name.first + ' ' + props.name.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
      <td><span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span></td>
    </tr>


  );
}

export default EmployeeCard;
