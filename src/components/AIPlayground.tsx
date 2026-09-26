import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import Button from './Button';

const industryOptions = [
  { value: 'real-estate', label: 'Real Estate', icon: Brain },
  { value: 'ecommerce', label: 'E-Commerce', icon: Zap },
  { value: 'consulting', label: 'Local Consulting Agency', icon: Sparkles },
];

const simulationData = {
  'real-estate': {
    industry: 'Real Estate',
    steps: [
      { label: 'New Lead Form Submitted', icon: Sparkles },
      { label: 'AST Agent Parses Budget & Intent', icon: Brain },
      { label: 'Auto-Books Calendar Slot & Updates CRM', icon: Zap },
    ],
    outcome: 'Simulated System Impact: Cuts Admin Work by 18 Hours/Week',
  },
  'ecommerce': {
    industry: 'E-Commerce',
    steps: [
      { label: 'Abandoned Cart Detected', icon: Sparkles },
      { label: 'AST Agent Triggers Recovery Flow', icon: Brain },
      { label: 'Personalized Offer Sent & Order Captured', icon: Zap },
    ],
    outcome: 'Simulated System Impact: Recovers 23% Lost Revenue Automatically',
  },
  'consulting': {
    industry: 'Local Consulting Agency',
    steps: [
      { label: 'Inbound Inquiry Received', icon: Sparkles },
      { label: 'AST Agent Qualifies & Routes Lead', icon: Brain },
      { label: 'Proposal Drafted & Meeting Booked', icon: Zap },
    ],
    outcome: 'Simulated System Impact: Eliminates 15 Hours/Week Manual Intake',
  },
};

export default function AIPlayground() {
  const [selectedIndustry, setSelectedIndustry] = useState('real-estate');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleSimulate = () => {
    setIsSimulating(true);
    setShowResult(false);
    setCurrentStep(0);

    const steps = simulationData[selectedIndustry].steps;
    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setCurrentStep(stepIndex + 1);
        stepIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsSimulating(false);
          setShowResult(true);
        }, 500);
      }
    }, 600);
  };

  const simulation = simulationData[selectedIndustry];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      className="relative overflow-hidden rounded-3xl border border-ast-border bg-ast-surface/50 p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-ast-accent/30 hover:shadow-[0_32px_64px_rgba(0,0,0,0.4)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ast-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 space-y-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ast-border bg-ast-surface/50 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-ast-peach backdrop-blur-sm mb-4">
            <span className="relative flex h-1.5 w-1.5 rounded-full bg-ast-peach animate-pulse" />
            AST Playground
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-ast-ivory leading-tight">
            Simulate Your <span className="bg-gradient-to-r from-ast-peach via-ast-warm-orange to-ast-peach bg-clip-text text-transparent">Custom AST Agent</span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-ast-muted max-w-lg mx-auto">
            Select your industry and watch how an AST agent automates your workflow in real-time.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 max-w-xl mx-auto">
          {industryOptions.map((option) => {
            const Icon = option.icon;
            const isSelected = selectedIndustry === option.value;
            return (
              <motion.button
                key={option.value}
                onClick={() => { setSelectedIndustry(option.value); setShowResult(false); }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-4 transition-all duration-300 ${
                  isSelected
                    ? 'border-ast-accent/40 bg-ast-accent/10 shadow-[0_0_24px_rgba(255,100,31,0.15)]'
                    : 'border-ast-border bg-ast-surface/50 hover:border-ast-accent/30 hover:bg-ast-surface'
                }`}
              >
                <Icon className={`h-6 w-6 transition-colors ${isSelected ? 'text-ast-accent' : 'text-ast-muted'}`} />
                <span className={`text-sm font-medium ${isSelected ? 'text-ast-ivory' : 'text-ast-muted'}`}>{option.label}</span>
              </motion.button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleSimulate}
            disabled={isSimulating}
            variant="primary"
            size="lg"
            showArrow
            className="min-w-[280px]"
          >
            {isSimulating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Simulating Agent...</span>
              </>
            ) : (
              <>
                <span>Simulate Custom AST Agent</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {isSimulating && (
            <motion.div
              key="simulating"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 text-center"
            >
              <div className="flex items-center justify-center gap-3 text-sm text-ast-peach">
                <Loader2 className="h-5 w-5 animate-spin" />
                <span className="font-mono">Building your custom workflow simulation...</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                {simulation.steps.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: index < currentStep ? 1 : 0.3, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`flex h-2 w-16 rounded-full transition-all ${
                      index < currentStep ? 'bg-ast-accent' : 'bg-ast-border'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-6 pt-4 border-t border-ast-border"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center gap-3 w-16 h-16 rounded-full bg-ast-accent/10 border border-ast-accent/30 mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-ast-accent" />
                </div>
                <h4 className="text-xl font-bold text-ast-ivory">Simulation Complete for {simulation.industry}</h4>
                <p className="mt-2 text-sm text-ast-muted">Your custom AST agent workflow pipeline:</p>
              </div>

              <div className="space-y-3">
                {simulation.steps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-ast-bg/50 border border-ast-border"
                  >
                    <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-ast-accent/10 border border-ast-accent/30">
                      <step.icon className="h-5 w-5 text-ast-accent" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ast-peach/70 block mb-1">Step {index + 1}</span>
                      <p className="text-sm font-medium text-ast-ivory">{step.label}</p>
                    </div>
                    {index < simulation.steps.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-ast-muted flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="w-full rounded-2xl border border-ast-accent/40 bg-ast-accent/10 p-5 text-center"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-ast-peach block mb-2">Outcome Projection</span>
                <p className="text-base font-semibold text-ast-ivory">{simulation.outcome}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}