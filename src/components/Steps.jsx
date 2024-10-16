import React from "react";
import plane from '../img/plane.png'


function Steps() {
  return (
    <div className="app__section">
        <div className="app__section__steps">
            <div className="app__section__steps__title">
                Этапы преображения Васюков
                <span className="app__section__steps__title__note">Будущие источники<br/>обогащения васюкинцев</span>
            </div>
            <div className="app__section__steps__container">
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">1</div>
                    <p className="app__section__steps__container__item__text">Строительство железнодорожной магистрали Москва-Васюки</p>
                </div>
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">2</div>
                    <p className="app__section__steps__container__item__text">Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p>
                </div>
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">3</div>
                    <p className="app__section__steps__container__item__text">Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p>
                </div>
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">4</div>
                    <p className="app__section__steps__container__item__text">Строительство дворца для турнира</p>
                </div>
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">5</div>
                    <p className="app__section__steps__container__item__text">Размещение гаражей для гостевого автотранспорта</p>
                </div>
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">6</div>
                    <p className="app__section__steps__container__item__text">Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</p>
                </div>
                <div className="app__section__steps__container__item">
                    <div className="app__section__steps__container__item__number">7</div>
                    <p className="app__section__steps__container__item__text">Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн</p>
                    <img src={plane} alt="logo" className="app__section__steps__container__item__img"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Steps;
