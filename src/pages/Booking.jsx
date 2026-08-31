import React from 'react';
import { ArrowLeft, Calendar, Clock, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import CalBooking from '../components/CalBooking';

export default function Booking() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 border-b border-ast-stone">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>
          
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
              // BOOK A CALL
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
              Schedule a Consultation
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Book a free 30-minute consultation to discuss your project requirements. We'll analyze your needs and provide actionable insights for your digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="border border-ast-stone bg-ast-surface rounded-lg overflow-hidden">
                <CalBooking />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="border border-ast-stone bg-ast-surface p-6 rounded-lg">
                <h3 className="text-lg font-bold text-white mb-6">
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg border border-ast-stone bg-ast-bg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-ast-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white block">30 Minute Session</span>
                      <span className="text-xs text-gray-500">Free consultation to discuss your project</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg border border-ast-stone bg-ast-bg flex items-center justify-center flex-shrink-0">
                      <Video className="w-5 h-5 text-ast-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white block">Video Call</span>
                      <span className="text-xs text-gray-500">Google Meet or Zoom - your choice</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg border border-ast-stone bg-ast-bg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-ast-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-white block">Flexible Scheduling</span>
                      <span className="text-xs text-gray-500">Mon-Fri, 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-ast-stone bg-ast-surface p-6 rounded-lg">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4">
                  // TOPICS WE COVER
                </h3>
                <ul className="space-y-2">
                  {[
                    'Project scope & requirements',
                    'Technical architecture',
                    'Timeline & milestones',
                    'Budget & pricing',
                    'Next steps & roadmap',
                  ].map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-ast-accent" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-ast-stone bg-ast-surface p-6 rounded-lg">
                <h3 className="text-sm font-mono uppercase tracking-wider text-gray-400 mb-4">
                  // CONTACT DIRECTLY
                </h3>
                <a 
                  href="mailto:muhammadzaman.dev@gmail.com" 
                  className="text-lg text-white hover:text-ast-accent transition-colors font-medium"
                >
                  muhammadzaman.dev@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
