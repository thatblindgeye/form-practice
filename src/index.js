"use strict";

import './style.css';
import {toggleTheme, themeSwitch} from "./site-settings";
import {togglePasswordVisibility, validateFields, submitValidForm, toggleSubmitError} from "./form";

const siteTheme = (() => {
  toggleTheme();
  themeSwitch.addEventListener("click", toggleTheme);
  themeSwitch.addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleTheme();
    };
  });
})();

const formEvents = (() => {
  const passwordIcons = document.querySelectorAll(".password-visibility");
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

  const fields = document.querySelectorAll('input:not([type="submit"])');
  Array.from(fields).forEach(field => {
    field.addEventListener("blur", validateFields)
  })

  document.querySelector("#submit-button").addEventListener("blur", toggleSubmitError);

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    toggleSubmitError(e);
    if (validateFields(e)) {
      submitValidForm();
    }
  })
})();