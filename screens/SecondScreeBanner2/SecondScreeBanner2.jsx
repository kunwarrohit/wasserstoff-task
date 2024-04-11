import { useState, useEffect } from "react";

import SecondScreenBannerCss from "./SecondScreeBanner2.module.css";
import PartyEvent from "../PartyEvent/PartyEvent";
import PartyCollection from "../PartyCollection/PartyCollection";
const SecondScreeBanner2 = ({ banner }) => {
  let [event, setEvent] = useState(banner);
  useEffect(() => {
    setEvent(banner);
  }, [banner]);
  return (
    <div className={SecondScreenBannerCss.main}>
      {event ? <PartyCollection /> : <PartyEvent />}
    </div>
  );
};

export default SecondScreeBanner2;
