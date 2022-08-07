import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="home icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="home icon" />
          <span>WHATCH LIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="home icon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="home icon" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="home icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://i.imgur.com/dGo8DOk.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      align-items: center;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0.5);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 48px;
  width: 48px;
  /* position: absolute;
  right: 30px; */
  cursor: pointer;
`;
