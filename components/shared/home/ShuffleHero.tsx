/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto ">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl md:text-6xl text-white font-semibold text-center">
          Empower. Engage. Change Together.
        </h3>
        <p className="text-base md:text-lg text-slate-400 my-4 md:my-6 line-clamp-2 text-center">
          Empower volunteers to make a meaningful impact by providing resources,
          support, and opportunities for growth...
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Explore Events
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/assets/images/headImage/01.jpg",
  },
  {
    id: 2,
    src: "/assets/images/headImage/02.jpg",
  },
  {
    id: 3,
    src: "/assets/images/headImage/03.jpg",
  },
  {
    id: 4,
    src: "/assets/images/headImage/04.jpg",
  },
  {
    id: 5,
    src: "/assets/images/headImage/05.jpg",
  },
  {
    id: 6,
    src: "/assets/images/headImage/06.jpg",
  },
  {
    id: 7,
    src: "/assets/images/headImage/07.jpg",
  },
  {
    id: 8,
    src: "/assets/images/headImage/08.jpg",
  },
  {
    id: 9,
    src: "/assets/images/headImage/09.jpg",
  },
  {
    id: 10,
    src: "/assets/images/headImage/10.jpg",
  },
  {
    id: 11,
    src: "/assets/images/headImage/11.jpg",
  },
  {
    id: 12,
    src: "/assets/images/headImage/12.jpg",
  },
  {
    id: 13,
    src: "/assets/images/headImage/13.jpg",
  },
  {
    id: 14,
    src: "/assets/images/headImage/14.jpg",
  },
  {
    id: 15,
    src: "/assets/images/headImage/15.jpg",
  },
  {
    id: 16,
    src: "/assets/images/headImage/16.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
