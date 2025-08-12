import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `UI/UX designer`,
    jobDuration: `2023 -`,
    timeDuraton: `Teljes munkaidő`,
    compnayName: "Technetic Services",
    jobDescription: `UI/UX anyagok, drótvázak és prototípusok készítése, Figma elsajátítása, design systemek és komponensek karbantartása és beépítése.
    Digitális arculati elemekkialakítása, folyamatos összeköttetés az ügyfelekkel és szoros együttműkődés a fejlesztői csapattal. B2B és B2C mesterséges inteligenciával ellátott
    rendszerek tervezése, marketing oldalak és CRM rendszerek készítése.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Grafikus és UI Designer`,
    jobDuration: `2017 - 2023`,
    timeDuraton: `Teljes munkaidő`,
    compnayName: "Flexovit Hungária kft.",
    jobDescription: `Kiadványok és nyomdai anyagok gyártása, termékfotózás és promó videók készítése.
    Saját gyártású gépek, specifikus iparági termékek csomagolásainak készítése, melyek mind Magyarországon, mind kölföldön is voltak értékesítve. Teljesen új
    B2B és B2C webshop tervezése, kivitelezése fejlesztőkkel és karbantartása.`,
    delayAnimation: "100",
  },
  {
    jobPosition: `Grafikus`,
    jobDuration: `2016 - 2017`,
    timeDuraton: `Teljes munkaidő`,
    compnayName: "Agropark",
    jobDescription: ` Saját céges felhasználásra grafikai anyagok készítése, elsajátítottam az Adobe csomag
    termékeivel, a fotó és videó készítést és szerkesztést.`,
    delayAnimation: "200",
  },
  {
    jobPosition: `Grafikus`,
    jobDuration: `2015 - 2016`,
    timeDuraton: `Részmunkaidő`,
    compnayName: "New Art Media",
    jobDescription: ` Fiatalos marketing startup, leginkább nyomdai anyagok készítése volt a prioritás,
    de itt ismerkedtem meg először mobil UI rendszerekkel és a material design elemeivel.`,
    delayAnimation: "300",
  },
];

const educatonContent = [
  {
    passingYear: "2024",
    degreeTitle: "Ux design",
    instituteName: "Grafikus Akadémia",
  },
  {
    passingYear: "2013",
    degreeTitle: "Tervező grafikus MA",
    instituteName: "Eszterházy Egyetem Egri Campus",
  },
  {
    passingYear: "2009",
    degreeTitle: "Web designer ",
    instituteName: "Eszterházy Egyetem Egri Campus",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Tapasztalataim</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Tanulmányok</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
