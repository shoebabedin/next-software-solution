import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const LogoSlider = () => {
  const [ImgSlider, setImgSlider] = useState();

  useEffect(() => {
    fetch("/assets/Data/LogoSlider.json")
      .then((res) => res.json())
      .then((ImgSlider) => setImgSlider(ImgSlider));
  }, []);


  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    centerMode: true,
    centerPadding: "20px",
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
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
    <div className="logo_slider_part py-2 py-lg-5">
      <Container>
        <Row>
          <Col lg={12} className="">
            <Slider {...settings} className="logo_slider">
              {ImgSlider?.length > 0 &&
                ImgSlider?.map((item, index) => {
                  return (
                    <div key={index} className="slider_item">
                      <Image
                        src={item.img}
                        alt={item.img}
                        width={100}
                        height={100}
                      />
                    </div>
                  );
                })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LogoSlider;
