"use strict";

const regex = {
  email: /^(\w*)(\.)?(\w*)@([A-Za-z]*)(\.([A-Za-z]{1,})){1,}$/,
  country: /^([a-z]+\s*){1,}$/i,
  zipcode: /^\d{5}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/
}

const passwordIcons = document.querySelectorAll(".password-visibility");
const togglePasswordVisibility = (e) => {
  if (e.target.getAttribute("aria-checked") === "false") {
    e.target.setAttribute("aria-checked", "true");
    e.target.setAttribute("aria-label", "password visible");
    e.target.previousElementSibling.type = "text";
  } else {
    e.target.setAttribute("aria-checked", "false");
    e.target.setAttribute("aria-label", "password hidden");
    e.target.previousElementSibling.type = "password";
  }
};

const form = document.querySelector("form");
const fields = document.querySelectorAll('input:not([type="submit"])')
const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipcode");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirm");
const checkFields = (e) => {
  const {email, country, zipcode, password} = regex;
  let validated = false;

  if ((e.target === emailInput || e.type === "submit") &&
      !email.test(emailInput.value)) {
    showInputError(emailInput);
    return false;
  } else {
    removeInputError(emailInput);
  };

  if ((e.target === countryInput || e.type === "submit") &&
      !country.test(countryInput.value)) {
  showInputError(countryInput);
  return false;
  } else if (country.test(countryInput.value)) {
  removeInputError(countryInput);
  };

  if ((e.target === zipInput || e.type === "submit") &&
      !zipcode.test(zipInput.value)) {
  showInputError(zipInput);
  return false;
  } else if (zipcode.test(zipInput.value)) {
  removeInputError(zipInput);
  };

  if ((e.target === passwordInput || e.type === "submit") &&
      !password.test(passwordInput.value)) {
  showInputError(passwordInput.parentElement);
  return false;
  } else if (password.test(passwordInput.value)) {
  removeInputError(passwordInput.parentElement);
  };

  if ((e.target === confirmPassword || e.type === "submit") && 
      confirmPassword.value !== passwordInput.value) {
    showInputError(confirmPassword.parentElement);
    return false
  } else {
    removeInputError(confirmPassword.parentElement);
  };

  return true;
}

const showInputError = (target) => {
  target.classList.add("invalid");
  target.nextElementSibling.style.display = "inline-block";
}

const removeInputError = (target) => {
  target.classList.remove("invalid");
  target.nextElementSibling.style.display = "none";
}

const main = document.querySelector("#main");
const submitValidForm = () => {
  while (main.lastChild) {
    main.removeChild(main.lastChild);
  }
  const heading = document.createElement("h2");
  heading.className = "form-success";
  heading.innerText = "You've submitted a valid form!";
  main.appendChild(heading);
  document.documentElement.scrollTop = 0;
}

export {togglePasswordVisibility, passwordIcons, form, fields, checkFields, submitValidForm}