import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    const revealObserverOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const sectionObserverOptions = {
      threshold: 0.18,
      rootMargin: '0px 0px -90px 0px',
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, revealObserverOptions);

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-active');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, sectionObserverOptions);

    const revealElements = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('.section-wrap');

    revealElements.forEach((el) => revealObserver.observe(el));
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
};
