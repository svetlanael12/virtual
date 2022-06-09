import React from "react";
import Navigation from "./Navigation";
import classes from './style/Header.module.css'

const Header = ({nav}) => {
  return (
    <header className={classes.header}>
      <Navigation nav={nav}/>
    </header>
  );
};

export default Header;
