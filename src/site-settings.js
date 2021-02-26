"use strict";

  const themeSwitch = document.querySelector("#theme-switch");

  const darkTheme = () => {
    themeSwitch.setAttribute("aria-checked", "false");
    document.documentElement.setAttribute("theme", "dark");
  };

  const lightTheme = () => {
    themeSwitch.setAttribute("aria-checked", "true");
    document.documentElement.setAttribute("theme", "light");
  };

  const toggleTheme = (e) => {
    if (document.documentElement.getAttribute("theme") === "light") {
      darkTheme();
    } else {
      lightTheme();
    };
  };


export {toggleTheme, themeSwitch}