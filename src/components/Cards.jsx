import React from "react";
import { MailOpen, Send, Instagram, Twitter, Github } from "lucide-react";
const Cards = () => {
  return (
    <>
      <br />
      <br />
      <div className="mainSocialDiv">
        <a
          href="mailto:ayushmehrotra007@gmail.com?subject='From Portfolio'"
          class="emailSvg"
        >
          <MailOpen color="lightgrey" size={110} />
        </a>
        <a href="https://t.me/Akaayush007" target="_blank" class="emailSvg">
          <Send color="lightgrey" size={110} />
        </a>
        <a
          href="https://instagram.com/mein.ayush.hoon"
          target="_blank"
          class="emailSvg"
        >
          <Instagram size={110} color="lightgrey" />
        </a>
        <a href="https://x.com/AYUSH070707" target="_blank" class="emailSvg">
          <Twitter size={110} color="lightgrey" />
        </a>
        <a
          href="https://github.com/mrayushmehrotra"
          target="_blank"
          class="emailSvg"
        >
          <Github size={110} color="lightgrey" />
        </a>
      </div>
    </>
  );
};

export default Cards;
