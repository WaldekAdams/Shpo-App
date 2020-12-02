"use strict";

const {
  data
} = require("autoprefixer");

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);
const buttons = document.querySelectorAll('.item__btn--js');
const itemsNames = document.querySelectorAll('.item__heading');
const itemsPrice = document.querySelectorAll('.item__price');
const images = document.querySelectorAll('.item__img--js');
const addedList = document.querySelector('.added');
// let chosenImg;
// console.log(buttons);
// console.log(images);

buttons.forEach(btn => {
  btn.addEventListener('click', function () {
    // console.log(this.dataset.item);
    const itemNumber = this.dataset.item;
    let chosenImg;
    let chosenName;
    let chosenPrice;
    // console.log(itemNumber);

    images.forEach(img => {

      if (img.dataset.item === itemNumber) {
        chosenImg = img;
        console.log(chosenImg.src)
      }




    })

    itemsNames.forEach(name => {
      if (name.dataset.item === itemNumber) {
        chosenName = name;
        console.log(chosenName.textContent)
      }
    })

    itemsPrice.forEach(price => {
      if (price.dataset.item === itemNumber) {
        chosenPrice = price;
        console.log(chosenPrice.textContent)
      }
    })

    const li = document.createElement('li');

    const miniImg = document.createElement('img');
    miniImg.src = chosenImg.src;
    miniImg.classList.add('addItem__img')

    const miniName = document.createElement('p');
    miniName.textContent = chosenName.textContent;
    miniName.classList.add('addItem__name');

    const miniPrice = document.createElement('p');
    miniPrice.textContent = chosenPrice.textContent;
    miniPrice.classList.add('addItem__price');


    addedList.appendChild(li);

    li.appendChild(miniImg);
    li.appendChild(miniName);
    li.appendChild(miniPrice);

  })
})