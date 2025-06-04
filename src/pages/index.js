import { useEffect, useRef, useState } from 'react';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const scrollHandlerRef = useRef(null);
  const keyHandlerRef = useRef(null);
  const observerRef = useRef(null);
  const currentSceneRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    setIsDesktop(window.innerWidth >= 1000);
  }, []);

  const cleanup = () => {
    if (scrollHandlerRef.current) {
      window.removeEventListener('wheel', scrollHandlerRef.current);
      scrollHandlerRef.current = null;
    }
    if (keyHandlerRef.current) {
      window.removeEventListener('keydown', keyHandlerRef.current);
      keyHandlerRef.current = null;
    }
    if (observerRef.current) {
      const sections = document.querySelectorAll(".section");
      sections.forEach(section => observerRef.current?.unobserve(section));
      observerRef.current = null;
    }
    window.scrollTo(0, 0);
  };

  const changeScene = (direction) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const scenes = document.querySelectorAll('.scene');
    const newIndex = Math.max(0, Math.min(currentSceneRef.current + direction, scenes.length - 1));

    if (newIndex !== currentSceneRef.current) {
      scenes[currentSceneRef.current].classList.remove('active');
      scenes[newIndex].classList.add('active');
      currentSceneRef.current = newIndex;
    }

    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 1000);
  };

  const initDesktop = () => {
    cleanup();
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach((scene, i) => scene.classList.toggle('active', i === 0));
    currentSceneRef.current = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      changeScene(e.deltaY > 0 ? 1 : -1);
    };

    const handleKey = (e) => {
      if (e.key === "ArrowDown") changeScene(1);
      if (e.key === "ArrowUp") changeScene(-1);
    };

    scrollHandlerRef.current = handleWheel;
    keyHandlerRef.current = handleKey;
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
  };

  const initMobile = () => {
    cleanup();
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove('visible'));
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      }),
      { threshold: 0.1 }
    );

    observerRef.current = observer;
    sections.forEach(section => observer.observe(section));
    sections[0]?.classList.add('visible');
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      clearTimeout(resizeTimeoutRef.current);
      resizeTimeoutRef.current = setTimeout(() => {
        const newIsDesktop = window.innerWidth >= 1000;
        if (newIsDesktop !== isDesktop) {
          setIsDesktop(newIsDesktop);
          newIsDesktop ? initDesktop() : initMobile();
        }
      }, 150);
    };

    isDesktop ? initDesktop() : initMobile();
    window.addEventListener('resize', handleResize);
    return () => {
      cleanup();
      clearTimeout(resizeTimeoutRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    document.body.classList.toggle('desktop-view', isDesktop);
    document.body.classList.toggle('mobile-view', !isDesktop);
    return () => document.body.classList.remove('desktop-view', 'mobile-view');
  }, [isDesktop, isMounted]);

  if (!isMounted) return <div className="loading-state" />;

  return (
    <main className={`viewport-${isDesktop ? 'desktop' : 'mobile'}`}>
      <Hero />
      <Summary />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}