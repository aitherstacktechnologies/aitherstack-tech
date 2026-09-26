import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Lock } from 'lucide-react';

export default function ASTCommitmentBanner() {
  const trustItems = [
    { icon: ShieldCheck, label: '14-Day Post-Launch Warranty', description: 'Zero-cost patches for any edge cases or bugs' },
    { icon: Award, label: '100% Code Ownership', description: 'Git repo, Figma files, and database are yours' },
    { icon: Zap, label: 'Sub-Second SLA', description: 'Every build optimized for fast load times' },
    { icon: Lock, label: 'Direct Dev Access', description: 'Slack & Loom updates with zero middle management' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 z-20"
    >
      <div className="relative overflow-hidden rounded-3xl border border-emerald-950/40 bg-gradient-to-br from-emerald-950/20 via-ast-surface/50 to-emerald-950/10 p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/10 via-transparent to-emerald-950/10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/40 border border-emerald-500/30">
              <Award className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-[0.3em] text-emerald-400">// TRUST BLOCK</span>
              <h3 className="text-xl font-bold uppercase tracking-tight text-ast-ivory">THE AST COMMITMENT</h3>
            </div>
          </div>

          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h4 className="text-2xl sm:text-3xl font-bold text-ast-ivory leading-tight mb-4">
              Risk-Free Deployments.{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                Built with Absolute Integrity.
              </span>
            </h4>
            <p className="text-base sm:text-lg text-ast-muted leading-relaxed">
              We do not just ship code and walk away. Every custom AI agent and web platform we engineer comes standard with a comprehensive
              <span className="font-semibold text-ast-ivory"> 14-day post-launch warranty</span>.
              If an unexpected edge case breaks or a bug surfaces within your first two weeks, our core engineering team patches it immediately
              at zero added cost to your startup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="group relative flex flex-col items-center text-center p-4 rounded-2xl border border-ast-border bg-ast-bg/50 transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-950/20"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-950/30 mb-4 group-hover:border-emerald-500/50 group-hover:bg-emerald-950/50 transition-all duration-300">
                    <Icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <h5 className="text-sm font-semibold text-ast-ivory mb-1">{item.label}</h5>
                  <p className="text-xs text-ast-muted leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}