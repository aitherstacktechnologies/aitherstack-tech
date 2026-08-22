import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const allServicesData = [
  // --- AI Systems ---
  { 
    id: "01", 
    title: "AI Lead Conversion System", 
    price: "Starting at $1,499", 
    description: "A complete AI-powered lead management system designed to turn incoming inquiries into qualified sales opportunities.", 
    whatItDoes: ["Captures leads from website forms & channels", "Categorizes & qualifies prospects automatically", "Assigns lead scores based on intent", "Sends personalized follow-ups & routes leads", "Updates CRM and notifies sales team"], 
    bestFor: "Agencies, real estate, consultants, B2B businesses.", 
    outcome: "Less manual lead handling, organized pipeline." 
  },
  { 
    id: "02", 
    title: "AI Receptionist System", 
    price: "Starting at $1,499", 
    description: "An intelligent AI receptionist acting as the first point of contact between a business and its customers.", 
    whatItDoes: ["Handles customer inquiries & FAQs", "Service info & Basic lead qualification", "Appointment requests & Booking workflows", "Human handoff when required"], 
    bestFor: "Clinics, consultants, property & professional services.", 
    outcome: "Instant response times without manual intervention." 
  },
  { 
    id: "03", 
    title: "AI Appointment Engine", 
    price: "Starting at $1,299", 
    description: "Automated appointment workflow designed to take customers from inquiry to scheduled calendar booking.", 
    whatItDoes: ["Meeting intent detection & Qualification", "Cal.com & Calendar integrations", "Automated confirmations & Reminders", "Booking status tracking"], 
    bestFor: "Consultants, agencies, clinics, appointment-based services.", 
    outcome: "Eliminate scheduling back-and-forth." 
  },
  { 
    id: "04", 
    title: "AI Customer Support System", 
    price: "Starting at $1,799", 
    description: "Custom AI support trained on company knowledge bases, docs, FAQs, and product manuals.", 
    whatItDoes: ["Context-aware automated conversations", "Ticket routing & Issue categorization", "Seamless human escalation", "Analytics & Support knowledge updates"], 
    bestFor: "Growing businesses with repetitive customer support volume.", 
    outcome: "Faster customer resolution while freeing up human agents." 
  },
  { 
    id: "05", 
    title: "AI Business Operations Agent", 
    price: "Starting at $2,499", 
    description: "Tailored operational AI agent designed to automate repetitive internal business workflows.", 
    whatItDoes: ["Data processing & Task creation", "Information extraction & Notifications", "Internal report generation & Database updates"], 
    bestFor: "Companies using multiple tools for repetitive internal operations.", 
    outcome: "Consistent internal workflows with minimal manual work." 
  },
  { 
    id: "06", 
    title: "Custom AI Systems", 
    price: "Starting at $2,499", 
    description: "Purpose-built AI systems tailored specifically around unique business infrastructure and requirements.", 
    whatItDoes: ["Custom AI agents & Workflows", "API, Database & CRM integrations", "Dashboards, internal tools & custom interfaces"], 
    bestFor: "Businesses with complex non-standard operations.", 
    outcome: "A dedicated AI architecture engineered around your exact setup." 
  },

  // --- Enterprise Development ---
  {
    id: "07",
    title: "Autonomous AI Workflow & Agent Architecture",
    price: "Starting at $3,500",
    description: "End-to-end custom AI agent networks designed to automate complex, multi-step business operations and backend workflows.",
    whatItDoes: [
      "Custom multi-agent workflows built for specific business logic",
      "Seamless integration with existing databases, CRMs, and APIs",
      "Automated document processing, data extraction, and routing",
      "Real-time monitoring dashboards and error-handling setups"
    ],
    bestFor: "Agencies, B2B SaaS, logistics, enterprise teams with repetitive operations.",
    outcome: "Eliminates hundreds of manual labor hours with zero operational downtime."
  },
  {
    id: "08",
    title: "Full-Stack SaaS MVP & Scalable Cloud Systems",
    price: "Starting at $4,999",
    description: "Production-ready web application development engineered for high performance, maximum security, and rapid user scaling.",
    whatItDoes: [
      "Modern React / Vite frontend with clean, responsive UI/UX",
      "Robust REST & GraphQL APIs with secure authentication",
      "Scalable database architecture (PostgreSQL, MongoDB, Supabase)",
      "Automated CI/CD pipelines and cloud deployment (AWS / Cloud Run)"
    ],
    bestFor: "Tech startups, founders, and companies expanding digital platforms.",
    outcome: "An enterprise-grade, investment-ready software product."
  },
  {
    id: "09",
    title: "AI Voice Agents & Telephony Infrastructure",
    price: "Starting at $2,500",
    description: "Intelligent AI voice receptionists and conversational phone agents that handle inbound/outbound calls seamlessly 24/7.",
    whatItDoes: [
      "Human-like context-aware voice conversations with low latency",
      "Twilio and Vapi custom telephony integrations",
      "Live calendar scheduling during call execution",
      "Instant transcriptions, sentiment analysis, and CRM sync"
    ],
    bestFor: "Clinics, real estate firms, service agencies, high-volume call centers.",
    outcome: "Zero missed customer calls and immediate appointment conversions."
  },
  {
    id: "10",
    title: "High-Performance Web Infrastructure & Headless CMS",
    price: "Starting at $1,499",
    description: "Sub-second loading websites engineered for maximum conversion rates, high organic search rankings, and flawless interactivity.",
    whatItDoes: [
      "Sub-second page load times with lightweight React/Vite architecture",
      "Custom Headless CMS integration (Sanity, Strapi, Builder.io)",
      "Interactive 3D visuals, micro-animations, and dynamic UI elements",
      "Enterprise security compliance and internationalization setup"
    ],
    bestFor: "Digital agencies, international brands, high-growth companies.",
    outcome: "Drastically higher user retention and increased ad campaign ROI."
  },
  {
    id: "11",
    title: "Custom Enterprise Client Portals & BI Dashboards",
    price: "Starting at $1,999",
    description: "Tailored internal operations tools and secure client management portals designed to streamline client communication and analytics.",
    whatItDoes: [
      "Role-based authentication and secure multi-tenant architecture",
      "Real-time analytics, automated data charts, and custom export tools",
      "Integrated payment processing, billing, and subscription logic",
      "White-labeled client communication and task tracking interfaces"
    ],
    bestFor: "Professional service providers, asset management, growing B2B firms.",
    outcome: "Enhanced brand credibility and streamlined client management."
  }
];

