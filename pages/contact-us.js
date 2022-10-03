import Image from "next/image";
import Link from "next/link";
import React from "react";


const ContactUs = () => {

  return (
    <>
      <div className="contact_us py-2 py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary mb-3 text-center">Contact us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_details py-2 py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="visitor mt-5">
                <div className="visitor_item text-center">
                  <div className="visitor_item_icon mb-3">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" fill="white" />
                      <path
                        opacity="0.5"
                        d="M10.5 43.5H37.5"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24 25.5C27.3137 25.5 30 22.8137 30 19.5C30 16.1863 27.3137 13.5 24 13.5C20.6863 13.5 18 16.1863 18 19.5C18 22.8137 20.6863 25.5 24 25.5Z"
                        fill="#1A64EE"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.5"
                        d="M39 19.5C39 33 24 43.5 24 43.5C24 43.5 9 33 9 19.5C9 15.5218 10.5804 11.7064 13.3934 8.8934C16.2064 6.08035 20.0218 4.5 24 4.5C27.9782 4.5 31.7936 6.08035 34.6066 8.8934C37.4196 11.7064 39 15.5218 39 19.5V19.5Z"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4>Location</h4>
                  <p>27/9 downstreet, NewYork, USA</p>
                </div>
                <div className="visitor_item text-center">
                  <div className="visitor_item_icon mb-3">
                    <svg
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="48"
                        height="48"
                        transform="translate(0.652344)"
                        fill="white"
                      />
                      <path
                        opacity="0.5"
                        d="M6.65234 10.5H42.6523V36C42.6523 36.3978 42.4943 36.7794 42.213 37.0607C41.9317 37.342 41.5502 37.5 41.1523 37.5H8.15234C7.75452 37.5 7.37299 37.342 7.09168 37.0607C6.81038 36.7794 6.65234 36.3978 6.65234 36V10.5Z"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M42.6523 10.5L24.6523 27L6.65234 10.5"
                        fill="#1A64EE"
                      />
                      <path
                        d="M42.6523 10.5L24.6523 27L6.65234 10.5"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4>Email</h4>
                  <p>
                    <Link href="mailto:companymai@gmail.com">
                      <a>companymai@gmail.com</a>
                    </Link>
                  </p>
                </div>
                <div className="visitor_item text-center">
                  <div className="visitor_item_icon mb-3">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="48" height="48" fill="white" />
                      <path
                        opacity="0.5"
                        d="M29.8867 7.5C32.431 8.18283 34.7509 9.52285 36.6136 11.3856C38.4764 13.2483 39.8164 15.5682 40.4992 18.1125"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.3437 23.3996C18.8873 26.5871 21.4648 29.158 24.6562 30.6933C24.8917 30.8048 25.1521 30.853 25.4118 30.8333C25.6715 30.8136 25.9216 30.7266 26.1375 30.5808L30.825 27.4496C31.0321 27.3091 31.2714 27.2234 31.5206 27.2004C31.7698 27.1775 32.0207 27.218 32.25 27.3183L41.025 31.0871C41.3249 31.2119 41.5755 31.4318 41.7381 31.713C41.9007 31.9943 41.9664 32.3211 41.925 32.6433C41.6469 34.8141 40.5873 36.8091 38.9446 38.2551C37.3018 39.7012 35.1885 40.4991 33 40.4996C26.237 40.4996 19.751 37.813 14.9688 33.0308C10.1866 28.2486 7.5 21.7626 7.5 14.9996C7.50049 12.8111 8.2984 10.6977 9.74442 9.05499C11.1904 7.41226 13.1855 6.3527 15.3562 6.07457C15.6784 6.03319 16.0053 6.09886 16.2865 6.26149C16.5677 6.42411 16.7877 6.67467 16.9125 6.97457L20.6812 15.7683C20.7793 15.994 20.8203 16.2403 20.8006 16.4855C20.781 16.7307 20.7014 16.9674 20.5687 17.1746L17.4375 21.9371C17.2981 22.1525 17.2163 22.4 17.1999 22.6561C17.1834 22.9121 17.233 23.1681 17.3437 23.3996V23.3996Z"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.5"
                        d="M27.9746 14.625C29.2425 15.0247 30.3953 15.7242 31.3354 16.6643C32.2754 17.6043 32.9749 18.7571 33.3746 20.025"
                        stroke="#1A64EE"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h4>Contact Number</h4>
                  <p>
                    <Link href="callto:3104372766">
                      <a>310-437-2766</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_form py-2 py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your email address..."
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" className="form-label">
                    Messages
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                    placeholder="Enter your messages..."
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-6 img">
              <Image
                className="img-fluid float-end"
                src="/assets/images/contact-us/map.webp"
                alt=""
                width={416}
                height={374}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
