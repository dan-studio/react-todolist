import React from "react";
import styled from "styled-components";
import icon from "./logo192.png";
const Header = () => {
  return (
    <HeaderDiv>
      <HeaderA href="/">My Todo List</HeaderA>
      <HeaderA>
        React{" "}
        <img
          style={{ height: "25px", transform: "translateY(2px)" }}
          src={icon}
          alt="Icon"
        />
      </HeaderA>
    </HeaderDiv>
  );
};
const HeaderDiv = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: center;
`;
const HeaderA = styled.a`
  text-decoration: none;
  margin: auto;
  font-size: 30px;
  transition: 0.8s;
  &:hover {
    color: #444;
    font-size: 35px;
  }
`;

export default Header;
