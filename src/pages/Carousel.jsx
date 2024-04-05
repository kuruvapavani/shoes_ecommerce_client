import React, { useState, useEffect } from "react";
import shoe1 from "./images/shoe2.png";
import shoe2 from "./images/shoe4.png";
import shoe3 from "./images/shoe5.png";

const CarouselComponent = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const items = [
    { src: shoe1, alt: "Logo" },
    { src: shoe2, alt: "Shoe" },
    { src: shoe3, alt: "Shoe" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    },3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-72 overflow-hidden rounded-lg md:h-96">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
              index === currentItemIndex ? "opacity-100" : "opacity-0"
            } duration-700 ease-in-out transition-opacity`}
            data-carousel-item
          >
            <img src={item.src} alt={item.alt} className="h-full carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
