import Lenis from 'lenis';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimationProvider from './components/AnimationProvider';
import { SEOHead } from './lib/usePageMeta';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Process = lazy(() => import('./pages/Process'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const FAQ = lazy(() => import('./pages/FAQ'));

function WaterBackground() {
  return (
    <div className="water-gradient-bg">
      <div className="water-layer" />
      <div className="water-glow-1" />
      <div className="water-glow-2" />
      <div className="water-glow-3" />
      <div className="grain-overlay" />
    </div>
  );
}

function PageLoader() {
  return <div className="min-h-[70vh] w-full" />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

function AppContent() {
  const location = useLocation();

  const isLegalPage =
    location.pathname === '/privacy' ||
    location.pathname === '/terms';

  useEffect(() => {
    if (isLegalPage) {
      document.body.classList.add('legal-page');
    } else {
      document.body.classList.remove('legal-page');
    }
  }, [isLegalPage]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.2,
      easing: (t) => Math.max(0, 1 - Math.pow(1 - t, 3)),
      wheelMultiplier: 1.0,
      touchMultiplier: isTouchDevice ? 2.0 : 1.5,
      sync: true,
      lerp: 0.08,
      smoothWheel: !prefersReducedMotion,
      touch: !prefersReducedMotion,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-transparent text-white antialiased w-full">
      {!isLegalPage && <WaterBackground />}

      <Navbar />

      <SEOHead />

      <main className="relative z-10 min-w-0 flex-grow overflow-x-hidden">
        <AnimatedRoutes />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimationProvider>
        <AppContent />
      </AnimationProvider>
    </BrowserRouter>
  );
}

export default App;