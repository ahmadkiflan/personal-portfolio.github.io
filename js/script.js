const navbarNav = document.querySelector(".navbar-nav");
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

const navbarLink = document.querySelectorAll(".navbar-nav li a");
navbarLink.forEach((item) =>
  item.addEventListener("click", () => navbarNav.classList.remove("active"))
);
