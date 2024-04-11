"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo/Logo";
import Logo2 from "@/components/Logo/Logo2";
import FirstSection from "@/components/FirstSection/FirstSection";
import SecondSection from "@/screens/SecondSection/SecondSection";
import LandingCss from "./Landing.module.css";

const Landing = () => {
  let [switchScreen, setSwtichScreen] = useState(false);
  let swtichScreenHandler = () => {
    setSwtichScreen((prev) => {
      return !prev;
    });
  };

  let secondScreenHander = (evnet) => {};
  return (
    <div className={LandingCss.main}>
      {switchScreen ? (
        <div className={LandingCss.secondScreen}>
          <SecondSection />
        </div>
      ) : (
        <div className={LandingCss.firstScreen}>
          <Logo />
          <FirstSection />
        </div>
      )}
      <div>
        <button
          className={LandingCss.swtichScreenBtn}
          onClick={swtichScreenHandler}
        >
          Switch Screen
        </button>
      </div>
    </div>
  );
};

export default Landing;
