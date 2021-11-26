import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavBar className="NavBar">
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil 
            </NavLink>
            <NavLink exact to="/SwitchPages" activeClassName="nav-active">
                Swiper
            </NavLink>
        </div>
        </NavBar>
    );
};

const NavBar = styled.div`
  .NavBar{
  margin-top: -6%;
}
  .navigation {
    margin: 26px 0;
    width: 60vh;
    display: flex;
    background-color: #e3dbdb;
    justify-content: space-around;
  }
  

  .navigation a {
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    font-size: 1.8rem;
    position: relative;
    color: #0E7C7B;
  }

  .nav-active ::after{
    width: 85%;
    height: 5px;
    bottom: 1px;
    left: 50%;
    transform: translateX(-50%);
  }
`

export default Navigation;