import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="car_parking py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12">
            <h1 className="text-primary mb-3 subtitle-2 text-center text-lg-start">
              Clinis Requirements
            </h1>

            <p className="icon text-center text-lg-start">
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
            <div className="btn_part mt-5">
              <div className="icon">
                <svg
                  width="28"
                  height="31"
                  viewBox="0 0 28 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.99923 1.0611C2.55683 1.15784 1.95381 1.39523 1.95515 1.47203C1.95638 1.54314 15.4062 14.0381 15.4881 14.0442C15.5203 14.0466 16.5662 13.0238 17.8123 11.7713L20.0779 9.49396L12.8726 5.49733C8.9097 3.29918 5.49864 1.42137 5.29252 1.32446C4.59178 0.994912 3.74589 0.897765 2.99923 1.0611ZM0.324095 3.14276C-0.0161532 3.90463 0.000124122 3.25972 0.000124122 15.9833C0.000124122 28.6669 -0.0142863 28.0785 0.31371 28.7986C0.393288 28.9732 0.479517 29.116 0.505421 29.116C0.531324 29.116 3.6194 26.034 7.36785 22.267L14.1832 15.418L7.37158 9.10496C3.62524 5.63282 0.542176 2.79193 0.520356 2.79193C0.498595 2.79193 0.410265 2.94981 0.324095 3.14276ZM19.2998 12.92L16.8697 15.3677L19.0375 17.3709C20.2298 18.4727 21.5793 19.7213 22.0364 20.1457L22.8677 20.9172L24.4868 20.0229C25.3773 19.5311 26.2517 19.0303 26.4299 18.9101C27.3772 18.271 28 17.11 28 15.9833C28 14.8551 27.3549 13.6596 26.4086 13.0343C26.0246 12.7807 21.8587 10.4722 21.7849 10.4722C21.7546 10.4722 20.6363 11.5737 19.2998 12.92ZM8.68934 23.5785C3.24893 29.0468 1.85387 30.4788 1.92335 30.5237C2.08047 30.6254 2.76225 30.8646 3.07846 30.9291C3.76304 31.0687 4.73437 30.9316 5.38044 30.6042C5.81252 30.3853 21.0196 21.9565 21.0794 21.9028C21.1177 21.8684 18.9021 19.781 15.6903 16.8255L15.5429 16.6899L8.68934 23.5785Z"
                    fill="#181818"
                  />
                </svg>
              </div>
              <div className="query">
                <p>downlode now</p>
                <h5>Play Store</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="img my-5">
              <Image
                src="/assets/images/case-study-details/car-parking.webp"
                className="img-fluid float-end"
                alt=""
                width={320}
                height={394}
                // layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
