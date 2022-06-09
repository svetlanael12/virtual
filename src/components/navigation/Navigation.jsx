import React, { useState } from "react";
import logo from "./svg/logo-head.svg";
import "./style/Navigation.css";
import Button from "../buttons/Button"
import BurgerMenu from "./burger-menu/BurgerMenu";

const Navigation = ({nav}) => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className={nav > 150 ? 'container-nav active' : 'container-nav'}>
    <nav className='nav'>     
      <a href="#0" className='textLogo'>
        <img src={logo} alt="logo" className='imgLogo'/>
        <span>Zone.</span>
        </a>
      <div className='navBlock'>
      <ul className='navList'>
        <li className='navListItem'><a href="#0" className='navListLink'>Home</a></li>
        <li className='navListItem'><a href="#0" className='navListLink'>About Us</a></li>
        <li className='navListItem'><a href="#0" className='navListLink'>Service</a></li>
        <li className='navListItem'><a href="#0" className='navListLink'>Pricing</a></li>
        <li className='navListItem'><a href="#0" className='navListLink'>Blog</a></li>
      </ul>
      <Button className='Btn nav__btn btn-standart'>Contact Us</Button>
      </div>
      <div className='burger-menu' onClick={() => setMenuActive(true)}>
        <span className='burger-menu__span_top'></span>
        <span className='burger-menu__span_middle'></span>
        <span className='burger-menu__span_bottom'></span>
      </div>
    </nav>

    <BurgerMenu active={menuActive} setActive={setMenuActive}/>
    </div>
  );
};

export default Navigation;
