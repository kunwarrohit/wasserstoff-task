import FirstSectionCss from "./FirstSection.module.css";
import MovingWords from "../MovingWords/MovingWords";
// import Logo from "@/components/Logo/Logo";
// <Logo />

const FirstSection = () => {
  return (
    <div className={FirstSectionCss.main}>
      <section className={FirstSectionCss.title}>
        <MovingWords />
      </section>
    </div>
  );
};

export default FirstSection;
