import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    id: "zaman",
    name: "Muhammad Zaman",
    role: "Founder & CEO",
    image: "/team/zaman.jpg",
    objectPos: "center 15%",
    bio: "Visionary leader driving end-to-end AI voice systems, high-converting React platforms, and automated business infrastructure. Passionate about building digital solutions that transform how businesses operate and grow.",
    skills: ["Leadership", "AI Systems", "Strategy"],
  },
  {
    id: "hurairah",
    name: "Hurairah",
    role: "Software Engineer",
    image: "/team/hurairah.jpg",
    objectPos: "center 20%",
    bio: "React & Enterprise Web Application Specialist with expertise in building scalable frontend architectures, optimized UI components, and high-performance agency applications.",
    skills: ["React", "TypeScript", "Frontend"],
  },
  {
    id: "waseem",
    name: "Waseem",
    role: "Project Manager",
    image: "/team/waseem.jpg",
    objectPos: "center 20%",
    bio: "Operations expert overseeing project lifecycles, cross-team coordination, client delivery schedules, and maintaining seamless operational execution across all digital builds.",
    skills: ["Project Management", "Operations", "Coordination"],
  },
  {
    id: "ahmed",
    name: "Ahmed",
    role: "AI & Automations Lead",
    image: "/team/ahmed.jpg",
    objectPos: "center 15%",
    bio: "AI specialist designing and deploying intelligent automation workflows, complex voice agents, API integrations, and customized lead handling funnels that drive business growth.",
    skills: ["AI Agents", "Automation", "Integration"],
  },
  {
    id: "usha",
    name: "Usha",
    role: "Operations & Strategy",
    image: "/team/usha.jpg",
    objectPos: "center 15%",
    bio: "Operations strategist managing core business operations, strategic client onboarding, and optimizing post-purchase workflows for long-term client retention and satisfaction.",
    skills: ["Strategy", "Client Success", "Operations"],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState("zaman");
  const contentRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.member-card',
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.members-list', start: 'top 80%' }
        }
      );

      gsap.fromTo('.member-detail',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.4, ease: 'power3.out',
          scrollTrigger: { trigger: '.member-detail', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
    }, contentRef);

    return () => ctx.revert();
  }, [selectedMember]);

  const activeMember = teamMembers.find(m => m.id === selectedMember);

  return (
    <div ref={sectionRef} className="pt-16">
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 border-b border-ast-stone">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="hero-content max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
              // TEAM MEMBERS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase mb-6">
              Meet the Crew
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              The talented individuals behind Aither Stack Technologies. A collective of experts dedicated to building exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 members-list space-y-3">
              {teamMembers.map((member) => {
                const isSelected = selectedMember === member.id;
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member.id)}
                    className={`member-card w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                      isSelected
                        ? 'bg-ast-surface border-ast-accent'
                        : 'bg-transparent border-ast-stone hover:border-gray-500 hover:bg-ast-surface'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-ast-stone/30 flex-shrink-0">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: member.objectPos }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.style.background = '#1A1A1A';
                            e.target.parentNode.innerHTML = `<span class="text-white text-sm font-bold flex items-center justify-center w-full h-full">${member.name.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold tracking-tight truncate ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                          {member.name}
                        </h3>
                        <p className="text-xs font-mono uppercase tracking-wider text-gray-500">
                          {member.role}
                        </p>
                      </div>
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-ast-accent flex-shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8">
              <div
                ref={contentRef}
                className="member-detail relative border border-ast-stone bg-ast-surface rounded-lg p-8 lg:p-10 overflow-hidden min-h-[350px]"
              >
                <div className="absolute inset-0 grid-bg-subtle opacity-20" />
                
                <div className="relative z-10">
                  {activeMember && (
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-ast-stone/30 border border-ast-stone">
                          <img
                            src={activeMember.image}
                            alt={activeMember.name}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: activeMember.objectPos }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentNode.style.background = '#1A1A1A';
                              e.target.parentNode.innerHTML = `<span class="text-white text-3xl font-bold flex items-center justify-center w-full h-full">${activeMember.name.charAt(0)}</span>`;
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded border border-ast-stone bg-ast-bg text-xs font-mono uppercase tracking-wider text-ast-accent">
                            {activeMember.role}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight mb-4 text-white">
                          {activeMember.name}
                        </h2>
                        <div className="w-12 h-0.5 bg-ast-accent mb-6" />
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {activeMember.bio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {activeMember.skills.map(skill => (
                            <span key={skill} className="text-[10px] font-mono px-2.5 py-1 rounded border border-ast-stone text-gray-500">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-ast-stone">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-ast-accent mb-4 block">
            // JOIN THE TEAM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight uppercase mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            We're always looking for talented individuals to join our growing team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ast-accent text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:bg-ast-accent-hover hover:-translate-y-1"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
