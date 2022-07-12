"use strict";

// Selection

const navLinksActivation = document.querySelectorAll("#active");

// Navigation Link Activation on click

const changeActiveItem = () => {
  navLinksActivation.forEach((item) => {
    item.classList.remove("active");
  });
};
navLinksActivation.forEach((link) =>
  link.addEventListener("click", function () {
    changeActiveItem();
    link.classList.add("active");
  })
);
