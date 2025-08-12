import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "UI/UX design",
    descriptions: `Volt szerencsém részt venni és tapasztalatot gyűjteni rengeteg projektben, elkezdve marketing landing oldal
    tervezésétől, Ios/Android rendszerre fejlesztett applikáción keresztül, több funkciós CRM rendszer készítéséig. Mindig igyekszem
    naprakésznek lenni a design trendekkel, rendszerekkel, melyeket beépítek az adott projekt tervezésébe.`,
    delayAnimation: "",
  },
  {
    icon: "icon-documents",
    title: "Grafikai tervezés",
    descriptions: `Az elmúlt évtizedben a nyomtatott média szinte minden formájával dolgoztam már, kevesen tartják már fontosnak
    ezt a információ közlési formátumot, de rengeteg ügyfél él még ezzel a lehetőséggel. Legyen szó kiállításról, termék promócióról, 
    még mindig nagy az a réteg akiket főleg vagy csak így lehet megszólítani.`,
    delayAnimation: "200",
  },
  {
    icon: "icon-target",
    title: "Ügyfélközpontúság",
    descriptions: `"Az ügyfélnek mindig igaza van." Szokták ezt mondani, ami addig a pontig
    teljesen megállja a helyét, míg nem a saját projektjének a gátja lesz. Fontos szerepem
    az ügyfelekkel való kapcsolattartás, hogy az elképzeléseiket a legpontosabban megvalósítsam, miközben bővítem a látásmódjukat.`,
    delayAnimation: "400",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
