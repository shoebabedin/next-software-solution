import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import ParkingSlider from "../../assets/Data/CaseStudyDetailsSlider.json";

const CarParkingApp = () => {
const [parkingSlider, setParkingSlider] = useState();

useEffect(() => {
  fetch("/assets/Data/CaseStudyDetailsSlider.json")
    .then((res) => res.json())
    .then((parkingSlider) => setParkingSlider(parkingSlider));
}, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="car_parking_app py-2 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="top_logo text-center">
              <Image src="/assets/images/case-study-details/top-logo.webp" width={91} height={126} alt="" />
            </div>
            <h2
              style={{ opacity: "0.4" }}
              className="text-primary text-4 text-center"
            >
              Case Study
            </h2>
            <h1 className="text-primary mb-3 text-center">Car Parking app</h1>
            <p className="icon text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet et
              consectetur amet, rhoncus. Morbi tincidunt habitant condimentum
              integer praesent donec vitae odio natoque. Diam velit vel
              adipiscing eleifend sit vitae semper. Adipiscing scelerisque nunc
              id augue consequat, faucibus pretium viverra fermentum. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Amet et
              consectetur amet, rhoncus. Morbi tincidunt habitant condimentum
              integer praesent donec vitae odio natoque. Diam velit vel
              adipiscing eleifend sit vitae semper. Adipiscing scelerisque nunc
              id augue consequat, faucibus pretium viverra fermentum.
            </p>

            <Slider {...settings} className="car_parking_slider my-5">
              {parkingSlider?.length > 0 &&
              parkingSlider?.map((item, index) => (
                <div key={index} className="car_parking_slider_item">
                  <Image
                    src={`/assets/images/case-study-details/${item.img}`}
                    alt=""
                    width={164}
                    height={349}
                  />
                </div>
              ))}
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarParkingApp;
