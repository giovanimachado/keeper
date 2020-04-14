import React from "react";

const dateObj = new Date();
const date = dateObj.getFullYear();


function Footer() {
  return (
    <footer>
      <p>Copyright {date}</p>
    </footer>
  )
  
}

export default Footer;