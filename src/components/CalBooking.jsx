import { useEffect, useState, Suspense, lazy } from "react";
import { Loader2, CalendarClock } from "lucide-react";

const CalEmbed = lazy(() => import("@calcom/embed-react").then((module) => {
  const { Cal, getCalApi } = module;
  const getCalApiRef = { current: getCalApi };
  return {
    default: function CalEmbedWrapper() {
      const [mounted, setMounted] = useState(false);

      useEffect(() => {
        setMounted(true);
        (async function () {
          try {
            const cal = await getCalApiRef.current({ namespace: "aither-stack-appointments" });
            cal("ui", {
              theme: "dark",
              styles: {
                branding: { brandColor: "#FF641F" },
              },
              hideEventTypeDetails: false,
              layout: "month_view",
            });
          } catch (error) {
            console.error("Cal.com initialization error:", error);
          }
        })();
      }, []);

      if (!mounted) {
        return (
          <div
            className="w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11]"
            style={{
              "--cal-bg": "#08080A",
              "--cal-surface": "#0D0D11",
              aspectRatio: "16 / 9",
              minHeight: "600px",
              contain: "layout",
            }}
            role="status"
            aria-label="Loading calendar"
          >
            <div className="flex items-center justify-center h-full text-ast-muted">
              <Loader2 className="h-8 w-8 animate-spin text-ast-accent mr-3" aria-hidden="true" />
              <span>Loading calendar...</span>
            </div>
          </div>
        );
      }

      return (
        <div
          className="w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11] relative z-10 block"
          style={{
            "--cal-bg": "#08080A",
            "--cal-surface": "#0D0D11",
            aspectRatio: "16 / 9",
            minHeight: "600px",
            contain: "layout",
          }}
        >
          <Cal
            calLink="aitherstacktechnologies-official/aither-stack-appointments"
            config={{
              layout: "month_view",
              theme: "dark",
              useSlotsViewOnSmallScreen: "true",
            }}
            namespace="aither-stack-appointments"
            style={{ width: "100%", height: "100%", minHeight: "600px" }}
            width="100%"
            height="600"
          />
        </div>
      );
    },
  };
}));

function LoadingFallback() {
  return (
    <div
      className="w-full min-h-[600px] md:min-h-[700px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11]"
      style={{
        "--cal-bg": "#08080A",
        "--cal-surface": "#0D0D11",
        aspectRatio: "16 / 9",
        minHeight: "600px",
        contain: "layout",
      }}
      role="status"
      aria-label="Loading calendar"
    >
      <div className="flex flex-col items-center justify-center h-full gap-4 text-ast-muted">
        <div className="relative">
          <Loader2 className="h-10 w-10 animate-spin text-ast-accent" aria-hidden="true" />
          <div className="absolute inset-0 border-4 border-ast-border rounded-full border-t-ast-accent animate-spin" aria-hidden="true" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-ast-ivory">Loading your booking calendar</p>
          <p className="text-xs text-ast-muted mt-1">This may take a moment on slower connections</p>
        </div>
        <CalendarClock className="h-6 w-6 text-ast-accent/50 animate-pulse" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function CalBooking() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CalEmbed />
    </Suspense>
  );
}