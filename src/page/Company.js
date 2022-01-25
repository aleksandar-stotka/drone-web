import React from "react";
import { useParams } from "react-router-dom";

const Company = () => {
  const { id } = useParams();
  return <div>company</div>;
};

export default Company;
