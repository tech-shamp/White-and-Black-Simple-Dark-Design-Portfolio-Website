const Styles = `<style>.nav-links,.navBar{display:flex}.links a,.navBar{color:var(--lines)}.navBar{position:sticky;top:0;width:100%;box-shadow:0 0 15px #000;padding:1.2rem 10rem;justify-content:space-between;align-items:center;background:var(--separator);z-index:9}.links{margin:0 .8rem}.links a{font-size:1.2rem;font-family:Heading;font-weight:700;letter-spacing:.04rem;transition:.3s}.links a:active,.links a:hover{cursor:pointer;color:#565656;}</style>`

const NavBar = `${Styles}
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
  </ul>`

export default NavBar