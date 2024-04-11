import Image from "next/image";
import LogoCss from "./Logo2.module.css";

const Logo2 = () => {
  return (
    <div className={LogoCss.main}>
      <Image src="/assets/images/logo2.png" alt="logo" width={48} height={39} />
      <h1 className={LogoCss.heading}>Astrix.</h1>
    </div>
  );
};

export default Logo2;
