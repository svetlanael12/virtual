import React from 'react';
import Button from '../../buttons/Button';
import './BurgerMenu.css';

const BurgerMenu = ({active, setActive}) => {
    return (
        <section className={active ? 'modal-menu active' : 'modal-menu'} onClick={() => setActive(false)}>
            <div className='menu__content' onClick={(e) => e.stopPropagation()}>
                <ul className='menu__list'>
                    <li className='menu__item'><a href='#0' className='menu__link'>Home</a></li>
                    <li className='menu__item'><a href='#0' className='menu__link'>About Us</a></li>
                    <li className='menu__item'><a href='#0' className='menu__link'>Service</a></li>
                    <li className='menu__item'><a href='#0' className='menu__link'>Pricing</a></li>
                    <li className='menu__item'><a href='#0' className='menu__link'>Blog</a></li>
                    <li className='menu__item'>
                    <Button className='Btn nav__btn btn-standart'>Contact Us</Button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BurgerMenu;