export default function Services() {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/book');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 1.5rem 8rem' }}>
      
      {/* High-Converting Intro Banner */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <span style={{ 
          backgroundColor: '#eff6ff', 
          color: '#2563eb', 
          fontWeight: '800', 
          fontSize: '0.85rem', 
          padding: '0.5rem 1.25rem', 
          borderRadius: '50px', 
          border: '1px solid #bfdbfe',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '1.25rem'
        }}>
          Automate • Scale • Dominate
        </span>

        <h1 style={{ fontSize: '3.2rem', fontWeight: '800', color: '#0f172a', marginBottom: '1.25rem', lineHeight: '1.15' }}>
          Engineered Solutions Built To Scale Your Revenue
        </h1>

        <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '720px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          We bridge the gap between complex AI automation and high-ticket enterprise web applications. Choose a custom capability below or schedule an exclusive strategy call to scope your exact requirements.
        </p>

        {/* Global Strategy Call Trigger Button */}
        <button 
          onClick={handleBooking}
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '1rem',
            padding: '0.9rem 2.2rem',
            borderRadius: '12px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
        >
          Book Your Free Strategy Call →
        </button>
      </div>

      {/* Services List */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {allServicesData.map((service, index) => (
          <ScrollReveal key={service.id} delay={index * 0.05}>
            <div className="web-service-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  SERVICE {service.id}
                </span>
                <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', fontWeight: '700', fontSize: '0.9rem', padding: '0.35rem 0.85rem', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
                  {service.price}
                </span>
              </div>

              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0f172a', margin: '0.5rem 0 1rem' }}>
                {service.title}
              </h3>
              
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {service.description}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: '#0f172a', display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Capabilities Included:</strong>
                <ul style={{ paddingLeft: '1.25rem', color: '#64748b', lineHeight: '1.7', margin: 0 }}>
                  {service.whatItDoes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>BEST FOR</span>
                  <span style={{ color: '#334155', fontSize: '0.9rem', fontWeight: '500' }}>{service.bestFor}</span>
                </div>
                <div>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '0.2rem' }}>KEY OUTCOME</span>
                  <span style={{ color: '#2563eb', fontSize: '0.9rem', fontWeight: '600' }}>{service.outcome}</span>
                </div>
              </div>

              {/* Action Button for Every Service */}
              <div style={{ textAlign: 'right' }}>
                <button
                  onClick={handleBooking}
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#2563eb';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#0f172a';
                  }}
                >
                  Book Call for This Service →
                </button>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}