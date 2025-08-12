import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+36 30 729 0725",
  email: " t.attila.balazs@gmail.com",
};

const sliderContent = {
  name: "Tóth Attila Balázs",
  description: `Grafikus és UI/UX designerként, az elmúlt évtizedben jelentős tapasztalatot gyűjtöttem
  a nyomtatott médiában és digitális termékek készítésében. A munkám szerves részének érzem,
  hogy olyan anyagot hozzak létre, mely használhatóságában és megjelenésében ötvözi
  az ügyfél elképzeléseit, miközben figyelembe veszem a fejlesztői lehetőségeket.`,
  btnText: " Önéletrajz letöltés",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+36 30 729 0725">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:t.attila.balazs@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, én vagyok
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead"> Grafikus tervező</p>
                    <p className="loop-text lead"> UI/UX Designer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/toth_attila_balazs_cv_hun.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home_banner_w.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};
export default Slider;
