import React from "react";
import styled from "styled-components";
import icon from "./logo192.png";
const Header = () => {
  return (
    <HeaderDiv>
      <HeaderA href="/">My Todo List</HeaderA>
      <img
        src="https://velog.velcdn.com/images/danchoi/profile/56f31c7c-29d1-4496-bc0c-6f084d8c2fcb/image.png"
        alt="logo"
        style={{ width: "100px" }}
      />
      <img
        src="https://dan-studio.github.io/assets/logo.ico/android-chrome-192x192.png"
        alt="logo"
        style={{ width: "100px" }}
      />
      <HeaderA>
        React
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
