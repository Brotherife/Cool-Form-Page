'use strict';

const submitBtn = document.getElementById('btn');
const okBtn = document.getElementById('okBtn');
const popup = document.getElementById('popup');
const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const username = document.getElementById('username');
const email = document.getElementById('email');
const errorMsg = document.querySelector('.error-msg');

let position;
submitBtn.addEventListener('mouseover', () => {
  if (!form.checkValidity()) {
    position ? (position = 0) : (position = 100);
    submitBtn.style.transform = `translate(${position}px, 0px)`;
    submitBtn.style.transition = 'all 0.3s ease';
  } else {
    return;
  }
});

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (password.value !== password2.value) {
    errorMsg.innerText = `password do not match`;
  } else {
    popup.classList.add('open-popup');
  }
});

okBtn.addEventListener('click', () => {
  popup.classList.remove('open-popup');
  errorMsg.innerText = '';
  password.value = '';
  password2.value = '';
  username.value = '';
  email.value = '';
});
