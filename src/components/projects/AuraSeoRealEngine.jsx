import React, { useState, useRef, useEffect } from 'react';
import { Activity, Globe, Zap, ShieldCheck, CheckCircle, AlertTriangle, ChevronRight, ChevronDown, FileText, Code2, X, Loader2, ExternalLink } from 'lucide-react';
import gsap from 'gsap';

function CircularScore({ score, size = 180, strokeWidth = 12 }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const circleRef = useRef(null);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;
  
  const getScoreColor = (s) => {
    if (s >= 90) return '#22c55e';
    if (s >= 50) return '#f59e0b';
    return '#ef4444';
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({ val: 0 }, {
        val: score * 100,
        duration: 1.5,
        ease: 'power2.out',
        onUpdate: function() {
          setAnimatedScore(Math.round(this.targets()[0].val));
        }
      });
    });
    
    return () => ctx.revert();
  }, [score]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          ref={circleRef}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getScoreColor(score)}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.1s ease-out, stroke 0.3s ease',
            filter: `drop-shadow(0 0 10px ${getScoreColor(score)}50)`
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-bold text-5xl text-white tracking-tight">{Math.round(animatedScore)}</span>
        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Score</span>
      </div>
    </div>
  );
}

function GlassPanel({ children, className = '', hover = true }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-[#0E0E12] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] shadow-orange-500/5 transition-all duration-500 ${hover ? 'hover:border-orange-500/40' : ''} ${className}`}>
      {children}
    </div>
  );
}

function MetricCard({ icon: Icon, label, value, subtext, color = 'text-orange-500' }) {
  return (
    <GlassPanel className="p-6 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-white/[0.05] ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">{label}</p>
        <p className="text-2xl font-bold text-white tracking-tight">{value}</p>
        {subtext && <p className="text-xs text-gray-500">{subtext}</p>}
      </div>
    </GlassPanel>
  );
}

