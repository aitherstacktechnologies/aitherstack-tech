import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-gray-500 font-mono text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-sm max-w-none space-y-8">
            
            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using the services of Aither Stack Technologies ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                All content, designs, graphics, logos, and code created by Aither Stack Technologies remain our intellectual property unless otherwise agreed in writing. Upon full payment, clients receive ownership rights to the final deliverables specified in their project agreement.
              </p>
              <p className="text-gray-400 leading-relaxed">
                You retain ownership of all content, materials, and assets you provide to us for project work.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Service Delivery</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We agree to provide the services as outlined in the project proposal or statement of work. Key terms include:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Project timelines will be mutually agreed upon at project start</li>
                <li>Revisions are limited to the number specified in the project proposal</li>
                <li>Additional revisions beyond the scope may incur additional fees</li>
                <li>Client feedback and approvals are required within 5 business days</li>
              </ul>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Standard payment terms:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>50% deposit required before project commencement</li>
                <li>50% balance due upon project completion</li>
                <li>Payments are due within 14 days of invoice date</li>
                <li>Late payments may incur a 1.5% monthly interest charge</li>
              </ul>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Client Responsibilities</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Provide timely feedback and approvals</li>
                <li>Supply required materials and content within agreed timeframes</li>
                <li>Ensure you have the rights to use any materials provided</li>
                <li>Pay all invoices on time</li>
                <li>Communicate clearly about project requirements</li>
              </ul>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Scope Changes</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Changes to the project scope must be agreed upon in writing. We will provide a revised proposal for any additional work. If changes are requested after work has begun, we reserve the right to adjust timelines and pricing accordingly.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">7. Confidentiality</h2>
              <p className="text-gray-400 leading-relaxed">
                We treat all client information with strict confidentiality. We will not share, sell, or disclose any proprietary information to third parties without your explicit consent, except as required by law.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">8. Warranty Disclaimer</h2>
              <p className="text-gray-400 leading-relaxed">
                Our services are provided "as is" without warranty of any kind. While we strive to deliver high-quality work, we cannot guarantee that the services will be completely error-free or uninterrupted. We provide a 30-day support period for bug fixes after project delivery.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                To the maximum extent permitted by law, Aither Stack Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of or related to our services.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">10. Termination</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Either party may terminate a project with 14 days written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                <li>Client will pay for all work completed up to the termination date</li>
                <li>We will deliver all completed work products</li>
                <li>Any deposits for unstarted work will be refunded</li>
              </ul>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">11. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, through binding arbitration.
              </p>
            </div>

            <div className="border border-ast-stone/30 bg-ast-surface/50 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-4">12. Contact Information</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-white mt-2 font-medium">
                Email: muhammadzaman.dev@gmail.com
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
