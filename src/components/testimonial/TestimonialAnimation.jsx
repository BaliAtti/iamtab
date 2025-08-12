import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `  "Nagyon köszönöm a munkádat, kiváló anyagokkal támogattad az értékesítést,
      járultál hozzá az egész cég dinamikus növekedéséhez! Magam arra emlékszem, hogy nézett ki például egy szórólap vagy a webshopunk,
      mikor jöttem a céghez és hogy néz ki a mostani akciós kiadvány és a masszív 1000+ termékes modern webshop. Bizony nagyon nagy a kontraszt,
      ami Neked köszönhető, két külön világ."`,
      reviewerName: "Z. János",
      designation: "Kereskedelmi igazgató",
      delayAnimation: "",
    },
    {
      imageName: "team-2",
      desc: ` "Nekem nagyon tetszik, szuper lett! Köszi, végre fejlődnek ezek a modulok is ❤️"`,
      reviewerName: "Sz. Édua",
      designation: "Tervezési igazgató",
      delayAnimation: "200",
    },
    {
      imageName: "team-4",
      desc: ` "Áhh igen az utóbbi kellett
very nájsz 😄
thenk you!"`,
      reviewerName: "K. Tamás",
      designation: "Dev Ops vezető",
      delayAnimation: "400",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="testimonial-01 media">
              <div className="avatar">
                <img
                  src={`img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                ></img>
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
