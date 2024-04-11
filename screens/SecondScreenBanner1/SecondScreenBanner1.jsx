import { useState } from "react";
import Banner1Css from "./SecondScreenBanner1.module.css";
import Logo2 from "@/components/Logo/Logo2";
import AddressStrip from "../AddressStrip/AddressStrip";
import Picture from "@/components/Picture/Picture";

const SecondScreenBanner1 = ({ bannerHandler }) => {
  // let [swtichBanner, setSwitchBanner] = useState(false);

  let levelBannerHandler = (active) => {
    bannerHandler(active);
  };
  return (
    <div className={Banner1Css.main}>
      <div className={Banner1Css.section}>
        <Logo2 />
        <Picture level2BannerHandler={levelBannerHandler} />
      </div>
      <AddressStrip />
    </div>
  );
};

export default SecondScreenBanner1;
