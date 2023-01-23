import React from "react";
import group from "../../assets/Grupo 7610.png";
import TextPrimary from "../Text/Primary";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="textfooter">
        <TextPrimary color="primary" size={56} lineHeight={67}>
          Con el patrocinio de
        </TextPrimary>
      </div>
      <img className="imgFooter" src={group} alt="footer" />
    </footer>
  );
};

export default Footer;
