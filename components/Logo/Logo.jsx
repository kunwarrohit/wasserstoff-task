import Image from "next/image";
import LogoCss from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={LogoCss.main}>
      <Image src="/assets/images/logo.png" alt="logo" width={48} height={39} />
      <h1>Astrix.</h1>
    </div>
  );
};

export default Logo;
