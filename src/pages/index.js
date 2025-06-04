import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => {
    function initScript() {
      const scenes = document.querySelectorAll('.scene');
      console.log("Scenes found:", scenes.length);

      if (window.innerWidth >= 1000) {
        console.log('desktop');
        const scenes = document.querySelectorAll('.scene');
        let current = 0;
        let isTransitioning = false;

        function showScene(index) {
          if (index < 0 || index >= scenes.length) return;
          scenes[current].classList.remove('active');
          scenes[index].classList.add('active');
          current = index;
        }

        function handleScroll(e) {
          if (isTransitioning) return;
          isTransitioning = true;

          if (e.deltaY > 0) {
            showScene(current + 1);
          } else {
            showScene(current - 1);
          }

          setTimeout(() => {
            isTransitioning = false;
          }, 1200);
        }

        window.addEventListener('wheel', handleScroll);
        window.addEventListener('keydown', (e) => {
          if (e.key === "ArrowDown") showScene(current + 1);
          if (e.key === "ArrowUp") showScene(current - 1);
        });
      } else {
        console.log('mobile');
        const sections = document.querySelectorAll(".section");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));
      }
    }

    initScript();
    window.addEventListener('resize', initScript);

    return () => {
      window.removeEventListener('resize', initScript);
    };
  }, []);

  return (
    <main>
      <Hero />
      <Summary />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}