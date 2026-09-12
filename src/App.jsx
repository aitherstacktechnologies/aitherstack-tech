import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimationProvider from './components/AnimationProvider';
import RouteProgressBar from './components/RouteProgressBar';

const Home = lazy(() => import('./pages/Home'));
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
  return (
    <div className="flex flex-col min-h-screen bg-ast-bg text-ast-text font-sans antialiased overflow-x-hidden w-full page-gradient">
      <Navbar />
      <RouteProgressBar />
      <main className="min-w-0 flex-grow overflow-x-hidden">
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
