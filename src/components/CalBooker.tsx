import React from "react";
import { BookerEmbed } from "@calcom/atoms";

interface CalBookerProps {
  calUsername?: string;
  eventSlug?: string;
}

export default function CalBooker({
  calUsername = "aitherstacktechnologies-official", // Replace with your Cal.com username
  eventSlug = "20min",         // Replace with your event slug
}: CalBookerProps) {
  return (
    <div style={{ width: "100%", overflow: "hidden", borderRadius: "16px" }}>
      <BookerEmbed
        username={calUsername}
        eventSlug={eventSlug}
        view="MONTH_VIEW" // Options: "month_view" | "column_view" | "week_view"
        customClassNames={{
          bookerContainer: "border-subtle border",
        }}
        onCreateBookingSuccess={() => {
          console.log("Booking created successfully!");
        }}
      />
    </div>
  );
}