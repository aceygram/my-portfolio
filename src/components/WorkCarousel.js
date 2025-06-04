"use client";
import Image from 'next/image';

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const projects = [
  {
    src: "/images/img-1.png",
    name: "Landing Page",
    github: "https://github.com/yourname/project1",
    live: "https://project1.com",
  },
  {
    src: "/images/img-2.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
  {
    src: "/images/img-3.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
  {
    src: "/images/img-4.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
  {
    src: "/images/img-5.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
  {
    src: "/images/img-6.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
   {
    src: "/images/img-7.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
   {
    src: "/images/img-8.png",
    name: "Portfolio Site",
    github: "https://github.com/yourname/project2",
    live: "https://project2.com",
  },
];

const WorkCarousel = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [x, setX] = useState(0);

  useEffect(() => {
    const speed = 1; // px per frame
    let animationFrame;

    const animate = () => {
      if (trackRef.current && !paused) {
        const scrollWidth = trackRef.current.scrollWidth / 2;

        setX((prev) => {
          const next = prev - speed;
          return Math.abs(next) >= scrollWidth ? 0 : next;
        });
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        ref={trackRef}
        className="carousel-track"
        animate={{ x }}
        transition={{ ease: "linear", duration: 0 }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div className="carousel-item" key={index}>
            <Image 
                            src={project.src} 
                            alt={project.name}
                            width={300}
                            height={200}
                            className="carousel-image"
             />
            <div className="overlay">
              <span className="project-name">{project.name}</span>
              <motion.div
                className="icons"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.6-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 .1.6 2.3 2.4 1.6.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.3 1.3A11.5 11.5 0 0112 6.1c1 .004 2 .14 2.9.4C17.2 4.9 18 5.2 18 5.2c.6 1.8.2 3.1.1 3.4.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.4-5.5 5.8.4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6C20.3 21.4 24 17 24 12c0-6.3-5.2-11.5-12-11.5z" />
                  </svg>
                </a>  
                <a href={project.live} target="_blank" rel="noreferrer" title="Visit site">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z" />
                    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkCarousel;