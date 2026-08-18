import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const sliderData = [
  {
    id: 1,
    tag: "LIMITED TIME",
    tagJp: "期間限定",
    title: "Experience Pure Sound",
    subtitle: "Your Perfect Headphones Awaits!",
    offer: "30% Off",
    buttonText1: "Buy now",
    buttonText2: "Find more",
    imgSrc: assets.header_headphone_image,
    num: "01",
  },
  {
    id: 2,
    tag: "NEW RELEASE",
    tagJp: "新発売",
    title: "Next-Level Gaming Starts Here",
    subtitle: "Discover PlayStation 5 Today!",
    offer: "Few Left",
    buttonText1: "Shop Now",
    buttonText2: "Explore Deals",
    imgSrc: assets.header_playstation_image,
    num: "02",
  },
  {
    id: 3,
    tag: "EXCLUSIVE DEAL",
    tagJp: "特別価格",
    title: "Power Meets Elegance",
    subtitle: "Apple MacBook Pro is Here for you!",
    offer: "40% Off",
    buttonText1: "Order Now",
    buttonText2: "Learn More",
    imgSrc: assets.header_macbook_image,
    num: "03",
  },
];

const HeaderSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full mt-4">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className="relative flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-jp-surface via-jp-bg to-jp-surfaceAlt py-10 md:px-16 px-6 mt-2 rounded-2xl min-w-full border border-jp-borderLight overflow-hidden"
          >
            <div className="absolute top-0 right-0 font-jp text-[200px] md:text-[280px] font-bold text-jp-borderLight/30 leading-none select-none pointer-events-none">
              {slide.num}
            </div>

            <div className="md:pl-8 mt-10 md:mt-0 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="jp-editorial-number">{slide.num} / 03</span>
                <span className="w-8 h-px bg-jp-accent" />
                <span className="text-[10px] font-medium tracking-jp-wide text-jp-accent uppercase">
                  {slide.tag}
                </span>
              </div>

              <p className="font-jp text-[10px] tracking-jp-wide text-jp-light mb-2">
                {slide.tagJp}
              </p>

              <h1 className="max-w-lg text-2xl md:text-[40px] md:leading-[48px] font-medium text-jp-navy tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-jp-muted mt-2 text-sm md:text-base">
                {slide.subtitle}
              </p>

              <div className="flex items-center mt-6 md:mt-8 gap-4">
                <button className="jp-btn-primary">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 text-sm font-medium text-jp-muted hover:text-jp-navy transition-colors duration-200">
                  {slide.buttonText2}
                  <Image
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
                    src={assets.arrow_icon}
                    alt="arrow"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center flex-1 justify-center relative z-10">
              <Image
                className="md:w-72 w-48 drop-shadow-2xl"
                src={slide.imgSrc}
                alt={slide.title}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        {sliderData.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className="group relative flex items-center gap-2"
          >
            <div
              className={`h-[2px] rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-8 bg-jp-accent"
                  : "w-3 bg-jp-border hover:bg-jp-light"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
