import React from "react";
import "./_navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className='Navbar'>
      <div className='nav_logo'>
        <NavLink to='/'>WebCodersBlog</NavLink>
      </div>
      <div className='nav_items'>
        <ul>
          <li className='nav_item'>
            <NavLink
              activeClassName='active_link'
              exact
              to='/'
              onClick={props.navClose}
            >
              Home
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink
              activeClassName='active_link'
              exact
              to='/about'
              onClick={props.navClose}
            >
              About
            </NavLink>
          </li>
          <li className='nav_item'>
            <NavLink
              activeClassName='active_link'
              exact
              to='/portfolios'
              onClick={props.navClose}
            >
              Portfolios
            </NavLink>
          </li>
          {/* <li className='nav_item'>
            <NavLink
              activeClassName='active_link'
              exact
              to='/blogs'
              onClick={props.navClose}
            >
              Blogs
            </NavLink>
          </li> */}
          <li className='nav_item'>
            <NavLink
              activeClassName='active_link'
              exact
              to='/contact'
              onClick={props.navClose}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <footer>© 2021 Abdullah Al Nahdi All Rights Reserved.</footer>
    </nav>
  );
};

export default Navbar;
