import React from "react";
import Cardtopsection from "./Cardtopsection";
import { root } from "../..";
import App from "../App";

export default function Card() {
  function homePage() {
    root.render(<App />);
  }
  return (
    <div className="card-content">
      <Cardtopsection />
      <button type="button" onClick={homePage}>
        Dismiss message
      </button>
    </div>
  );
}
