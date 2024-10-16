import React from "react";
import invite1 from '../img/invitation1.png'
import invite2 from '../img/invitation2.png'


function Invitation() {
    const table = [
        {
            name: 'Место проведения',
            value: 'Клуб «Картонажник»'
        },
        {
            name:' Дата и время мероприятия',
            value: '22 июня 1927 г. в 18:00'
        },
        {
            name: 'Стоимость входных билетов',
            value: '20 коп.'
        },
        {
            name: 'Плата за игру',
            value: '50 коп.'
        },
        {
            name: 'Взнос на телеграммы',
            oldValue: '100 руб.',
            value: '21 руб. 16коп.',
        },
    ]
    
  return (
    <div className="app__section">
        <div className="app__section__invitation">
            <div className="app__section__invitation__item">
                <div className="app__section__invitation__item__text">
                    <h2 className="app__section__invitation__item__text__title">
                        Чтобы поддержать<br/>Международный васюкинский турнир посетите лекцию на тему: <span className="red">«Плодотворная дебютная идея»</span>
                    </h2>
                </div>
                <img src={invite1} alt="logo" className="app__section__invitation__item__img"/>
            </div>
            <div className="app__section__invitation__item">
                <img src={invite2} alt="logo" className="app__section__invitation__item__img mask"/>
                <div className="app__section__invitation__item__text">
                    <h2 className="app__section__invitation__item__text__title second">
                        и Сеанс <span className="red">одновременной игры в шахматы на 160 досках </span>гроссмейстера О. Бендера
                    </h2>
                    <table className="info">
                        {table.map((data, key) => {
                            return(
                                <tr key={key} className="info__line">
                                    <td className="info__line__name">{data.name}:</td>
                                    <td className="info__line__value">
                                        <span className="info__line__value__old">{data.oldValue}</span>
                                        {data.value}
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                    <p className="app__section__invitation__item__text__note">По всем вопросам обращаться в администрацию к К. Михельсону</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Invitation;
