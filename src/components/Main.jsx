import React from "react";
import Form from "./Form";
import Table from "./Table";

const Main = () => {
  return (
    <div className="container d-flex flex-column justify-content-between align-items-center flex-md-row">
      <Form />
      <Table />
    </div>
  );
};

export default Main;
