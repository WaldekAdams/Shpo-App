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
const moneys = document.querySelectorAll('.item__money--js');
let summaryCost = document.querySelector('.addItem__toPay--js');
let btnRemoveItem = document.querySelector('.addItem__btn-remove--js');

let allToPay = 0;
summaryCost.textContent = allToPay;
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
    let cashToPay;

    // console.log(itemNumber);

    images.forEach(img => {

      if (img.dataset.item === itemNumber) {
        chosenImg = img;
        // console.log(chosenImg.src)
      }




    })

    itemsNames.forEach(name => {
      if (name.dataset.item === itemNumber) {
        chosenName = name;
        // console.log(chosenName.textContent)
      }
    })

    itemsPrice.forEach(price => {
      if (price.dataset.item === itemNumber) {
        chosenPrice = price;
        // console.log(chosenPrice.textContent)
      }
    })

    moneys.forEach(mone => {
      if (mone.dataset.item === itemNumber) {
        cashToPay = mone.textContent;
        allToPay = allToPay + parseInt(cashToPay);
        summaryCost.textContent = allToPay;
      }
    })
    console.log(cashToPay, allToPay)
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

    const btnRemove = document.createElement('button');
    btnRemove.textContent = "Usun";
    btnRemove.classList.add('addItem__btn-remove');


    addedList.appendChild(li);

    li.appendChild(miniImg);
    li.appendChild(miniName);
    li.appendChild(miniPrice);
    li.appendChild(btnRemove)



  })
})

addedList.addEventListener('click', function (e) {

  console.log(e.target)
  console.log(e.currentTarget)
  if (e.target.tagName === 'BUTTON') {
    console.log('huj');
    const liToRemove = e.target.parentNode;
    console.log(liToRemove);
    addedList.removeChild(liToRemove)

  }
})