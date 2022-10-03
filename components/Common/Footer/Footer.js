import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Footer = () => {
  const asPath = useRouter();
  const page = asPath.route;



  return (
    <section id="footer">
      {/* footer */}
      <div className="container">
        <div className="row py-4 py-lg-5 border-bottom text-center text-lg-start">
          <div className="col-12 col-lg-6">
            <div className="logo mb-3">
              <Image
                src="/assets/images/logo/footer-logo.png"
                alt=""
                width={163}
                height={33}
              />
            </div>
            <p className="text body-text">
              We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed <br className="d-none d-lg-block" />
              do eiusmod tempor incididun.
            </p>
            <div className="footer_contact">
              <div className="d-flex align-items-lg-center align-items-start mx-5 mx-lg-0 gap-5 flex-lg-row flex-column">
                <div className="contact d-flex align-items-lg-center gap-3">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="49"
                      fill="none"
                      viewBox="0 0 48 49"
                    >
                      <rect
                        width="48"
                        height="48"
                        y="0.581"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeMiterlimit="10"
                        strokeWidth="1.2"
                        d="M31.308 30.856c0 .3-.067.608-.208.908-.142.3-.325.584-.567.85-.408.45-.858.775-1.367.984-.5.208-1.041.316-1.625.316-.85 0-1.758-.2-2.716-.608a14.634 14.634 0 01-2.867-1.65 23.96 23.96 0 01-2.733-2.333 23.688 23.688 0 01-2.325-2.725c-.683-.95-1.233-1.9-1.633-2.842-.4-.95-.6-1.858-.6-2.725 0-.567.1-1.108.3-1.608.2-.509.516-.975.958-1.392.533-.525 1.116-.783 1.733-.783.233 0 .467.05.675.15.217.1.409.25.559.466l1.933 2.725c.15.209.258.4.333.584.075.175.117.35.117.508 0 .2-.058.4-.175.592a2.834 2.834 0 01-.467.591l-.633.659a.446.446 0 00-.134.333c0 .067.009.125.026.192.024.066.05.116.066.166.15.275.409.634.775 1.067.375.433.775.875 1.209 1.317.45.441.883.85 1.325 1.225.433.366.791.616 1.075.766.041.017.091.042.15.067a.575.575 0 00.208.033c.142 0 .25-.05.341-.141l.634-.625c.208-.209.408-.367.6-.467a1.11 1.11 0 01.591-.175c.159 0 .326.033.509.108s.375.184.583.325l2.759 1.959c.216.15.366.325.458.533.083.208.133.417.133.65z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                        d="M28.417 23.081c0-.5-.392-1.267-.975-1.892-.534-.575-1.242-1.025-1.942-1.025M31.333 23.08a5.829 5.829 0 00-5.833-5.832"
                      ></path>
                    </svg>
                  </div>
                  <div className="text">
                    <p className="text body-text-1 mb-0 text-start">
                      Have a question?
                    </p>
                    <p className="text-3 subtitle-1-b mb-0">
                      <a href="callto:3104372766">310-437-2766</a>
                    </p>
                  </div>
                </div>
                <div className="contact d-flex align-items-center gap-3">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="49"
                      fill="none"
                      viewBox="0 0 48 49"
                    >
                      <rect
                        width="48"
                        height="48"
                        y="0.581"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.2"
                        d="M28.166 31.664h-8.333c-2.5 0-4.166-1.25-4.166-4.166v-5.834c0-2.916 1.666-4.166 4.166-4.166h8.334c2.5 0 4.166 1.25 4.166 4.166v5.834c0 2.916-1.666 4.166-4.166 4.166z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="1.2"
                        d="M28.167 22.08l-2.609 2.084c-.858.683-2.266.683-3.125 0l-2.6-2.083"
                      ></path>
                    </svg>
                  </div>
                  <div className="text">
                    <p className="text body-text-1 mb-0 text-start">
                      Contact us at
                    </p>
                    <p className="text-3 subtitle-1-b mb-0">
                      <a href="mailto:unreal@outlook.com">unreal@outlook.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ps-lg-5 mt-5 mt-lg-0 text-start">
            <h2 className="text-light subtitle-2">Newsletter</h2>
            <p className="text body-text mb-5">
              Be the first one to know about discounts, offers and events weekly
              in your mailbox. Unsubscribe whenever you like with one click.
            </p>

            <div className="position-relative">
              <span className="position-absolute top-50 translate-middle-y start-25 d-inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="#9A9EA6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M11.333 13.666H4.667c-2 0-3.334-1-3.334-3.333V5.666c0-2.333 1.334-3.333 3.334-3.333h6.666c2 0 3.334 1 3.334 3.333v4.667c0 2.333-1.334 3.333-3.334 3.333z"
                  ></path>
                  <path
                    stroke="#9A9EA6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M11.333 6L9.247 7.667c-.687.546-1.814.546-2.5 0L4.667 6"
                  ></path>
                </svg>
              </span>
              <input
                className="newslatter-input w-100 border-0"
                type="email"
                placeholder="Enter your email"
              />
              <button
                style={{ borderRadius: "30px" }}
                className="position-absolute top-50 translate-middle-y end-6 py-1 py-lg-2 px-3 px-lg-5 bg-primary primary border-0 text-light"
                type="submit"
              >
                Submit
              </button>
            </div>

            <ul className="d-flex d-lg-none align-content-center gap-2 mt-4 justify-content-center">
              <li>
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        width="48"
                        height="48"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        d="M25.667 21.75v2.417h2.166c.167 0 .25.166.25.333l-.333 1.583c0 .084-.167.167-.25.167h-1.833v6.083h-2.5v-6H21.75c-.167 0-.25-.083-.25-.25V24.5c0-.167.083-.25.25-.25h1.417V21.5c0-1.417 1.083-2.5 2.5-2.5h2.25c.166 0 .25.083.25.25v2c0 .167-.084.25-.25.25h-2c-.167 0-.25.083-.25.25z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M26.5 32.333h-5c-4.167 0-5.834-1.666-5.834-5.833v-5c0-4.167 1.667-5.833 5.834-5.833h5c4.166 0 5.833 1.666 5.833 5.833v5c0 4.167-1.666 5.833-5.833 5.833z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        width="48"
                        height="48"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M28.166 30.667h-8.333c-2.5 0-4.166-1.667-4.166-4.167v-5c0-2.5 1.666-4.167 4.166-4.167h8.334c2.5 0 4.166 1.667 4.166 4.167v5c0 2.5-1.666 4.167-4.166 4.167z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M23.5 21.917l2.083 1.25c.75.5.75 1.25 0 1.75l-2.083 1.25c-.833.5-1.5.083-1.5-.834v-2.5c0-1.083.667-1.416 1.5-.916z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        width="48"
                        height="48"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M29.417 17.992a11.155 11.155 0 01-10.692 5.575l-2.642-.242M18.584 30.142a11.155 11.155 0 0110.691-5.575l2.642.241"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M24 32.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M20.358 16.5l2.65 3.292a19.13 19.13 0 013.7 7.5l1.009 4.158"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        width="48"
                        height="48"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeMiterlimit="10"
                        d="M24 15.667h-2.75c-1.584 0-2.834 1.25-2.834 2.75s1.25 2.75 2.75 2.75H24v-5.5zM24 21.25h-2.75c-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75H24v-5.5zM24 26.75h-2.75c-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75S24 31 24 29.5v-2.75zM24 15.667h2.75c1.5 0 2.75 1.25 2.75 2.75s-1.25 2.75-2.75 2.75H24v-5.5zM26.75 21.25c1.5 0 2.75 1.25 2.75 2.75s-1.25 2.75-2.75 2.75S24 25.5 24 24s1.25-2.75 2.75-2.75z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <rect
                        width="48"
                        height="48"
                        fill="#4475F2"
                        rx="24"
                      ></rect>
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M19.75 31.167A8.35 8.35 0 0024 32.333c4.583 0 8.333-3.75 8.333-8.333s-3.75-8.333-8.333-8.333c-4.584 0-8.334 3.75-8.334 8.333 0 1.5.417 2.917 1.084 4.167l-.643 2.472a1 1 0 001.242 1.214l2.4-.686z"
                      ></path>
                      <path
                        stroke="#fff"
                        strokeMiterlimit="10"
                        d="M27.75 26.374c0 .135-.03.274-.094.409a1.692 1.692 0 01-.871.825c-.226.093-.47.142-.733.142-.383 0-.792-.09-1.224-.274a6.603 6.603 0 01-1.292-.742 10.79 10.79 0 01-1.232-1.05 10.66 10.66 0 01-1.047-1.227 6.684 6.684 0 01-.737-1.278 3.154 3.154 0 01-.27-1.226c0-.255.045-.5.135-.724.09-.229.233-.439.432-.627.24-.236.503-.352.781-.352.105 0 .21.023.305.067a.612.612 0 01.251.21l.871 1.227c.068.093.117.18.15.262a.592.592 0 01.053.229c0 .09-.026.18-.079.266-.049.087-.12.177-.21.267l-.285.296a.2.2 0 00-.06.15c0 .03.003.056.01.086.012.03.023.053.03.075.068.124.185.285.35.48.17.195.35.394.545.593.203.198.398.382.597.55.195.166.357.278.484.346.02.007.042.018.068.03.03.011.06.015.094.015a.207.207 0 00.154-.064l.285-.281c.094-.094.184-.165.27-.21a.5.5 0 01.267-.079.6.6 0 01.23.049c.082.034.168.082.262.146l1.243.881a.57.57 0 01.207.24c.037.094.06.188.06.293z"
                      ></path>
                    </svg>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- Footer  --> */}
   
      {/* <!-- Tiny Footer  --> */}
      <div className="tiny_footer container">
        <div className="container pt-5 pb-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-center justify-content-center justify-content-lg-start">
                <ul className="d-block d-lg-flex align-items-center gap-5 mb-5 nav_link">
                  <li>
                    <Link href="about">
                      <a className={`${page === '/about' ? "active" : ""} text body-text`}>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text body-text">Press</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text body-text">FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="contact-us">
                      <a className={`${page === '/contact-us' ? "active" : ""} text body-text`}>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text body-text">Privacy policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text body-text">Sitemap</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="text body-text">Terms of Use</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12 d-flex align-items-center justify-content-lg-between justify-content-center">
              <ul className="d-none d-lg-flex align-content-center gap-2">
                <li>
                  <Link href="/">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          width="48"
                          height="48"
                          fill="#4475F2"
                          rx="24"
                        ></rect>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          d="M25.667 21.75v2.417h2.166c.167 0 .25.166.25.333l-.333 1.583c0 .084-.167.167-.25.167h-1.833v6.083h-2.5v-6H21.75c-.167 0-.25-.083-.25-.25V24.5c0-.167.083-.25.25-.25h1.417V21.5c0-1.417 1.083-2.5 2.5-2.5h2.25c.166 0 .25.083.25.25v2c0 .167-.084.25-.25.25h-2c-.167 0-.25.083-.25.25z"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M26.5 32.333h-5c-4.167 0-5.834-1.666-5.834-5.833v-5c0-4.167 1.667-5.833 5.834-5.833h5c4.166 0 5.833 1.666 5.833 5.833v5c0 4.167-1.666 5.833-5.833 5.833z"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          width="48"
                          height="48"
                          fill="#4475F2"
                          rx="24"
                        ></rect>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          d="M28.166 30.667h-8.333c-2.5 0-4.166-1.667-4.166-4.167v-5c0-2.5 1.666-4.167 4.166-4.167h8.334c2.5 0 4.166 1.667 4.166 4.167v5c0 2.5-1.666 4.167-4.166 4.167z"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          d="M23.5 21.917l2.083 1.25c.75.5.75 1.25 0 1.75l-2.083 1.25c-.833.5-1.5.083-1.5-.834v-2.5c0-1.083.667-1.416 1.5-.916z"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          width="48"
                          height="48"
                          fill="#4475F2"
                          rx="24"
                        ></rect>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          d="M29.417 17.992a11.155 11.155 0 01-10.692 5.575l-2.642-.242M18.584 30.142a11.155 11.155 0 0110.691-5.575l2.642.241"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          d="M24 32.333a8.333 8.333 0 100-16.666 8.333 8.333 0 000 16.666z"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          d="M20.358 16.5l2.65 3.292a19.13 19.13 0 013.7 7.5l1.009 4.158"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          width="48"
                          height="48"
                          fill="#4475F2"
                          rx="24"
                        ></rect>
                        <path
                          stroke="#fff"
                          strokeMiterlimit="10"
                          d="M24 15.667h-2.75c-1.584 0-2.834 1.25-2.834 2.75s1.25 2.75 2.75 2.75H24v-5.5zM24 21.25h-2.75c-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75H24v-5.5zM24 26.75h-2.75c-1.5 0-2.75 1.25-2.75 2.75s1.25 2.75 2.75 2.75S24 31 24 29.5v-2.75zM24 15.667h2.75c1.5 0 2.75 1.25 2.75 2.75s-1.25 2.75-2.75 2.75H24v-5.5zM26.75 21.25c1.5 0 2.75 1.25 2.75 2.75s-1.25 2.75-2.75 2.75S24 25.5 24 24s1.25-2.75 2.75-2.75z"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <rect
                          width="48"
                          height="48"
                          fill="#4475F2"
                          rx="24"
                        ></rect>
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeMiterlimit="10"
                          d="M19.75 31.167A8.35 8.35 0 0024 32.333c4.583 0 8.333-3.75 8.333-8.333s-3.75-8.333-8.333-8.333c-4.584 0-8.334 3.75-8.334 8.333 0 1.5.417 2.917 1.084 4.167l-.643 2.472a1 1 0 001.242 1.214l2.4-.686z"
                        ></path>
                        <path
                          stroke="#fff"
                          strokeMiterlimit="10"
                          d="M27.75 26.374c0 .135-.03.274-.094.409a1.692 1.692 0 01-.871.825c-.226.093-.47.142-.733.142-.383 0-.792-.09-1.224-.274a6.603 6.603 0 01-1.292-.742 10.79 10.79 0 01-1.232-1.05 10.66 10.66 0 01-1.047-1.227 6.684 6.684 0 01-.737-1.278 3.154 3.154 0 01-.27-1.226c0-.255.045-.5.135-.724.09-.229.233-.439.432-.627.24-.236.503-.352.781-.352.105 0 .21.023.305.067a.612.612 0 01.251.21l.871 1.227c.068.093.117.18.15.262a.592.592 0 01.053.229c0 .09-.026.18-.079.266-.049.087-.12.177-.21.267l-.285.296a.2.2 0 00-.06.15c0 .03.003.056.01.086.012.03.023.053.03.075.068.124.185.285.35.48.17.195.35.394.545.593.203.198.398.382.597.55.195.166.357.278.484.346.02.007.042.018.068.03.03.011.06.015.094.015a.207.207 0 00.154-.064l.285-.281c.094-.094.184-.165.27-.21a.5.5 0 01.267-.079.6.6 0 01.23.049c.082.034.168.082.262.146l1.243.881a.57.57 0 01.207.24c.037.094.06.188.06.293z"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
              <p className="body-text text">
                © 2000-{new Date().getFullYear()}, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
