import React from "react";
import { Header } from "semantic-ui-react";

const Product = (props) => {
  return (
    <div>
      <Header as="h1">{props.pageName}</Header>
    </div>
  );
};

export default Product;
