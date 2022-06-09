import React from 'react';
import './CardInfo.css';
import pointer from './svg/pointer.svg';


const CardInfo = ({...props}) => {
    return (
        <div className='card-info'>
            <img src={props.url} alt='img' width='74' height='74'/>
            <h3 className='card-info__title'>{props.title}</h3>
            <p className='card-info__text'>
                {props.text}
            
            </p>
            <a href='#0' className='card-info__link'>
                Read more
            </a>
        </div>
    );
};

export default CardInfo;