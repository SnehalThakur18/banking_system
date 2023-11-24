import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
  text: "Banking System",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
