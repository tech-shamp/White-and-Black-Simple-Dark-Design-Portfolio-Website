import NavBar from "./components/navbar.js"

const NavElem = document.querySelector(".navBar")

if (NavElem) {
  NavElem.innerHTML += NavBar
}
else alert('Error Loading Nav Element')