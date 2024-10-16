import React, { useEffect, useState } from "react";

import person from "../img/person.png";
import arrow from "../img/arrow.svg";

const slidesInfo = [
  {
    name: "Хозе-Рауль Капабланка",
    position: "Чемпион мира по шахматам",
    photo: person,
    link: "#",
  },
  {
    name: "Эммануил Ласкер",
    position: "Чемпион мира по шахматам",
    photo: person,
    link: "#",
  },
  {
    name: "Александр Алехин",
    position: "Чемпион мира по шахматам",
    photo: person,
    link: "#",
  },
  {
    name: "Арон Нимцович",
    position: "Чемпион мира по шахматам",
    photo: person,
    link: "#",
  },
  {
    name: "Рихард Рети",
    position: "Чемпион мира по шахматам",
    photo: person,
    link: "#",
  },
  {
    name: "Остап Бендер",
    position: "Гроссмейстер",
    photo: person,
    link: "#",
  },
];

function Members() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesInfo.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slidesInfo.length) % slidesInfo.length
    );
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, [slidesToShow]);

  const loopedSlides = [
    ...slidesInfo.slice(currentSlide),
    ...slidesInfo.slice(0, currentSlide),
  ].slice(0, slidesToShow);

  return (
    <div className="app__section">
      <div className="app__section__members">
        <div className="app__section__members__header">
          <div className="app__section__steps__title">Участники турнира</div>
          <div className="pagination">
            <button className="pagination__button" onClick={prevSlide}>
              <img
                src={arrow}
                alt="prev"
                className="pagination__button__prev"
              />
            </button>
            <div className="pagination__info">
              <span className="pagination__info__active">
                {currentSlide + 1}
              </span>{" "}
              / {slidesInfo.length}
            </div>
            <button className="pagination__button" onClick={nextSlide}>
              <img
                src={arrow}
                alt="prev"
                className="pagination__button__next"
              />
            </button>
          </div>
        </div>
        <div className="slider">
          <div className="slider__content">
            {loopedSlides
            //   .slice(currentSlide, currentSlide + slidesToShow)
              .map((slide, index) => (
                <div key={index} className="slider__content__slide">
                  <img
                    src={slide.photo}
                    alt={slide.name}
                    className="slider__content__slide__img"
                  />
                  <h3 className="slider__content__slide__name">{slide.name}</h3>
                  <p className="slider__content__slide__position">
                    {slide.position}
                  </p>
                  <a
                    href={slide.link}
                    rel="noreferrer"
                    target="_blank"
                    className="slider__content__slide__btn"
                  >
                    Подробнее
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="app__section__marquee">
        <div className="app__section__marquee__text">
          <span className="dot"></span> Дело помощи утопающим — дело рук самих
          утопающих! <span className="dot"></span> Шахматы двигают вперёд не
          только культуру, но и экономику! <span className="dot"></span> Лёд
          тронулся, господа присяжные заседатели!
        </div>
        <div className="app__section__marquee__text marquee__duplicate">
          <span className="dot"></span> Дело помощи утопающим — дело рук самих
          утопающих! <span className="dot"></span> Шахматы двигают вперёд не
          только культуру, но и экономику! <span className="dot"></span> Лёд
          тронулся, господа присяжные заседатели!
        </div>
      </div>
    </div>
  );
}

export default Members;
