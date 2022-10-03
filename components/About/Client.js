import React from 'react';
import Slider from 'react-slick';

const Client = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className="client_part py-3 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="text-primary text-center mb-3">
                  What Our Clints Say about Us
                </h2>
                <p className="subtitle-1-n text-teritiary text-center">
                  These are the stories of our customers who have joined us with
                  great pleasure when using this crazy feature.
                </p>

                <Slider {...settings} className="client_part_slider">
                  <div className="client_slider_item">
                    <div
                      className="client_header d-flex align-items-baseline justify-content-between mb-4"
                    >
                      <div className="title">
                        <p className="mb-0">Viezh Robert</p>
                        <span>Warsaw, Poland</span>
                      </div>
                      <div
                        className="rating d-flex align-items-center justify-content-between gap-2"
                      >
                        <p className="mb-0">4.5</p>
                        <div className="rating_icon">
                          <svg
                            className="align-baseline"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1887 4.51641L9.22154 3.93985L7.4481 0.344537C7.39966 0.2461 7.31998 0.166412 7.22154 0.117975C6.97466 -0.00390047 6.67466 0.097662 6.55123 0.344537L4.77779 3.93985L0.810601 4.51641C0.701226 4.53204 0.601226 4.5836 0.524663 4.66172C0.432103 4.75686 0.381099 4.88485 0.382856 5.01757C0.384614 5.15029 0.438991 5.27689 0.534038 5.36954L3.40435 8.16797L2.72623 12.1195C2.71032 12.2115 2.7205 12.306 2.75559 12.3924C2.79068 12.4789 2.84929 12.5537 2.92477 12.6086C3.00025 12.6634 3.08958 12.696 3.18263 12.7026C3.27568 12.7092 3.36873 12.6897 3.45123 12.6461L6.99966 10.7805L10.5481 12.6461C10.645 12.6977 10.7575 12.7148 10.8653 12.6961C11.1372 12.6492 11.32 12.3914 11.2731 12.1195L10.595 8.16797L13.4653 5.36954C13.5434 5.29297 13.595 5.19297 13.6106 5.0836C13.6528 4.81016 13.4622 4.55704 13.1887 4.51641Z"
                              fill="#FFE600"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="client_content">
                      <p>
                        “Wow... I am very happy to use this VPN, it turned out
                        to be more than my expectations and so far there have
                        been no problems. LaslesVPN always the best”.
                      </p>
                    </div>
                  </div>
                  <div className="client_slider_item">
                    <div
                      className="client_header d-flex align-items-baseline justify-content-between mb-4"
                    >
                      <div className="title">
                        <p className="mb-0">Viezh Robert</p>
                        <span>Warsaw, Poland</span>
                      </div>
                      <div
                        className="rating d-flex align-items-center justify-content-between gap-2"
                      >
                        <p className="mb-0">4.5</p>
                        <div className="rating_icon">
                          <svg
                            className="align-baseline"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1887 4.51641L9.22154 3.93985L7.4481 0.344537C7.39966 0.2461 7.31998 0.166412 7.22154 0.117975C6.97466 -0.00390047 6.67466 0.097662 6.55123 0.344537L4.77779 3.93985L0.810601 4.51641C0.701226 4.53204 0.601226 4.5836 0.524663 4.66172C0.432103 4.75686 0.381099 4.88485 0.382856 5.01757C0.384614 5.15029 0.438991 5.27689 0.534038 5.36954L3.40435 8.16797L2.72623 12.1195C2.71032 12.2115 2.7205 12.306 2.75559 12.3924C2.79068 12.4789 2.84929 12.5537 2.92477 12.6086C3.00025 12.6634 3.08958 12.696 3.18263 12.7026C3.27568 12.7092 3.36873 12.6897 3.45123 12.6461L6.99966 10.7805L10.5481 12.6461C10.645 12.6977 10.7575 12.7148 10.8653 12.6961C11.1372 12.6492 11.32 12.3914 11.2731 12.1195L10.595 8.16797L13.4653 5.36954C13.5434 5.29297 13.595 5.19297 13.6106 5.0836C13.6528 4.81016 13.4622 4.55704 13.1887 4.51641Z"
                              fill="#FFE600"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="client_content">
                      <p>
                        “Wow... I am very happy to use this VPN, it turned out
                        to be more than my expectations and so far there have
                        been no problems. LaslesVPN always the best”.
                      </p>
                    </div>
                  </div>
                  <div className="client_slider_item">
                    <div
                      className="client_header d-flex align-items-baseline justify-content-between mb-4"
                    >
                      <div className="title">
                        <p className="mb-0">Viezh Robert</p>
                        <span>Warsaw, Poland</span>
                      </div>
                      <div
                        className="rating d-flex align-items-center justify-content-between gap-2"
                      >
                        <p className="mb-0">4.5</p>
                        <div className="rating_icon">
                          <svg
                            className="align-baseline"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1887 4.51641L9.22154 3.93985L7.4481 0.344537C7.39966 0.2461 7.31998 0.166412 7.22154 0.117975C6.97466 -0.00390047 6.67466 0.097662 6.55123 0.344537L4.77779 3.93985L0.810601 4.51641C0.701226 4.53204 0.601226 4.5836 0.524663 4.66172C0.432103 4.75686 0.381099 4.88485 0.382856 5.01757C0.384614 5.15029 0.438991 5.27689 0.534038 5.36954L3.40435 8.16797L2.72623 12.1195C2.71032 12.2115 2.7205 12.306 2.75559 12.3924C2.79068 12.4789 2.84929 12.5537 2.92477 12.6086C3.00025 12.6634 3.08958 12.696 3.18263 12.7026C3.27568 12.7092 3.36873 12.6897 3.45123 12.6461L6.99966 10.7805L10.5481 12.6461C10.645 12.6977 10.7575 12.7148 10.8653 12.6961C11.1372 12.6492 11.32 12.3914 11.2731 12.1195L10.595 8.16797L13.4653 5.36954C13.5434 5.29297 13.595 5.19297 13.6106 5.0836C13.6528 4.81016 13.4622 4.55704 13.1887 4.51641Z"
                              fill="#FFE600"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="client_content">
                      <p>
                        “Wow... I am very happy to use this VPN, it turned out
                        to be more than my expectations and so far there have
                        been no problems. LaslesVPN always the best”.
                      </p>
                    </div>
                  </div>
                  <div className="client_slider_item">
                    <div
                      className="client_header d-flex align-items-baseline justify-content-between mb-4"
                    >
                      <div className="title">
                        <p className="mb-0">Viezh Robert</p>
                        <span>Warsaw, Poland</span>
                      </div>
                      <div
                        className="rating d-flex align-items-center justify-content-between gap-2"
                      >
                        <p className="mb-0">4.5</p>
                        <div className="rating_icon">
                          <svg
                            className="align-baseline"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1887 4.51641L9.22154 3.93985L7.4481 0.344537C7.39966 0.2461 7.31998 0.166412 7.22154 0.117975C6.97466 -0.00390047 6.67466 0.097662 6.55123 0.344537L4.77779 3.93985L0.810601 4.51641C0.701226 4.53204 0.601226 4.5836 0.524663 4.66172C0.432103 4.75686 0.381099 4.88485 0.382856 5.01757C0.384614 5.15029 0.438991 5.27689 0.534038 5.36954L3.40435 8.16797L2.72623 12.1195C2.71032 12.2115 2.7205 12.306 2.75559 12.3924C2.79068 12.4789 2.84929 12.5537 2.92477 12.6086C3.00025 12.6634 3.08958 12.696 3.18263 12.7026C3.27568 12.7092 3.36873 12.6897 3.45123 12.6461L6.99966 10.7805L10.5481 12.6461C10.645 12.6977 10.7575 12.7148 10.8653 12.6961C11.1372 12.6492 11.32 12.3914 11.2731 12.1195L10.595 8.16797L13.4653 5.36954C13.5434 5.29297 13.595 5.19297 13.6106 5.0836C13.6528 4.81016 13.4622 4.55704 13.1887 4.51641Z"
                              fill="#FFE600"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="client_content">
                      <p>
                        “Wow... I am very happy to use this VPN, it turned out
                        to be more than my expectations and so far there have
                        been no problems. LaslesVPN always the best”.
                      </p>
                    </div>
                  </div>
                  <div className="client_slider_item">
                    <div
                      className="client_header d-flex align-items-baseline justify-content-between mb-4"
                    >
                      <div className="title">
                        <p className="mb-0">Viezh Robert</p>
                        <span>Warsaw, Poland</span>
                      </div>
                      <div
                        className="rating d-flex align-items-center justify-content-between gap-2"
                      >
                        <p className="mb-0">4.5</p>
                        <div className="rating_icon">
                          <svg
                            className="align-baseline"
                            width="14"
                            height="13"
                            viewBox="0 0 14 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.1887 4.51641L9.22154 3.93985L7.4481 0.344537C7.39966 0.2461 7.31998 0.166412 7.22154 0.117975C6.97466 -0.00390047 6.67466 0.097662 6.55123 0.344537L4.77779 3.93985L0.810601 4.51641C0.701226 4.53204 0.601226 4.5836 0.524663 4.66172C0.432103 4.75686 0.381099 4.88485 0.382856 5.01757C0.384614 5.15029 0.438991 5.27689 0.534038 5.36954L3.40435 8.16797L2.72623 12.1195C2.71032 12.2115 2.7205 12.306 2.75559 12.3924C2.79068 12.4789 2.84929 12.5537 2.92477 12.6086C3.00025 12.6634 3.08958 12.696 3.18263 12.7026C3.27568 12.7092 3.36873 12.6897 3.45123 12.6461L6.99966 10.7805L10.5481 12.6461C10.645 12.6977 10.7575 12.7148 10.8653 12.6961C11.1372 12.6492 11.32 12.3914 11.2731 12.1195L10.595 8.16797L13.4653 5.36954C13.5434 5.29297 13.595 5.19297 13.6106 5.0836C13.6528 4.81016 13.4622 4.55704 13.1887 4.51641Z"
                              fill="#FFE600"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="client_content">
                      <p>
                        “Wow... I am very happy to use this VPN, it turned out
                        to be more than my expectations and so far there have
                        been no problems. LaslesVPN always the best”.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Client;