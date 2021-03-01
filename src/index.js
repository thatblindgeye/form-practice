"use strict";

import './style.css';
import {toggleTheme, themeSwitch} from "./site-settings";
import {togglePasswordVisibility, passwordIcons} from "./form";

const siteTheme = (() => {
  toggleTheme();
  themeSwitch.addEventListener("click", toggleTheme);
  themeSwitch.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      e.preventDefault();
      toggleTheme();
    };
  });
})();

const inputs = (() => {
  Array.from(passwordIcons).forEach(icon => {
    icon.addEventListener("click", (e) => {
      togglePasswordVisibility(e);
      console.log(e.target);
    });
  });
})();