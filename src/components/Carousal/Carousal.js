import React, { useEffect, useRef, useState } from 'react';

import './Carousal.css';
import peopleData from "./data";

const Carousal = () => {
  const interval = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    start();
    return () => clearInterval(interval.current);
  }, []);

  const start = () => {
    interval.current = setInterval(() => {
      setActive((prev) => {
        if (prev === peopleData.length - 1) return 0;
        else return prev + 1;
      });
    }, 3000);
  };

  const stop = () => {
    if (interval.current) clearInterval(interval.current);
  };

  const nextSlide = () => {
    stop();
    setActive((prev) => {
      if (prev === peopleData.length - 1) return 0;
      else return prev + 1;
    });
  };

  const prevSlide = () => {
    stop();
    setActive((prev) => {
      if (prev === 0) return peopleData.length - 1;
      else return prev - 1;
    });
  };

  return (
    <div className="main-container">
      <h1>Carousal</h1>

      <div className="carousal">
        {peopleData.map(({id, image, title}, index) => {
          return (
            <div
              key={id}
              className={active === index ? "carousal-item active" : "carousal-item"}
            >
              <img
                src={image}
                alt={title}
                onMouseOver={stop}
                onMouseLeave={start}
              />
              <div className='title'><h2>Title:</h2><h2>{title}</h2></div>
            </div>
          );
        })}
        <button className="prev" onClick={prevSlide}>&lt;</button>
        <button className="next" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
}

export default Carousal;
