# Accessible Form

## Description
This [practice form](https://thatblindgeye.github.io/form-practice/) another mini-project for [The Odin Project](https://www.theodinproject.com/). The form has fields for an email, country, zip code, password, and password confirmation.

The form has ARIA attributes in order to make it accessible to screen readers. This feature needs to be tested, but the goal is for a screen reader to announce when an error dialogue has appeared either upon leaving an input field or upon pressing the submit button.

## How To Use
Simply fill out the form fields, following any instructions that are listed. If a field does not meet the requirements, an error dialogue will appear below the field, explaining how to fix the error (if there are no instructions below the field) or simply stating that the field contents is not valid.

## Things I Learned
Through various testing I've started to learn how a screen reader might announce certain elements in conjunction with any aria-label/aria-labelledby/aria-describedby attributes. 

A screen reader may not always announce the aria-describedby text for the legend element, which I overcame this time by making the email input have an aria-describedby attribute that included the form-requirements element ("all fields are required"), as well as the email input itself.

In the future, I believe I will have a better understanding for how to build a form in an accessible way. Some ideas that I can expand/improve on:
  - adding more details to error messages to pinpoint specifically what needs to be fixed (instead of announcing each requirement for a password, only announcing the outstanding issues)
  - including a list of which inputs need to be fixed in the submit button error dialogue (instead of just announcing that the form cannot be submitted until all fields are valid, announcing which fields need to be fixed)
  - have input errors be removed upon the input value changing, so that screen readers will have the error announced each time the focus leaves the input (currently the error remains until there is no error, which means a screen reader most likely won't hear the error after the first time)