import React, { useState } from "react";
import { MdNightlight } from "react-icons/md";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleClick() {
    setDarkTheme((prevState) => !prevState);
    if (!darkTheme) {
      document.querySelector("body").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
    }
  }

  return (
    <div className="header" id="header">
      <nav className="header__navbar">
        <h1>Where in the world?</h1>
        <div className="header__theme-mode">
          <button onClick={handleClick}>
            <MdNightlight />
            <p>Dark Mode</p>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
