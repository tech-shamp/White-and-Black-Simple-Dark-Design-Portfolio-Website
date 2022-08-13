const template = document.createElement('template')
template.innerHTML = `<style>
/* Nav Styling */
/* Fonts */
@font-face {
  font-family: "Heading";
  font-weight: 700;
  src: url(fonts/montserrat.woff2);
}
@font-face {
  font-family: "Heading";
  font-weight: 900;
  src: url(fonts/montserrat900.woff2);
}
@font-face {
  font-family: "Content";
  src: url(fonts/Inter-400.woff2);
}

/* Variables & Colors */
:root {
  --white: #f3f3f3;
  --black: #000000;
  --Eigengrau: #16161d;
  --background: #1b1f24;
  --separator: #9b9b9b;
  --lines: #0d1216b3;
  --nav-background: #f2f2f2;
  --sky-blue: #00101d;
  --sky-blue-accent: #264a6d;
  --gradient: linear-gradient(to bottom, #3cb0fd, #3498db);
}

/* Universal Selector */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Document Selector */
html {
  font-size: 90%;
}
body {
  font-family: "Content";
  background: var(--background);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Heading";
  text-transform: uppercase;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: var(--black);
}

/* Nav Styling */
nav-bar {
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0 0 15px #000;
  padding: 1.2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--lines);
  background: var(--separator);
  z-index: 9;
}
.nav-links {
  display: flex;
}
.links {
  margin: 0 0.8rem;
}
.links a {
  color: var(--lines);
  font-size: 1.2rem;
  font-family: "Heading";
  font-weight: 700;
  letter-spacing: 0.04rem;
  transition: 0.3s;
}
.links a:hover,
.links a:active {
  cursor: pointer;
  color: var(--black);
}
</style>
<ul class="logo">
    <li class="links image">
      <a href="#">YOUR COMPANY</a>
    </li>
  </ul>
  <ul class="nav-links">
    <li class="links">
      <a href="#">Home</a>
    </li>
    <li class="links">
      <a href="#">About</a>
    </li>
    <li class="links">
      <a href="#">Portfolio</a>
    </li>
    <li class="links">
      <a href="#">Services</a>
    </li>
    <li class="links">
      <a href="#">Contact</a>
    </li>
  </ul>
`

class NavBar extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('nav-bar', NavBar)