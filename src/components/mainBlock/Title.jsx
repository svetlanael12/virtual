import React from "react";
import "./style/Title.css";
import Button from "../buttons/Button";
import mainFrame from "./svg/main-frame.svg";

const Title = () => {
  return (
    <div className="main-head">
      <div className="wrapper-text">
        <h1 className="title">Virtual Reality Business Solutions</h1>
        <p className="main-info">
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
        </p>
        <div className="container-btns">
            <Button className="Btn title__btn btn-standart">Join Us</Button>
            <a className="wrapper__btn-play" href="#0">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-play"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0ZM15 3C11.8174 3 8.76515 4.26428 6.51472 6.51472C4.26428 8.76515 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76515 25.7357 11.8174 27 15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76515 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3ZM12.756 7.704L21.756 13.704C21.9681 13.8275 22.1467 14.0012 22.276 14.2099C22.4053 14.4185 22.4815 14.6557 22.4978 14.9007C22.5141 15.1456 22.47 15.3908 22.3694 15.6147C22.2689 15.8386 22.1149 16.0345 21.921 16.185L12.756 22.296C12.528 22.429 12.269 22.4995 12.0051 22.5004C11.7412 22.5013 11.4817 22.4326 11.2528 22.3011C11.024 22.1696 10.8338 21.9801 10.7017 21.7517C10.5695 21.5232 10.4999 21.2639 10.5 21V9C10.4999 8.73607 10.5695 8.47679 10.7017 8.24834C10.8338 8.01989 11.024 7.83037 11.2528 7.6989C11.4817 7.56743 11.7412 7.49867 12.0051 7.49956C12.269 7.50046 12.528 7.57098 12.756 7.704Z"
                />
              </svg>
              <span className="btn-play__text">Watch video</span>
          </a>
        </div>
      </div>
      <div className="wrapper__img">
        <img src={mainFrame} alt="main-frame" className="title__img" />
      </div>
    </div>
  );
};

export default Title;
