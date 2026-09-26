import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Hero, { AccentText } from '../components/Hero';

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
    <div className="overflow-x-hidden pt-12 bg-transparent">
      <Hero
        eyebrow="// THE ENGINEERING SQUAD"
        title={
          <>
            Fewer Meetings.<br />
            More <AccentText>Production Code.</AccentText>
          </>
        }
        subtitle="Meet the engineers, designers, and strategists who turn bold ideas into market-ready systems."
        align="left"
      />

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="founder-card group relative glassmorphic-card rounded-3xl overflow-hidden transition-all duration-300 hover:border-ast-warm-orange/40 hover:shadow-[0_0_30px_rgba(243,107,63,0.15)]"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ast-surface via-transparent to-transparent" />

                  {/* Live Status Indicator */}
                  <div className="absolute top-4 right-4 z-10 glassmorphic-luxury border border-ast-border text-ast-ivory text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ast-accent animate-pulse" />
                    AVAILABLE FOR SPRINTS
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold text-ast-ivory mb-1 transition-colors duration-300 group-hover:text-ast-peach"
                    whileHover={{ x: 4 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-ast-peach mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-ast-muted leading-relaxed mb-6 transition-colors duration-300 group-hover:text-ast-ivory">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why We Started */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 xl:px-12 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-sm text-ast-muted leading-relaxed"
          >
            AST started from frustration — too many agencies deliver
            static sites with no automation behind them. We decided to build
            the opposite: a team that ships AI agents, automation pipelines,
            and high-converting sites that actually run your business while
            you sleep.
          </motion.p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-ast-border bg-gradient-to-b from-ast-surface/50 to-ast-bg/10 p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(243,107,63,0.06)] will-change-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ast-warm-orange/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-ast-ivory leading-[0.92] mb-8">
              WANT TO WORK WITH US?
            </h2>
            <p className="text-lg text-ast-muted max-w-2xl mx-auto mb-12 leading-relaxed">
              We're a small team that ships real systems fast.
            </p>
            <Button to="/booking" variant="primary" size="lg" showArrow className="mt-10">
              Book a Call
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}