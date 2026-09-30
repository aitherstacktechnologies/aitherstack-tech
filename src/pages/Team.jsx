import React from 'react';
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
        title={
          <>
            Fewer Meetings.<br />
            More <AccentText>Production Code.</AccentText>
          </>
        }
        subtitle="Meet the engineers, designers, and strategists who turn bold ideas into market-ready systems."
        align="left"
      />

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 sm:gap-x-12 sm:gap-y-20">
            {teamMembers.map((member, i) => (
              <article
                key={member.name}
                className="founder-card group relative glassmorphic-card rounded-3xl overflow-hidden transition-all duration-300 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(255,85,0,0.2)] w-full max-w-lg mx-auto reveal"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover object-top transition-transform duration-[400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 z-10 glassmorphic-luxury border border-white/10 text-white text-[10px] font-mono px-3 py-1 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    AVAILABLE FOR SPRINTS
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-orange-500 text-gradient-shimmer">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-orange-500 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 xl:px-12 pb-12">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-sm text-white/70 leading-relaxed">
            AST started from frustration — too many agencies deliver
            static sites with no automation behind them. We decided to build
            the opposite: a team that ships AI agents, automation pipelines,
            and high-converting sites that actually run your business while
            you sleep.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 py-12 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 glassmorphic-luxury p-6 sm:p-10 lg:p-12 text-center shadow-[0_0_80px_rgba(255,85,0,0.06)] reveal">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-orange-400 mb-6">// THE TEAM</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[0.92] mb-8 text-gradient-shimmer">
              WANT TO WORK WITH US?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              We're a small team that ships real systems fast.
            </p>
            <Button to="/booking" variant="primary" size="lg" showArrow className="mt-10">
              Book a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}