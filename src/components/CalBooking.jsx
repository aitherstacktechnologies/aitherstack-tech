import { useEffect, Suspense, lazy } from "react";

const CalEmbed = lazy(() => import("@calcom/embed-react").then(module => {
  const { Cal, getCalApi } = module;
  const getCalApiRef = { current: getCalApi };
  return {
    default: function CalEmbedWrapper() {
      useEffect(() => {
        (async function () {
          const cal = await getCalApiRef.current({ "namespace": "aither-stack-appointments" });
          cal("ui", {
            theme: "dark",
            styles: {
              branding: { brandColor: "#C8A66A" }
            },
            hideEventTypeDetails: false,
            layout: "month_view"
          });
        })();
      }, []);
      return (
        <div
          className="w-full min-h-[680px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11]"
          style={{ 
            '--cal-bg': '#08080A', 
            '--cal-surface': '#0D0D11',
            aspectRatio: '16 / 9',
            minHeight: '680px',
            contain: 'layout'
          }}
        >
          <Cal 
            calLink="aitherstacktechnologies-official/aither-stack-appointments" 
            config={{
              layout: "month_view",
              theme: "dark",
              useSlotsViewOnSmallScreen: "true"
            }}
            namespace="aither-stack-appointments" 
            style={{ width: "100%", height: "680px", overflow: "scroll" }}
            width="100%"
            height="680"
          />
        </div>
      );
    }
  };
}));

export default function CalBooking() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[680px] overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11]" style={{ 
        '--cal-bg': '#08080A', 
        '--cal-surface': '#0D0D11',
        aspectRatio: '16 / 9',
        minHeight: '680px',
        contain: 'layout'
      }}>
        <div className="flex items-center justify-center h-full text-ast-muted">Loading calendar...</div>
      </div>
    }>
      <CalEmbed />
    </Suspense>
  );
}
