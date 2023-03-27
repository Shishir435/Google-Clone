import "./Footer.css";

import React from "react";

const Footer = ({ isBlack }) => {
  const date = new Date().getFullYear();
  return (
    <div>
      {isBlack ? (
        <footer style={{ color: "black" }}>
          Copyright &copy;Shishir {date}
        </footer>
      ) : (
        <footer>Copyright &copy;Shishir {date}</footer>
      )}
    </div>
  );
};

export default Footer;
