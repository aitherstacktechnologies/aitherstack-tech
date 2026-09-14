import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Hero from '../components/Hero';

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
  return (
    <div className="overflow-x-hidden pt-16 bg-transparent">
      <Hero
        eyebrow="// THE ENGINEERING SQUAD"
        title="Fewer Meetings. More Production Code."
        subtitle="Meet the engineers, designers, and strategists who turn bold ideas into market-ready systems."
        align="left"
      />

      <section className="py-24 px-6 sm:px-8 lg:px-12 section-gradient-bg-alt">
        <div className="max-w-6xl mx-auto">
          <div className="founders-grid flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="founder-card group relative glassmorphic-card rounded-3xl overflow-hidden transition-all duration-300 hover:border-ast-accent/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ast-surface via-transparent to-transparent" />
                  
                  {/* Live Status Indicator */}
                  <div className="absolute top-4 right-4 z-10 glassmorphic-luxury border border-ast-border text-ast-text text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent animate-pulse" />
                    AVAILABLE FOR SPRINTS
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-ast-text mb-1 transition-colors duration-300 group-hover:text-ast-accent"
                    whileHover={{ x: 4 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-ast-accent mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-ast-muted leading-relaxed mb-6 transition-colors duration-300 group-hover:text-ast-text">
                    {member.bio}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why We Started */}
      <section className="px-6 sm:px-8 lg:px-12 pb-16 section-gradient-bg">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-sm text-ast-muted leading-relaxed"
          >
            Aither Stack started from frustration — too many agencies deliver 
            static sites with no automation behind them. We decided to build 
            the opposite: a team that ships AI agents, automation pipelines, 
            and high-converting sites that actually run your business while 
            you sleep.
          </motion.p>
        </div>
      </section>

      {/* SECTION 4: CTA Banner */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 overflow-hidden border-t border-ast-border section-gradient-bg-alt">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ast-accent/10 via-transparent to-ast-accent/10" />
          <div className="absolute inset-0 grid-bg-subtle opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase mb-6">
              Want to work with <span className="text-gradient-luxury">us directly</span>?
            </h2>
            <p className="text-lg text-ast-muted mb-10 max-w-xl mx-auto">
              We're a small team — but we move fast and ship real systems.
            </p>
            <Button
              as="a"
              href="/booking"
              variant="primary"
              size="xl"
              showArrow
            >
              Book a Call
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}