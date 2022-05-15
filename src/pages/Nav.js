import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavButton = styled.button`
  padding: 0.375rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #333;
  background: white;
`;

function Nav() {
  return (
    <div
      className="Nav_body"
      style={{
        position: "fixed",
        backgroundColor: "#fff",
        width: "100%",
        height: "100px",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <span
            style={{
              fontSize: "1.5rem",
              color: "#333",
            }}
          >
            게임 로고
          </span>
        </Link>
        <div
          style={{
            width: "700px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/map">
            <NavButton>MAP</NavButton>
          </Link>
          <Link to="/inventory">
            <NavButton>INVENTORY</NavButton>
          </Link>
          <Link to="/luckybox">
            <NavButton>LUCKYBOX</NavButton>
          </Link>
          <Link to="/shop">
            <NavButton>SHOP</NavButton>
          </Link>
          <Link to="/guide">
            <NavButton>GUIDE</NavButton>
          </Link>
        </div>
        <Link to="/login">
          <span>로그인</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
