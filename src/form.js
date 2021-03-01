import { toggleTheme } from "./site-settings";

const submit = document.querySelector('input[type="submit"]');

const regex = {
  email: /^(\w*)(\.)?(\w*)@([A-Za-z]*)(\.([A-Za-z]{1,})){1,}$/,
  country: /^([a-z]+\s*){1,}$/i,
  zip: /^\d{5}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/
}

const passwordIcons = document.querySelectorAll(".password-visibility");
const togglePasswordVisibility = (e) => {
  if (e.target.previousElementSibling.type === "password") {
    e.target.previousElementSibling.type = "text";
  } else {
    e.target.previousElementSibling.type = "password";
  }
};



export {togglePasswordVisibility, passwordIcons}