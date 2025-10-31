'use client';

import Products from "./products/page";
import About from "./about/page";
import Contact from "./contact/page";
import { useRef, useEffect } from "react";

function useFadeInOnScroll(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("fade-in-section");
        } else {
          node.classList.remove("fade-in-section");
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);
}

export default function Home() {
  const productsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  useFadeInOnScroll(productsRef);
  useFadeInOnScroll(aboutRef);
  useFadeInOnScroll(contactRef);

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-x-hidden bg-black font-sans">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden w-full" style={{backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-sans">
            Thoughtful Digital Solutions For <br className="hidden md:block" />
            an Evolving World
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-8 font-sans font-normal">
            Our focus is on rapidly developing intelligent products that empower businesses and enrich daily lives globally.
          </p>
          <a href="#products">
            <button
              className="mt-4 px-8 py-3 rounded-full bg-[#2d13aa] text-white font-sans font-extrabold text-lg shadow-lg hover:bg-[#1a237e] transition"
            >
              Explore Our Products
            </button>
          </a>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" ref={productsRef} className="fade-section transition-all duration-1000 bg-black">
        <Products />
      </section>
      {/* About Section */}
      <section id="about" ref={aboutRef} className="fade-section transition-all duration-1000 bg-black">
        <About />
      </section>
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="fade-section transition-all duration-1000 bg-black">
        <Contact />
      </section>
      <style jsx global>{`
        .fade-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s cubic-bezier(.4,0,.2,1), transform 1s cubic-bezier(.4,0,.2,1);
        }
        .fade-in-section {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </div>
  );
}
