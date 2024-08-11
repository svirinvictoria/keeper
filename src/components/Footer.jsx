import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-text"> <span>Copyright ⓒ {year} by Victoria Svirin.</span> 
      <span>Design and guidance: Dr. Angela Yu </span></p>
    </footer>
  );
}

export default Footer;
