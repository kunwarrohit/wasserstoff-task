"use client";
import React, { useState } from "react";
import clsx from "clsx";
import PictureCss from "./Picture.module.css";
// import Pic from "./Pic";
import img1 from "../../public/assets/images/image1.png";
import img2 from "../../public/assets/images/image2.png";
import img3 from "../../public/assets/images/image3.png";
import img4 from "../../public/assets/images/image4.png";
import Image from "next/image";

const Picture = ({ level2BannerHandler }) => {
  let [isActive, setIsActive] = useState(false);
  let changeSectionHandler = () => {
    setIsActive(!isActive);
    level2BannerHandler(!isActive);
  };
  return (
    <div>
      <div className={PictureCss.customizeButton}>
        <div
          className={clsx(PictureCss.event, !isActive && PictureCss.active)}
          onClick={changeSectionHandler}
        >
          Events
        </div>
        <div
          className={clsx(
            PictureCss.collections,
            isActive && PictureCss.active
          )}
          onClick={changeSectionHandler}
        >
          Collections
        </div>
      </div>
      <section className={PictureCss.para}>
        <Image src={img1} alt="Profile Picture" />
        <Image src={img2} alt="Profile Picture" />
        <Image src={img3} alt="Profile Picture" />
        <Image src={img4} alt="Profile Picture" />
      </section>
    </div>
  );
};

export default Picture;
