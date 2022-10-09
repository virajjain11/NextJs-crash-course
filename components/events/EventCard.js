import Link from "next/link";
import React from "react";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-GB",
    options
  );
  const formattedLocation = event.location.replaceAll(", ", "\n");
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={"/" + event.image} alt={event.title} />
      <div>
        <div>
          <h1>{event.title}</h1>
          <div>{formattedDate}</div>
          <div>{formattedLocation}</div>
        </div>
        <div>
          <Link href={`/events/${event.id}`}> Know more</Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
