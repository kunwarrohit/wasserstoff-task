import { useState } from "react";

import SecondSectionCss from "./SecondSection.module.css";
import Picture from "../../components/Picture/Picture";
import WordBreak from "../../components/Picture/WordBreak";
import Collection from "../PartyCollection/PartyCollection";
import SecondScreenBanner1 from "../SecondScreenBanner1/SecondScreenBanner1";
import SecondScreeBanner2 from "../SecondScreeBanner2/SecondScreeBanner2";
// import Logo2 from "@/components/Logo/Logo2";
// <Logo2 />

const SecondSection = () => {
  let [changeBanner, setChangeBanner] = useState(false);
  let [swtichBanner, setSwtichBanner] = useState(false);
  let secondBannderHandler = (active) => {
    setSwtichBanner(!active);
  };
  return (
    <div className={SecondSectionCss.main1}>
      <SecondScreenBanner1 bannerHandler={secondBannderHandler} />
      <SecondScreeBanner2 banner={swtichBanner} />
    </div>
  );
};
// <Addresh />
// <WordBreak />
// <Picture />
// <Event />
// <Collection />

export default SecondSection;
