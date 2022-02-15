import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <label class="logo">
          <Link to="/">
            <i class="fas fa-code"></i> SARAH HASAN
          </Link>
        </label>
        <ul>
          <li>
            <Link to="/about"> About me </Link>
          </li>
          <li>
            <Link to="/skill"> Skills </Link>
          </li>
          <li>
            {" "}
            <Link to="/services"> Services </Link>
          </li>
          <li>
            {" "}
            <Link to="/portfolio"> Portofolio </Link>
          </li>
          <li>
            {" "}
            <Link to="/tistimonal"> Tistimonal </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact" className="contact">
              {" "}
              Contact me{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
