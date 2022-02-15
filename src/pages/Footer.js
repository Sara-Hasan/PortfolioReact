import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div class="container">
          <h2> Sarah Hasan </h2>
          <div class="line"> </div>
          <div class="Account">
            <Link to="https://www.linkedin.com/in/sarah-alhabash-%D8%B3-a569201ab/">
              <i class="fab fa-linkedin-in"></i>
            </Link>
            <Link to="https://github.com/Sara-Hasan">
              <i class="fab fa-github-alt" target="_blank"></i>
            </Link>
            <Link to="/">
              <i class="fas fa-at" target="_blank"></i>
            </Link>
          </div>
          <hr />
          <p> Copyright © Sarah Hasan 2021 </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
