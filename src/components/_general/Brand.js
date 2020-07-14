import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../media/Logo.png';
import { NavBar } from '../../style/style';

class Brand extends React.Component {

  render() {
    return (
      <NavBar>
        <img src={logo} alt="logo" />
        <Link to="/">
          <h1>JAM & Peanut Butter</h1>
        </Link>
      </NavBar>
    );
  }
}

export default Brand;
