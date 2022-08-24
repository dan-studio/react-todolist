import React from "react";
import styled from "styled-components";
import Form from "../form/Form";
import List from "../list/List";

const Layout = () => {
  return (
    <LayoutDiv>
      <Form/>
      <List />
    </LayoutDiv>
  );
};

const LayoutDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

export default Layout;
