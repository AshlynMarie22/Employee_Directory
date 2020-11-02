import React from "react";
// import "./style.css";

function Wrapper(props) {
  return <div className="container">
  <div className="row">
    <div className="col-sm-12">
      <table className="table table-striped">
      {props.children}
      </table>
    </div>
  </div>
  </div>;
}

export default Wrapper;
