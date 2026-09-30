import { useEffect, useState } from "react";
import { Loader2, CalendarClock } from "lucide-react";

export default function CalBooking() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading || !mounted) {
    return (
      <div
        className="w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11] relative z-10 block"
        style={{ '--cal-bg': '#08080A', '--cal-surface': '#0D0D11' }}
        role="status"
        aria-label="Loading calendar"
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 text-white">
          <div className="relative flex items-center justify-center">
            <Loader2 className="h-10 w-10 animate-spin text-white" aria-hidden="true" />
            <div className="absolute inset-0 border-4 border-white/10 rounded-full border-t-white animate-spin" aria-hidden="true" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-white">Loading your booking calendar</p>
            <p className="text-xs text-white/50 mt-1">This may take a moment on slower connections</p>
          </div>
          <CalendarClock className="h-6 w-6 text-white/40 animate-pulse" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11] relative z-10 block"
      style={{ '--cal-bg': '#08080A', '--cal-surface': '#0D0D11' }}
    >
      <iframe
        src="https://cal.com/aitherstacktechnologies-official/aither-stack-appointments?embed=true&theme=light&layout=month_view"
        title="Aither Stack - Appointments"
        className="w-full h-full border-none"
        style={{ minHeight: '600px' }}
        sandbox="allow-scripts allow-same-origin allow-popups"
        loading="lazy"
      />
    </div>
  );
}