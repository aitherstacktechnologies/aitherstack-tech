import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Muhammad Zaman",
    role: "Full Stack Developer",
    bio: "Architects scalable Web3 & React platforms with sub-second performance and clean component design.",
    image: "/team/zaman.jpg"
  },
  {
    name: "Ahmed Zaman",
    role: "AI & Automations Lead",
    bio: "Engineers custom Retell AI voice agents, autonomous LLM workflows, and CRM pipelines.",
    image: "/team/ahmed.jpg"
  },
  {
    name: "Hurairah",
    role: "Software Engineer",
    bio: "Specializes in high-throughput backend architecture, database schemas, and API performance.",
    image: "/team/hurairah.jpg"
  },
  {
    name: "Usha Khan",
    role: "Operations Lead",
    bio: "Drives sprint velocity, operational workflows, and end-to-end delivery quality assurance.",
    image: "/team/usha.jpg"
  },
  {
    name: "Waseem",
    role: "Project Management",
    bio: "Ensures transparent client communication, rigid timeline management, and zero-delay execution.",
    image: "/team/waseem.jpg"
  }
];

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.team-hero',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }
      );

      gsap.fromTo('.founder-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: '.founders-grid', start: 'top 80%' }
        }
      );

      gsap.fromTo('.why-us',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.why-us', start: 'top 85%' }
        }
      );

      gsap.fromTo('.team-cta',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.team-cta', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="overflow-x-hidden pt-16">
      {/* SECTION 1: Page Header */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-stone/30 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="mobile-motion-lite absolute top-0 right-0 w-[600px] h-[600px] bg-ast-accent/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="team-hero max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ast-accent mb-4">
              // THE ENGINEERING SQUAD
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-4">
              FEWER MEETINGS. <br />
              <span className="text-ast-accent">MORE PRODUCTION CODE.</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Meet the core team building bespoke web platforms, autonomous AI voice agents, and high-performance revenue engines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="founders-grid flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="founder-card group relative bg-[#0E0E12] rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-[#FF5500]/50 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent" />
                  
                  {/* Live Status Indicator */}
                  <div className="absolute top-4 right-4 z-10 bg-black/60 border border-white/20 text-white text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AVAILABLE FOR SPRINTS
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FF5500] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FF5500] mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {member.bio}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why We Started */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="why-us text-sm text-gray-400 leading-relaxed">
            Aither Stack started from frustration — too many agencies deliver 
            static sites with no automation behind them. We decided to build 
            the opposite: a team that ships AI agents, automation pipelines, 
            and high-converting sites that actually run your business while 
            you sleep.
          </p>
        </div>
      </section>

      {/* SECTION 4: CTA Banner */}
      <section className="team-cta relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-ast-stone/30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ast-accent/10 via-transparent to-ast-accent/10" />
          <div className="absolute inset-0 grid-bg-subtle opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase mb-6">
            Want to work with <span className="text-ast-accent">us directly</span>?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            We're a small team — but we move fast and ship real systems.
          </p>
          <Link
            to="/booking"
            className="button-base group relative inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10">Book a Call</span>
            <ArrowUpRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </Link>
        </div>
      </section>
    </div>
  );
}