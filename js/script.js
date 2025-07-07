const navbarNav = document.querySelector(".navbar-nav");
const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});

const navbarLink = document.querySelectorAll(".navbar-nav li a");
navbarLink.forEach((item) =>
  item.addEventListener("click", () => navbarNav.classList.remove("active"))
);

document.body.addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("menu-icon") &&
    !e.target.classList.contains("navbar-nav")
  ) {
    navbarNav.classList.remove("active");
  }
});
