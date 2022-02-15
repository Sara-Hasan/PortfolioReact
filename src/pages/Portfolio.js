import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <section id="Portfolio">
        <div class="container">
          <h1> PORTOFOLIO </h1>
          <div class="picture">
            <div class="container1">
              <Link
                to="https://sarah-yourtouch.000webhostapp.com/"
                target="_blank"
              >
                <img
                  src="img/pexels-photo-07.jpeg"
                  alt="YourTouch"
                  class="image"
                />
                <div class="over">
                  <div class="text"> E-Commerce </div>
                  <div class="desc">
                    An online store that was used PHP,MYSQL and used the
                    Bootstrap theme and worked with a team.{" "}
                  </div>
                </div>
              </Link>
            </div>
            <div class="container1">
              <Link to="https://sara-hasan.github.io/Orange/" target="_blank">
                <img
                  src="img\coding-academy_en3133337915896024312.png"
                  alt="YourTouch"
                  class="image"
                />
                <div class="over">
                  <div class="text"> Validation Javascript</div>
                  <div class="desc">
                    Develop The registration page of the Orange coding Academy
                    website has been used bootstrap,css and javascript.{" "}
                  </div>
                  {/* <div class="desc">The registration page of the Orange coding Academy website has been used javascript.</div> */}
                </div>
              </Link>
            </div>
            <div class="container1">
              <Link
                to="https://sara-hasan.github.io/ApiWeather/"
                target="_blank"
              >
                <img
                  src="img\Screenshot 2021-12-11 222826.png"
                  alt="YourTouch"
                  class="image"
                />
                <div class="over">
                  <div class="text"> API Weather </div>
                  <div class="desc"> </div>
                </div>
              </Link>
            </div>
            <div class="container1">
              <Link
                to="https://github.com/Sara-Hasan/YourTouch-Wordpress"
                target="_blank"
              >
                <img src="img/574.jpg" alt="YourTouch" class="image" />
                <div class="over">
                  <div class="text"> WordPress E-Commerce Website</div>
                  <div class="desc">
                    the user can add products to the carts and the user also can
                    search for the products and add them into the cart.{" "}
                  </div>
                </div>
              </Link>
            </div>
            <div class="container1">
              <Link to="https://github.com/Sara-Hasan/Quiz.git" target="_blank">
                <img
                  src="img/Screenshot 2021-12-12 164342.png"
                  alt="YourTouch"
                  class="image"
                />
                <div class="over">
                  <div class="text"> Online Quiz</div>
                  <div class="desc">
                    Website For Online Tests We used HTML5, CSS3, JavaScript and
                    Bootstrap.{" "}
                  </div>
                </div>
              </Link>
            </div>
            <div class="container1">
              <Link
                to="https://sara-hasan.github.io/OrangeMobile/"
                target="_blank"
              >
                <img src="img/unnamed.jpg" alt="YourTouch" class="image" />
                <div class="over">
                  <div class="text"> Orange Mobile</div>
                  <div class="desc">
                    This section displays phones as a card and use php and
                    bootstrap.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
