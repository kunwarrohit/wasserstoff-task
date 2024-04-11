import React from "react";
import PartyCollectionCss from "./PartyCollection.module.css";
import Image from "next/image";

const PartyCollection = () => {
  return (
    <div className={PartyCollectionCss.main}>
      <section>
        <div className={PartyCollectionCss.title}>
          <h2>
            Explore Your First <br /> Collectible
          </h2>
        </div>
        <div className={PartyCollectionCss.heading}>
          <h1>
            Meta <br />
            Lives
          </h1>
        </div>
        <div className={PartyCollectionCss.head}>
          <h2>Live in Astrix</h2>
        </div>
        <div className={PartyCollectionCss.para}>
          <h3>
            Lorem ipsum dolor sit amet <br /> consectetur. Ac lorem massa in
            morbi
            <br /> et sed ipsum. Pellentesque mattis <br />
            condimentum ut nulla.{" "}
          </h3>
        </div>
        <div>
          <div className={PartyCollectionCss.imag}>
            <Image
              src="/assets/images/add_people.png"
              alt="Frinds"
              width={150}
              height={40}
            />
          </div>
          <div className={PartyCollectionCss.people}>
            <h2>22k people interested</h2>
          </div>
        </div>
        <div className={PartyCollectionCss.collectibles}>
          <div>
            <h3>Collectibles</h3>
          </div>
          <div className={PartyCollectionCss.collection}>
            <Image
              className={PartyCollectionCss.i}
              src="/assets/images/Card_collections.png"
              alt="Frinds"
              width={164}
              height={224}
            />
            <Image
              className={PartyCollectionCss.i}
              src="/assets/images/Card_collections.png"
              alt="Frinds"
              width={164}
              height={224}
            />
            <Image
              className={PartyCollectionCss.i}
              src="/assets/images/Card_collections.png"
              alt="Frinds"
              width={164}
              height={224}
            />
          </div>
          <div className={PartyCollectionCss.but}>
            <button className={PartyCollectionCss.butt}>Join Waitlist</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartyCollection;
