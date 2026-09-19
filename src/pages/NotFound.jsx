import React from "react";
import { ArrowLeft } from "lucide-react";
import Hero from "../components/Hero";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-transparent text-ast-text">
      <Hero
        eyebrow="// PAGE NOT FOUND"
        title="404"
        subtitle="The page you're looking for doesn't exist or has been moved. Let's get you back on track."
        align="center"
        compact
        showScroll={false}
        actions={
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/" variant="primary" size="lg" showArrow arrowIcon={ArrowLeft} className="min-w-[200px]">
              Back to Home
            </Button>
            <Button to="/contact" variant="ghost" size="lg" showArrow className="min-w-[200px]">
              Contact Us
            </Button>
          </div>
        }
      />
    </main>
  );
}