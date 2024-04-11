import React from "react";
import PartyEventCss from "./PartyEvent.module.css";
import Image from "next/image";

const PartyEvent = () => {
  return (
    <div className={PartyEventCss.main}>
      <section>
        <div className={PartyEventCss.title}>
          <h2>
            Explore Your First <br /> Event
          </h2>
        </div>
        <div className={PartyEventCss.heading}>
          <h1>Event Name</h1>
        </div>
        <div className={PartyEventCss.head}>
          <h2>
            <Image
              src="/assets/images/location.png"
              alt="location"
              width={27}
              height={27}
            />
            Venue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image
              src="/assets/images/time.png"
              alt="time"
              width={27}
              height={27}
            />
            &nbsp; 04/3/2024 @19:00
          </h2>
        </div>
        <div className={PartyEventCss.para}>
          <h3>
            Lorem ipsum dolor sit amet <br /> consectetur. Ac lorem massa in
            morbi
            <br /> et sed ipsum. Pellentesque mattis <br />
            condimentum ut nulla.
          </h3>
        </div>
        <div className={PartyEventCss.event}>
          <div>
            <h2>Artist Lineup</h2>
          </div>
          <div className={PartyEventCss.artist}>
            <Image
              src="/assets/images/event1.png"
              alt="Frinds"
              width={145}
              height={150}
            />
            <Image
              src="/assets/images/event2.png"
              alt="Frinds"
              width={192}
              height={198}
            />
            <Image
              src="/assets/images/event3.png"
              alt="Frinds"
              width={145}
              height={150}
            />
          </div>
        </div>
        <div className={PartyEventCss.venue}>
          <div className={PartyEventCss.qr}>
            <Image
              src="/assets/images/QR.png"
              alt="Frinds"
              width={105}
              height={105}
            />
          </div>
          <div className={PartyEventCss.but}>
            <button className={PartyEventCss.butt}>Join Waitlist</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyEvent;
