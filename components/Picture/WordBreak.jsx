import React from "react";
import WordBreakCss from "./WordBreak.module.css";

const WordBreak = () => {
  return (
    <div className={WordBreakCss.main}>
      <h1>
        AST
        <br />
        RIX
      </h1>
      <br />
      <h1>
        COLL
        <br />
        ECTI<br></br>BLE
      </h1>
    </div>
  );
};

export default WordBreak;
