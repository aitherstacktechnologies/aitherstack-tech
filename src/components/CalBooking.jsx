import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"aither-stack-appointments"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <div className="w-full h-[600px] border border-ast-stone rounded-xl overflow-hidden bg-ast-surface p-2">
      <Cal 
        calLink="aitherstacktechnologies-official/aither-stack-appointments" 
        config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}} 
        namespace="aither-stack-appointments" 
        style={{"width":"100%","height":"100%","overflow":"scroll"}}
      />
    </div>
  );
}
