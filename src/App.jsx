import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimationProvider from './components/AnimationProvider';
import RouteProgressBar from './components/RouteProgressBar';
import LiquidBackground from './components/LiquidBackground';
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

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<div className="min-h-[70vh]" aria-hidden="true" />}>
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

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-transparent text-ast-text font-sans antialiased w-full page-gradient isolation-isolate">
      {!isLegalPage && <LiquidBackground />}

      <Navbar />

      <RouteProgressBar />

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