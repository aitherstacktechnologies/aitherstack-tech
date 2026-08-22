import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const teamMembers = [
  {
    id: "zaman",
    name: "Muhammad Zaman",
    role: "Founder & CEO",
    image: "/team/zaman.jpg",
    objectPos: "center 15%", // Adjusts focus directly to face
    bio: "Agency Owner, Visionary Leader, and Strategic Architect driving end-to-end AI voice systems, high-converting React platforms, and automated business infrastructure."
  },
  {
    id: "hurairah",
    name: "Hurairah",
    role: "Software Engineer",
    image: "/team/hurairah.jpg",
    objectPos: "center 20%",
    bio: "React & Enterprise Web Application Specialist, engineering scalable frontend architectures, optimized UI components, and high-performance agency applications."
  },
  {
    id: "waseem",
    name: "Waseem",
    role: "Project Management",
    image: "/team/waseem.jpg",
    objectPos: "center 20%",
    bio: "Overseeing project lifelines, cross-team coordination, client delivery schedules, and maintaining seamless operational execution across all digital builds."
  },
  {
    id: "ahmed",
    name: "Ahmed",
    role: "AI & Automations Lead",
    image: "/team/ahmed.jpg",
    objectPos: "center 15%",
    bio: "Designing and deploying intelligent automation workflows, complex Vapi voice agents, API integrations, and customized lead handling funnels."
  },
  {
    id: "usha",
    name: "Usha",
    role: "Operations & Strategy Lead",
    image: "/team/usha.jpg",
    objectPos: "center 15%",
    bio: "Managing core business operations, strategic client onboarding, and optimizing post-purchase agency client workflows for long-term retention."
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState("zaman");

  return (
    <div className="section-padding">
      <style>{`
        button, .btn, a.btn-primary, a.btn-secondary {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer;
        }
        button:hover, .btn:hover, a.btn-primary:hover, a.btn-secondary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }

        .team-card-row {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .team-card-row:hover, .team-card-row.active-card {
          border-color: #000000 !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08) !important;
          background-color: #fafafa !important;
        }
        .team-card-row.active-card {
          border-width: 2px !important;
        }
        .team-card-row:hover .team-avatar, .team-card-row.active-card .team-avatar {
          transform: scale(1.04);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25) !important;
        }
        .team-avatar {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>

      <div className="container" style={{ maxWidth: '1100px' }}>

        <ScrollReveal delay={0.1}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style= {{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent, #000)', fontWeight: '700' }}>
              LEADERSHIP & EXECUTION TEAM
            </span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: '800', marginTop: '1rem' }}>
              Meet the Minds Behind Aither Stack
            </h1>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {teamMembers.map((member, index) => {
            const isOwner = member.role.includes('Founder');
            const isSelected = selectedMember === member.id;

            return (
              <ScrollReveal key={member.id} delay={0.08 * (index + 1)}>
                <div
                  className={`team-card-row ${isSelected ? 'active-card' : ''}`}
                  onClick={() => setSelectedMember(member.id)}
                  onMouseEnter={() => setSelectedMember(member.id)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '280px 1fr',
                    alignItems: 'center',
                    padding: '2.25rem 2.5rem',
                    backgroundColor: '#ffffff',
                    border: isSelected ? '2px solid #000' : '1px solid var(--border-light, #eaeaea)',
                    borderRadius: '24px',
                    gap: '3rem',
                    boxShadow: isSelected ? '0 12px 35px rgba(0, 0, 0, 0.08)' : '0 4px 20px rgba(0,0,0,0.02)'
                  }}
                >
                  {/* Column 1: Perfect Center Alignment */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '100%',
                    margin: '0 auto'
                  }}>
                    <div
                      className="team-avatar"
                      style={{
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        backgroundColor: '#000',
                        boxShadow: '0 8px 22px rgba(0,0,0,0.12)',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: member.objectPos, // Direct Face Centering Position
                          filter: 'contrast(1.08) brightness(1.02) saturate(1.06)'
                        }}
                        onError={(e) => {
                          e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=000&color=fff";
                        }}
                      />
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: '800', margin: 0, color: '#000' }}>
                      {member.name}
                    </h3>
                    <p style={{
                      margin: '0.3rem 0 0 0',
                      fontSize: '0.9rem',
                      color: isOwner ? '#000' : '#555',
                      fontWeight: '700'
                    }}>
                      {member.role}
                    </p>
                  </div>

                  {/* Column 2: Description */}
                  <div style={{
                    fontSize: '1.05rem',
                    color: '#333',
                    lineHeight: '1.75',
                    paddingRight: '1rem'
                  }}>
                    {member.bio}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </div>
  );
}