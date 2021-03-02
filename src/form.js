"use strict";

const regex = {
  email: /^(\w*)(\.)?(\w*)@([A-Za-z]*)(\.([A-Za-z]{1,})){1,}$/,
  country: /^([a-z]+\s*){1,}$/i,
  zipcode: /^\d{5}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/,
};

const togglePasswordVisibility = (e) => {
  if (e.target.getAttribute("aria-checked") === "false") {
    e.target.setAttribute("aria-checked", "true");
    // e.target.setAttribute("aria-label", "password visible");
    e.target.textContent = "visibility";
    e.target.previousElementSibling.type = "text";
  } else {
    e.target.setAttribute("aria-checked", "false");
    // e.target.setAttribute("aria-label", "password hidden");
    e.target.textContent = "visibility_off";
    e.target.previousElementSibling.type = "password";
  }
};

const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipcode");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submitError = document.querySelector("#submit-error");

const validateFields = (e) => {
  const { email, country, zipcode, password } = regex;

  if ((e.target === emailInput || e.type === "submit") && 
      !email.test(emailInput.value)) 
  {
    addFormError(emailInput);
    return false;
  } else if (email.test(emailInput.value)) {
    removeFormError(emailInput);
  }

  if ((e.target === countryInput || e.type === "submit") &&
    !country.test(countryInput.value)) 
  {
    addFormError(countryInput);
    return false;
  } else if (country.test(countryInput.value)) {
    removeFormError(countryInput);
  }

  if ((e.target === zipInput || e.type === "submit") &&
    !zipcode.test(zipInput.value)) 
  {
    addFormError(zipInput);
    return false;
  } else if (zipcode.test(zipInput.value)) {
    removeFormError(zipInput);
  }

  if ((e.target === passwordInput || e.type === "submit") &&
    !password.test(passwordInput.value)) 
  {
    addFormError(passwordInput.parentElement);
    return false;
  } else if (password.test(passwordInput.value)) {
    removeFormError(passwordInput.parentElement);
  }

  if ((e.target === confirmPassword || e.type === "submit") &&
    confirmPassword.value !== passwordInput.value) 
  {
    addFormError(confirmPassword.parentElement);
    return false;
  } else {
    removeFormError(confirmPassword.parentElement);
  }

  return true;
};

const addFormError = (target) => {
  target.classList.add("invalid");
  target.nextElementSibling.style.display = "inline-block";
};

const removeFormError = (target) => {
  target.classList.remove("invalid");
  target.nextElementSibling.style.display = "none";
};

const checkErrorsOnSubmit = (e) => {
  if (!validateFields(e)) {
    submitError.style.display = "inline-block";
  }
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
};

export { togglePasswordVisibility, validateFields, submitValidForm, checkErrorsOnSubmit };
