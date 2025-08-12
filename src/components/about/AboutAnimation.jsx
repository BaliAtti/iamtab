import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";
import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about_me.jpg" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Grafikus és UI/UX Designer</p>
                  <h3>Tóth Attila Balázs</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Rólam</h3>
                </div>

                <div className="about-text">
                  <p>
                    Több helyen és még több területen dolgoztam már a grafika világában. Megtanultam jó csapatjátékos lenni, de a monoton egyéni feladatokkal is remekül boldogulok.
                    Ha nem tudok valamit inkább kérdezek; a kommunikáció, a sikeres munka kulcsa. Mindig készen állok tanulni, tovább fejlődni, ez a szakma konstans változik.
                    Jelen céljaim között szerepel a front-end fejlesztés elsajátítása, hogy még átfogóbb megoldást tudjak nyújtani a megrendelőknek, ügyfeleknek.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Név: </label>
                          <span>Tóth Attila Balázs</span>
                        </li>
                        <li>
                          <label>Születési idő: </label>
                          <span>1988 augusztus 19.</span>
                        </li>
                        <li>
                          <label>Lakhely: </label>
                          <span>Szeged</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+36) 30 729 0725</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>t.attila.balazs@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark_orange.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>Mivel foglalkozom?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark_orange.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Mások mondták...</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
