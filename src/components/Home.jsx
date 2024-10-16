import React from "react";
import logo from '../img/logo.svg'
import homeImg from '../img/homeImg.png'
import mask from '../img/backgroundHome.png'


function Home() {
  return (
    <div className="app__section homeBG">
      <div className="app__section__home">
        <img src={mask} alt="logo" className="app__section__home__mask"/>
        <img src={logo} alt="logo" className="app__section__home__logo"/>
        <img src={homeImg} alt="logo" className="app__section__home__homeImg"/>
        <div className="app__section__home__container">
          <div className="app__section__home__container__title">
            <h1 className="app__section__home__container__title__text">Превратите<br/>уездный город</h1>
            <h1 className="app__section__home__container__title__text">в столицу</h1>
            <h1 className="app__section__home__container__title__text">земного шара</h1>
            <p className="app__section__home__container__title__text">
              Оплатите взнос на телеграммы для организации<br/>Международного васюкинского турнира по шахматам
            </p>
          </div>
          <div className="app__section__home__container__buttonContainer">
            <button className="app__section__home__container__buttonContainer__buttonDark">
              Поддержать шахматную мысль
            </button>
            <button className="app__section__home__container__buttonContainer__buttonLight">
              Подробнее о турнире
            </button>
          </div>
        </div>
      </div>
      <div className="app__section__marquee">
        <div className="app__section__marquee__text">
          <span className="dot"></span> Дело помощи утопающим — дело рук самих утопающих! <span className="dot"></span> Шахматы двигают вперёд не только культуру, но и экономику! <span className="dot"></span> Лёд тронулся, господа присяжные заседатели!
        </div>
        <div className="app__section__marquee__text marquee__duplicate">
          <span className="dot"></span> Дело помощи утопающим — дело рук самих утопающих! <span className="dot"></span> Шахматы двигают вперёд не только культуру, но и экономику! <span className="dot"></span> Лёд тронулся, господа присяжные заседатели!
        </div>
      </div>
    </div>
  );
}

export default Home;
