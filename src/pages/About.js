import React from "react";

function About() {
  return (
    <div>
      <section id="About" className="About">
        <div className="container">
          <div className="flex-con">
            <div className="item1">
              <h1> About Me </h1>
              <div className="line"> </div>
              <p>
                {" "}
                Hello, I'm Sarah Hassan, I'm a Full Stack Developer, I graduated
                from Al al-Bayt University with a BSc in Computer Science, I
                have a full web developer certification from Orange, I'm excited
                to keep up with all the new in technology trends, I have my
                personal touch in my work. You can take care of me on any
                project you want to do.
              </p>
              <div className="info">
                <div className="item2">
                  <i className="fas fa-envelope"></i>
                  <i className="fas fa-phone-square"></i>
                  <i className="fas fa-city"></i>
                </div>
                <div className="item3">
                  <h6>sara.ahabash@gmail.com </h6>
                  <h6>+962 777 748 259</h6>
                  <h6> Amman-Jordan</h6>
                </div>
              </div>
            </div>
            <div className="item2">
              <img src="img/me.jpg" alt="Sarah Hasan" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
