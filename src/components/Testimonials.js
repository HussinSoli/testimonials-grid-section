import React from "react";
import TestimonialCard from "./TestimonialCard";
import "../styles/testimnials.css";

export default function Testimontials({ data }) {
  return (
    <section className="testimonials">
      {data.map((user, i) => {
        return (
          <TestimonialCard
            key={i}
            userImg={user.img}
            userName={user.name}
            testimonyTitle={user.testimonyTitle}
            testimony={user.testimony}
            backgroundColor={user.backgroundColor}
            backgroundImg={user.backgroundImg}
            userClass={i + 1}
          />
        );
      })}
    </section>
  );
}
