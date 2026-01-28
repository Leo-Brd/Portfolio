"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { useState, useRef, useId, useEffect } from "react";
import Link from "next/link";

interface SlideImage {
  src: string;
  alt: string;
}

interface SlideIcon {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  darkColor?: string;
}

interface SlideData {
  title: string;
  images: SlideImage[];
  icons?: SlideIcon[];
  carouselImgPosition: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!slideRef.current) return;
    const r = slideRef.current.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { images, title, icons = [] , carouselImgPosition} = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[90vmin] h-[60vmin] md:w-[70vmin] md:h-[70vmin] mx-[2vmin] md:mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        {/* Conteneur de l'image */}
        <Link href={`/projects/${title.toLowerCase().replaceAll(/\s+/g, "-")}`}>
          <div
            className="absolute top-0 left-0 w-full h-[80%] bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out cursor-pointer"
            style={{
              transform:
                current === index
                  ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                  : "none",
            }}
          >
            <img
              className="absolute inset-0 w-[100%] h-[100%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
              style={{
                opacity: current === index ? 1 : 0.5,
                objectPosition: `${carouselImgPosition} center`,
              }}
              alt={images[0].alt}
              src={images[0].src}
              loading="eager"
              decoding="sync"
            />
            {current === index && (
              <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
            )}
          </div>
        </Link>

        {/* Conteneur du texte et des icônes */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[20%] flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-2 md:p-4 rounded-b-[1%] transition-opacity duration-300 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-16 lg:mt-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
              {title}
            </h2>
            {/* Affichage des icônes */}
            <div className="flex space-x-2">
              {icons.map(({ icon: Icon, color, darkColor }, i) => {
                const darkColorClass = darkColor ? `dark:${darkColor}` : "";
                return (
                  <Icon
                    key={`icon-${title}-${i}`}
                    className={`w-6 h-6 md:w-8 md:h-8 ${color} ${darkColorClass}`}
                  />
                );
              })}
            </div>
          </div>
          <Link href={`/projects/${title.toLowerCase().replaceAll(/\s+/g, "-")}`}>
            <button className="mt-2 md:mt-4 px-4 py-1 md:px-6 md:py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
              Voir le projet
            </button>
          </Link>
        </div>
      </li>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({ type, title, handleClick }: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

interface CarouselProps {
  readonly slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[90vmin] h-[60vmin] md:w-[70vmin] md:h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-2vmin] md:mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={slide.title}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)] mt-14 lg:mt-0">
        <CarouselControl
          type="previous"
          title="Voir le projet précédent"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Voir le projet suivant"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}