function AuditRow({ audit, isFailed }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div 
      className={`border-b border-white/5 last:border-0 ${isFailed ? 'hover:bg-red-500/5' : 'hover:bg-white/[0.02]'} transition-colors duration-200`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-5 py-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4">
          {isFailed ? (
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
          ) : (
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          )}
          <div>
            <p className="text-sm font-medium text-white">{audit.title}</p>
            {audit.displayValue && (
              <p className="text-xs font-mono text-gray-500 mt-0.5">{audit.displayValue}</p>
            )}
          </div>
        </div>
        {expanded ? (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-500" />
        )}
      </button>
      {expanded && (
        <div className="px-5 pb-4 pl-14">
          <p className="text-sm text-gray-400 leading-relaxed">{audit.description}</p>
          {audit.details && audit.details.impact && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10">
              <span className="text-xs font-mono text-gray-500">Impact:</span>
              <span className={`text-xs font-bold ${audit.details.impact === 'high' ? 'text-red-400' : audit.details.impact === 'medium' ? 'text-yellow-400' : 'text-gray-400'}`}>
                {audit.details.impact.toUpperCase()}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FixCodeDrawer({ audits, isOpen, onClose }) {
  if (!isOpen) return null;
  
  const failedAudits = Object.values(audits).filter(a => a.impact === 'high' || a.impact === 'medium');
  
  const codeSnippets = {
    performance: `// Performance Optimization Checklist
// 1. Optimize Largest Contentful Paint (LCP)
const optimizeLCP = async () => {
  // Preload critical assets
  const preloadLink = document.createElement('link');
  preloadLink.rel = 'preload';
  preloadLink.as = 'image';
  preloadLink.href = 'your-lcp-image.jpg';
  document.head.appendChild(preloadLink);
};

// 2. Minimize Cumulative Layout Shift (CLS)
const preventCLS = () => {
  // Reserve space for images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.aspectRatio = '16/9';
  });
};`,

    seo: `// SEO Enhancement Script
const optimizeSEO = () => {
  // 1. Meta tags optimization
  document.querySelectorAll('img').forEach(img => {
    if (!img.alt) {
      img.alt = 'Descriptive alt text';
      console.warn('Missing alt attribute detected');
    }
  });
  
  // 2. Heading structure
  const headings = document.querySelectorAll('h1, h2, h3');
  let hasH1 = document.querySelector('h1');
  if (!hasH1) {
    console.error('Page missing H1 element');
  }
};`
  };

  return (
    <div className="fixed inset-0 z-50 flex transform-gpu justify-end will-change-transform">
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-ast-bg border-l border-white/10 overflow-y-auto animate-slideInRight">
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/10 bg-ast-bg/95 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Code2 className="w-6 h-6 text-ast-accent" />
            <h3 className="text-lg font-bold text-white">Auto-Generated Fix Code</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-sm font-mono text-ast-accent uppercase tracking-wider mb-4">
              Performance Fixes ({failedAudits.filter(a => a.details?.impact === 'high' || a.details?.impact === 'medium').length} issues)
            </h4>
            <GlassPanel hover={false} className="p-4">
              <pre className="text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre-wrap">
                {codeSnippets.performance}
              </pre>
            </GlassPanel>
          </div>
          
          <div>
            <h4 className="text-sm font-mono text-ast-accent uppercase tracking-wider mb-4">
              SEO Enhancements ({failedAudits.filter(a => a.details?.category === 'seo').length} issues)
            </h4>
            <GlassPanel hover={false} className="p-4">
              <pre className="text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre-wrap">
                {codeSnippets.seo}
              </pre>
            </GlassPanel>
          </div>
          
          <button
            className="w-full py-4 rounded-xl bg-ast-accent hover:bg-ast-accent-hover text-white font-bold transition-colors"
          >
            Copy All Code
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default function AuraSeoRealEngine() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [auditData, setAuditData] = useState(null);
  const [error, setError] = useState(null);
  const [loadingSteps, setLoadingSteps] = useState([]);
  const [activeTab, setActiveTab] = useState('failed');
  const [showFixDrawer, setShowFixDrawer] = useState(false);
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const btn = btnRef.current;
    if (!input || !btn) return;

    let rect;
    let frameId;
    let pointer;
    const updateRect = () => { rect = btn.getBoundingClientRect(); };
    const handlePointerEnter = () => updateRect();
    const handlePointerMove = (event) => {
      pointer = event;
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          if (rect && pointer) {
            const x = pointer.clientX - rect.left - rect.width / 2;
            const y = pointer.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate3d(${x * 0.2}px, ${y * 0.2}px, 0)`;
          }
          frameId = undefined;
        });
      }
    };

    const handleMouseLeave = () => {
      btn.style.transform = '';
    };

    btn.addEventListener('pointerenter', handlePointerEnter);
    btn.addEventListener('pointermove', handlePointerMove);
    btn.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', updateRect, { passive: true });

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      btn.removeEventListener('pointerenter', handlePointerEnter);
      btn.removeEventListener('pointermove', handlePointerMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateRect);
    };
  }, []);

  const addLoadingStep = (step) => {
    setLoadingSteps(prev => [...prev, { id: Date.now(), text: step }]);
  };

  const validateUrl = (string) => {
    try {
      const urlObj = new URL(string.startsWith('http') ? string : `https://${string}`);
      return urlObj.hostname.includes('.');
    } catch {
      return false;
    }
  };

  const runAudit = async () => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    if (!validateUrl(url)) {
      setError('Please enter a valid domain (e.g., example.com)');
      return;
    }

    setLoading(true);
    setError(null);
    setAuditData(null);
    setLoadingSteps([]);

    const fullUrl = url.startsWith('http') ? url : `https://${url}`;

    try {
      addLoadingStep('Initializing live audit connection...');
      await new Promise(r => setTimeout(r, 500));

      addLoadingStep('Connecting to Google PageSpeed API...');
      await new Promise(r => setTimeout(r, 600));

      addLoadingStep(`Analyzing: ${fullUrl}`);
      
      const encodedUrl = encodeURIComponent(fullUrl);
      const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodedUrl}&category=PERFORMANCE&category=SEO&strategy=mobile`;

      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API returned ${response.status}: ${response.statusText}`);
      }

      addLoadingStep('Parsing performance metrics...');
      await new Promise(r => setTimeout(r, 400));

      addLoadingStep('Extracting SEO audit results...');
      await new Promise(r => setTimeout(r, 400));

      addLoadingStep('Generating diagnostic report...');
      const data = await response.json();

      addLoadingStep('Audit complete!');
      await new Promise(r => setTimeout(r, 300));

      setAuditData(data);
      setLoadingSteps([]);
    } catch (err) {
      console.error('Audit error:', err);
      setError(err.message || 'Failed to fetch audit data. Please check the URL and try again.');
      setLoadingSteps([]);
    } finally {
      setLoading(false);
    }
  };

  const getScore = (category) => {
    if (!auditData?.lighthouseResult?.categories) return 0;
    return Math.round((auditData.lighthouseResult.categories[category]?.score || 0) * 100);
  };

  const getMetric = (auditKey) => {
    if (!auditData?.lighthouseResult?.audits) return null;
    return auditData.lighthouseResult.audits[auditKey];
  };

  const failedAudits = auditData?.lighthouseResult?.audits 
    ? Object.values(auditData.lighthouseResult.audits).filter(a => 
        a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'notApplicable'
      )
    : [];

  const passedAudits = auditData?.lighthouseResult?.audits
    ? Object.values(auditData.lighthouseResult.audits).filter(a =>
        a.score === 1 || a.scoreDisplayMode === 'pass'
      )
    : [];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="mobile-motion-lite absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[150px]" />
      <div className="mobile-motion-lite absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]" />
      <div className="mobile-motion-lite absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[200px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 mb-6">
            <Activity className="w-4 h-4 text-ast-accent" />
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
              Live Web Audit Engine
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Aura<span className="text-gradient-accent">SEO</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Real-time performance and SEO analysis powered by Google PageSpeed Insights. 
            Enter any domain to audit.
          </p>

          <GlassPanel className="max-w-3xl mx-auto p-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && runAudit()}
                  placeholder="Enter domain (e.g., google.com)"
                  className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all font-mono text-sm"
                  disabled={loading}
                />
              </div>
              <button
                ref={btnRef}
                onClick={runAudit}
                disabled={loading}
                className="group relative px-8 py-4 bg-ast-accent hover:bg-ast-accent-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-xl font-bold text-white transition-all duration-300 will-change-transform overflow-hidden flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Auditing...</span>
                  </>
                ) : (
                  <>
                    <span>Run Live Audit</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </GlassPanel>

          {error && (
            <div className="max-w-3xl mx-auto mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
              <div className="flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            </div>
          )}
        </div>

        {loading && loadingSteps.length > 0 && (
          <div className="max-w-md mx-auto mb-12">
            <GlassPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Loader2 className="w-5 h-5 text-ast-accent animate-spin" />
                <span className="text-sm font-mono text-gray-400">Running Live Audit</span>
              </div>
              <div className="space-y-2">
                {loadingSteps.map((step, i) => (
                  <div 
                    key={step.id}
                    className="flex items-center gap-3 text-sm text-gray-300 animate-fadeIn"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-ast-accent" />
                    {step.text}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </div>
        )}

        {auditData && !loading && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <GlassPanel className="col-span-1 lg:col-span-3 xl:col-span-1 p-8 flex flex-col items-center justify-center">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6">Performance Score</p>
                <CircularScore score={getScore('performance')} size={200} strokeWidth={14} />
                <p className="mt-4 text-sm text-gray-400">
                  {getScore('performance') >= 90 ? 'Excellent' : getScore('performance') >= 50 ? 'Needs Work' : 'Poor'}
                </p>
              </GlassPanel>

              <div className="col-span-1 lg:col-span-3 xl:col-span-2 grid grid-cols-2 gap-4">
                <MetricCard
                  icon={ShieldCheck}
                  label="SEO Score"
                  value={`${getScore('seo')}%`}
                  subtext="Search optimization"
                  color="text-green-500"
                />
                <MetricCard
                  icon={Zap}
                  label="LCP"
                  value={getMetric('largest-contentful-paint')?.displayValue || 'N/A'}
                  subtext="Largest content paint"
                  color="text-blue-500"
                />
                <MetricCard
                  icon={Activity}
                  label="CLS"
                  value={getMetric('cumulative-layout-shift')?.displayValue || 'N/A'}
                  subtext="Layout shift score"
                  color="text-purple-500"
                />
                <MetricCard
                  icon={Globe}
                  label="First Contentful Paint"
                  value={getMetric('first-contentful-paint')?.displayValue || 'N/A'}
                  subtext="Time to first byte"
                  color="text-cyan-500"
                />
              </div>
            </div>

            <GlassPanel className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h3 className="text-xl font-bold text-white">Live Diagnostic Report</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveTab('failed')}
                    className={`px-4 py-2 rounded-lg text-sm font-mono transition-colors ${
                      activeTab === 'failed' 
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Failed ({failedAudits.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('passed')}
                    className={`px-4 py-2 rounded-lg text-sm font-mono transition-colors ${
                      activeTab === 'passed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Passed ({passedAudits.length})
                  </button>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto rounded-xl border border-white/10">
                {activeTab === 'failed' ? (
                  failedAudits.length > 0 ? (
                    failedAudits.slice(0, 20).map((audit, i) => (
                      <AuditRow key={i} audit={audit} isFailed={true} />
                    ))
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <CheckCircle className="w-12 h-12 mx-auto mb-3 text-green-500" />
                      <p>All audits passed!</p>
                    </div>
                  )
                ) : (
                  passedAudits.slice(0, 20).map((audit, i) => (
                    <AuditRow key={i} audit={audit} isFailed={false} />
                  ))
                )}
              </div>
            </GlassPanel>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="group relative px-8 py-4 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-3 will-change-transform">
                <FileText className="w-5 h-5 text-ast-accent" />
                <span>Export PDF Report</span>
              </button>
              <button 
                onClick={() => setShowFixDrawer(true)}
                className="group relative px-8 py-4 bg-ast-accent hover:bg-ast-accent-hover rounded-xl font-bold text-white transition-all duration-300 flex items-center gap-3 will-change-transform"
              >
                <Code2 className="w-5 h-5" />
                <span>Auto-Generate Fix Code</span>
              </button>
            </div>
          </div>
        )}

        {!auditData && !loading && (
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
              <Activity className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Ready to Audit</h3>
            <p className="text-gray-500">Enter a domain above to run a live performance and SEO analysis</p>
          </div>
        )}
      </div>

      <FixCodeDrawer 
        audits={auditData?.lighthouseResult?.audits || {}} 
        isOpen={showFixDrawer} 
        onClose={() => setShowFixDrawer(false)} 
      />
    </div>
  );
}
