import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["Mind", "Web oldalak, alkalmazások", "App design", "Nyomtatott média"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 874,
        height: 1200,
        title: "LANEA",
        subTitle: "B2B és B2C landing oldal",
        delayAnimation: "",
        portfolioLink:
          "https://lanea.hu",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 1200,
        height: 1200,
        title: "LANEA",
        subTitle: "Lanea házépítés segítő webapp",
        delayAnimation: "100",
        portfolioLink:
          "https://auth.lanea.hu/realms/lanea-customer/login-actions/authenticate?client_id=lanea-customer&tab_id=sfGEmGz1y7Q&client_data=eyJydSI6Imh0dHBzOi8vYXBwLmN1c3RvbWVyLmxhbmVhLmh1L2FwaS9hdXRoL2tleWNsb2FrIiwicnQiOiJjb2RlIn0",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 686,
        height: 1200,
        title: "Technetic Services",
        subTitle: "Marketing landing oldal",
        delayAnimation: "200",
        portfolioLink:
          "https://technetic.hu",
      },
      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 686,
        height: 1200,
        title: "LANEA",
        subTitle: "Lanea teljeskörű házépítést segító app",
        delayAnimation: "300",
        portfolioLink:
          "https://apps.apple.com/hu/app/lane-a/id6569241052?l=hu",
      },
            {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 874,
        height: 1200,
        title: "Cinemaximum",
        subTitle: "Török mozi franchise jegyfoglaló app",
        delayAnimation: "100",
      },
            {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 400,
        height: 550,
        title: "Chatting App Design",
        subTitle: "Codecanyon Market",
        alterText: "Chatting App Design",
        delayAnimation: "200",
        portfolioLink:
          "https://www.behance.net/gallery/128278341/Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
      },
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 1000,
        height: 1000,
        title: "Foodtracker",
        subTitle: "Kalória számláló app",
        delayAnimation: "300",
      },
      {
        img: "/img/portfolio/m-portfolio-10.jpg",
        width: 874,
        height: 1200,
        title: "Flexovit",
        subTitle: "Flexovit B2B és B2C újságok, flyerek",
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/m-portfolio-11.jpg",
        width: 686,
        height: 1200,
        title: "OpenAir fesztivál Eger",
        subTitle: "OpenAir fesztivál plakát",
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/m-portfolio-14.jpg",
        width: 874,
        height: 1200,
        title: "Barack és Szilva étterem",
        subTitle: "Arculati elemek",
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/m-portfolio-12.jpg",
        width: 1000,
        height: 1000,
        title: "Zuzmó kert",
        subTitle: "Itallap",
        delayAnimation: "200",
      },
      {
        img: "/img/portfolio/m-portfolio-13.jpg",
        width: 1000,
        height: 1000,
        title: "Flexovit",
        subTitle: "Teljes üzlet front dekor",
        delayAnimation: "300",
      },
      
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-1.jpg",
        width: 874,
        height: 1200,
        title: "LANEA",
        subTitle: "B2B és B2C landing oldal",
        delayAnimation: "",
        portfolioLink:
          "https://lanea.hu",
      },
      {
        img: "/img/portfolio/m-portfolio-3.jpg",
        width: 686,
        height: 1200,
        title: "Technetic Services",
        subTitle: "Marketing landing oldal",
        delayAnimation: "200",
        portfolioLink:
          "https://technetic.hu",
      },
      {
        img: "/img/portfolio/m-portfolio-8.jpg",
        width: 874,
        height: 1200,
        title: "MyOrder",
        subTitle: "B2B web app",
        delayAnimation: "200",
      },
      {
        img: "/img/portfolio/m-portfolio-4.jpg",
        width: 1200,
        height: 1200,
        title: "LANEA",
        subTitle: "Lanea házépítés segítő webapp",
        delayAnimation: "300",
        portfolioLink:
          "https://auth.lanea.hu/realms/lanea-customer/login-actions/authenticate?client_id=lanea-customer&tab_id=sfGEmGz1y7Q&client_data=eyJydSI6Imh0dHBzOi8vYXBwLmN1c3RvbWVyLmxhbmVhLmh1L2FwaS9hdXRoL2tleWNsb2FrIiwicnQiOiJjb2RlIn0",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-2.jpg",
        width: 1000,
        height: 1000,
        title: "Foodtracker",
        subTitle: "Kalória számláló app",
        delayAnimation: "",
      },

      {
        img: "/img/portfolio/m-portfolio-5.jpg",
        width: 686,
        height: 1200,
        title: "LANEA",
        subTitle: "Lanea teljeskörű házépítést segító app",
        delayAnimation: "100",
        portfolioLink:
          "https://apps.apple.com/hu/app/lane-a/id6569241052?l=hu",
      },
      {
        img: "/img/portfolio/m-portfolio-6.jpg",
        width: 874,
        height: 1200,
        title: "Cinemaximum",
        subTitle: "Török mozi franchise jegyfoglaló app",
        delayAnimation: "200",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/m-portfolio-10.jpg",
        width: 874,
        height: 1200,
        title: "Flexovit",
        subTitle: "Flexovit B2B és B2C újságok, flyerek",
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/m-portfolio-11.jpg",
        width: 686,
        height: 1200,
        title: "OpenAir fesztivál Eger",
        subTitle: "OpenAir fesztivál plakát",
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/m-portfolio-12.jpg",
        width: 1000,
        height: 1000,
        title: "Zuzmó kert",
        subTitle: "Itallap",
        delayAnimation: "200",
      },
      {
        img: "/img/portfolio/m-portfolio-13.jpg",
        width: 1000,
        height: 1000,
        title: "Flexovit",
        subTitle: "Teljes üzlet front dekor",
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/m-portfolio-14.jpg",
        width: 874,
        height: 1200,
        title: "Barack és Szilva étterem",
        subTitle: "Arculati elemek",
        delayAnimation: "100",
      },
    ],
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
