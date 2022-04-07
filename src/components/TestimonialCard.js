import React from "react";
export default function TestimonialCard({
  userImg,
  userName,
  testimony,
  testimonyTitle,
  backgroundColor,
  backgroundImg,
  userClass,
}) {
  return (
    <div
      className="testimony_card"
      id={`user${userClass}`}
      style={{
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="user_profile">
        <img src={userImg} alt="" />
        <p>
          {userName} <span>Verified Graduate</span>
        </p>
      </div>
      <div className="card_info">
        <h1>{testimonyTitle}</h1>
        <p>“{testimony}”</p>
      </div>
    </div>
  );
}
