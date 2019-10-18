import React from 'react';
import classes from './NavBar.module.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>

    </div>
    <div className={classes.item}>
      <NavLink to="/settings" activeClassName={classes.activeLink}>settings</NavLink>
    </div>
  </nav>
}

export default NavBar;