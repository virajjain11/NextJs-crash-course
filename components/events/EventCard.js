import Link from "next/link";
import React from "react";
import styles from "./EventCard.module.css";
import Button from "./ui/Button";

const EventCard = ({ event }) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-GB",
    options
  );
  const formattedLocation = event.location.replaceAll(", ", "\n");
  const link = `/events/${event.id}`;
  return (
    <div className={styles.cardContainer}>
      <img className={styles.image} src={"/" + event.image} alt={event.title} />
      <div>
        <div className={styles.rightBlock}>
          <div className={styles.eventDetails}>
            <h1 className={styles.title}>{event.title}</h1>
            <div className={styles.address}>{formattedDate}</div>
            <div className={styles.address}>{formattedLocation}</div>
          </div>
          <div>
            <Button link={link}> Explore Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
