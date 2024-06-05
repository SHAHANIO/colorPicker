const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");

const color1Name = document.getElementById("color-1-name");
const color2Name = document.getElementById("color-2-name");
const color3Name = document.getElementById("color-3-name");
const color4Name = document.getElementById("color-4-name");
const color5Name = document.getElementById("color-5-name");

const color1Lock = document.querySelector(".container #box1 i");
const color2Lock = document.querySelector(".container #box2 i");
const color3Lock = document.querySelector(".container #box3 i");
const color4Lock = document.querySelector(".container #box4 i");
const color5Lock = document.querySelector(".container #box5 i");

let isLocked1 = false;
let isLocked2 = false;
let isLocked3 = false;
let isLocked4 = false;
let isLocked5 = false;

// Initial color values
let currentColor1 = "#0098a3";
let currentColor2 = "#00b5c2";
let currentColor3 = "#00cddb";
let currentColor4 = "#00dbeb";
let currentColor5 = "#00eeff";

// Update the initial box colors
box1.style.background = currentColor1;
box2.style.background = currentColor2;
box3.style.background = currentColor3;
box4.style.background = currentColor4;
box5.style.background = currentColor5;

color1Name.textContent = currentColor1;
color2Name.textContent = currentColor2;
color3Name.textContent = currentColor3;
color4Name.textContent = currentColor4;
color5Name.textContent = currentColor5;

function changeBg() {
   if (!isLocked1) {
      currentColor1 = generateRandomColor();
      box1.style.background = currentColor1;
      color1Name.textContent = currentColor1;
   }
   if (!isLocked2) {
      currentColor2 = generateRandomColor();
      box2.style.background = currentColor2;
      color2Name.textContent = currentColor2;
   }
   if (!isLocked3) {
      currentColor3 = generateRandomColor();
      box3.style.background = currentColor3;
      color3Name.textContent = currentColor3;
   }
   if (!isLocked4) {
      currentColor4 = generateRandomColor();
      box4.style.background = currentColor4;
      color4Name.textContent = currentColor4;
   }
   if (!isLocked5) {
      currentColor5 = generateRandomColor();
      box5.style.background = currentColor5;
      color5Name.textContent = currentColor5;
   }
}

function generateRandomColor() {
   let letters = "0123456789ABCDEF";
   let color = "#";
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function toggleLock(lockIcon, isLocked) {
   if (isLocked) {
      lockIcon.classList.remove('bxs-lock-open-alt');
      lockIcon.classList.add('bxs-lock-alt');
   } else {
      lockIcon.classList.remove('bxs-lock-alt');
      lockIcon.classList.add('bxs-lock-open-alt');
   }
}

color1Lock.addEventListener('click', function() {
   isLocked1 = !isLocked1;
   toggleLock(color1Lock, isLocked1);
});

color2Lock.addEventListener('click', function() {
   isLocked2 = !isLocked2;
   toggleLock(color2Lock, isLocked2);
});

color3Lock.addEventListener('click', function() {
   isLocked3 = !isLocked3;
   toggleLock(color3Lock, isLocked3);
});

color4Lock.addEventListener('click', function() {
   isLocked4 = !isLocked4;
   toggleLock(color4Lock, isLocked4);
});

color5Lock.addEventListener('click', function() {
   isLocked5 = !isLocked5;
   toggleLock(color5Lock, isLocked5);
});

function handleKeyPresses(event) {
   if (event.key === "Enter") {
      changeBg();
   }
}

document.addEventListener('keypress', handleKeyPresses);
