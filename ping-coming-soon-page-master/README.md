# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![Alt text](./images/ping-site.jpg "Ping website")
![Alt text](./images/ping-site%20mobile.jpg "Ping website (mobile)")


### Links

- Solution URL: https://github.com/brunobiano/Ping-single-column-coming-soon-page.git

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

  Learned better ways to position footer and some JavaScript element creation.

  ```js
  function clickTesting() {
      let filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!filter.test(check.value)) {
          check.style.borderColor = '#f00';
          let newDiv = document.createElement('div');
          newDiv.classList.add('failInput');
          newDiv.innerHTML = 'Please provide a valid email address';
          check.parentElement.insertBefore(newDiv, check.elementSibiling);
      }
      else {
          clearError();
      }

      function clearError() {
          check.style.borderColor = '';
          
          let errorMsg = document.querySelectorAll('.failInput');
          for (let i in errorMsg) {
              errorMsg[i].style.display = 'none';
          }
      }
  }
  ```

### Continued development

Positioning in the DOM, with multiple div's inside other div's, is something i'm working on getting better also gettint better at JS element maneuver.

## Author

- Website - [Bruno](https://www.https://github.com/brunobiano)
- Frontend Mentor - [@Johnnuks](https://https://www.frontendmentor.io/profile/Johnnuks)