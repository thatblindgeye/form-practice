"use strict";

import './style.css';
import {toggleTheme, themeSwitch} from "./site-settings";

toggleTheme();
themeSwitch.addEventListener("click", toggleTheme);
themeSwitch.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
    toggleTheme();
  };
});