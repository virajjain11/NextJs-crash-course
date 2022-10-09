import Head from "next/head";
import Image from "next/image";
import EventCard from "../components/events/EventCard";
import { getFeaturedEvents } from "../data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  console.log("featuredEvents", featuredEvents);
  return (
    <div>
      {featuredEvents.map((event) => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
}
