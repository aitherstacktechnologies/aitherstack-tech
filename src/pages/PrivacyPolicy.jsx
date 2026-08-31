import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-16 min-h-screen">
      <section className="relative py-16 px-6 sm:px-8 lg:px-12 border-b border-ast-stone/30">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono">Back to Home</span>
          </Link>
          
          <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
            // LEGAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-mono text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            
            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Name, email address, and contact information when you fill out our contact form</li>
                <li>Project details and requirements when you submit an inquiry</li>
                <li>Communication preferences and correspondence history</li>
                <li>Usage data and analytics when you visit our website</li>
              </ul>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver the services you have requested</li>
                <li>Send you updates and information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Contact Forms</h2>
              <p className="text-gray-400 leading-relaxed">
                Our website includes contact forms that collect your name, email address, company information, and message. This information is stored securely in our Supabase database and is used solely to respond to your inquiries. We do not share this information with third parties for marketing purposes.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We may use third-party services for:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Hosting and infrastructure (Vercel)</li>
                <li>Analytics and performance monitoring</li>
                <li>Appointment scheduling (Cal.com)</li>
                <li>Customer relationship management (Supabase)</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                These services have their own privacy policies and we encourage you to review them.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Cookies</h2>
              <p className="text-gray-400 leading-relaxed">
                We may use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">7. Your Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-4">
                To exercise these rights, please contact us at muhammadzaman.dev@gmail.com.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-white mt-2 font-medium">
                Email: muhammadzaman.dev@gmail.com
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
