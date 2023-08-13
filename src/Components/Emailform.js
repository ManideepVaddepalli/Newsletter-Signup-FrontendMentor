import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Card from "./Card/Card";
import { root } from "..";
let usersEmail = "";
export { usersEmail };

export default function Emailform() {
  let [email, setEmail] = useState("");
  function emailchanged(event) {
    setEmail(event.target.value);
  }
  function sendEmail(emailid) {
    let bodyString =
      "Hai,\n This is &lt;b&gt; Manideep Vaddepalli	&lt;/b&gt; , Sucessfully sent an Email using SMTP in React.";
    window.Email.send({
      SecureToken: "128ee132-3595-4743-93e7-2b9291799bac",
      To: emailid,
      From: "reactemail12315168@gmail.com",
      Subject: "React Email Test",
      Body: bodyString,
    }).then((message) => alert("Please check Spam folder"));
  }
  function formsubmit() {
    const emailbox = document.querySelector(".form input");
    usersEmail = emailbox.value;
    const validator =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let spanElem = document.querySelector(".form h5 span");
    const justEmailAlert = ReactDOM.createRoot(spanElem);
    if (validator.test(emailbox.value)) {
      console.log(typeof emailbox.value);
      emailbox.style.border = " 1px solid  hsl(231, 7%, 60%)";
      emailbox.style.color = " hsl(231, 7%, 60%)";
      justEmailAlert.render(<></>);
      root.render(<Card />);
      sendEmail(emailbox.value);
    } else {
      console.log(emailbox);
      emailbox.style.border = " 1px solid hsl(4, 100%, 67%)";
      emailbox.style.color = "hsl(4, 100%, 67%)";
      justEmailAlert.render(<>Valid email required</>);
    }
  }

  return (
    <form className="form">
      <h5>
        Email address<span></span>
      </h5>
      <input
        type="text"
        placeholder="email@company.com"
        onChange={emailchanged}
        value={email}
      ></input>
      <button type="button" onClick={formsubmit}>
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}
