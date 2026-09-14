import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"aither-stack-appointments"});
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
      className="w-full min-h-170 overflow-hidden rounded-3xl border border-white/10 bg-[#0D0D11]"
      style={{ '--cal-bg': '#08080A', '--cal-surface': '#0D0D11' }}
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
      />
    </div>
  );
}
