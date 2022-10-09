import Link from "next/link";
import React from "react";

const EventCard = ({ event }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-GB",
    options
  );
  return (
    <div>
      <img src={"/" + event.iage} alt={event.title} />
      <div>
        <div>
          <h1>{event.title}</h1>
          <div>{formattedDate}</div>
          <div>{event.location.replace(" ", "\n")}</div>
        </div>
        <div>
          <Link href={`/events/${event.id}`}> Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
