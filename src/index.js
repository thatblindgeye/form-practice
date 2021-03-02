"use strict";

import './style.css';
import {toggleTheme, themeSwitch} from "./site-settings";
import {togglePasswordVisibility, passwordIcons, form, fields, checkFields, submitValidForm} from "./form";

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
    });
  });

  Array.from(passwordIcons).forEach(icon => {
    icon.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        togglePasswordVisibility(e);
      }
    });
  });


  Array.from(fields).forEach(field => {
    field.addEventListener("blur", checkFields)
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkFields(e)) {
      submitValidForm();
    } else {
      return;
    }
  })
})();