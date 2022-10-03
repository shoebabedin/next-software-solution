import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const Navbar = () => {
  const asPath = useRouter();
  const page = asPath.route;
  const [stickyNav, setStickyNav] = useState(false);



  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  return (
    <section id="navbar" className={`${stickyNav ? "sticky" : ""}`}>
      <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand mx-auto">
              <Image
                className="d-block"
                src="/assets/images/logo/headerLogo.png"
                alt=""
                width={163}
                height={34}
              />
            </a>
          </Link>
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="none"
              viewBox="0 0 25 24"
            >
              <path
                stroke="#1A64EE"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3.918 6.375h16.5M3.918 11.625h12M3.918 16.875h16.5"
              ></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-4 mob">
              <li className="nav-item">
                <Link href="/">
                  <a className={`${page === '/' ? 'active' : ''} nav-link`} aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="about">
                  <a className={`${page === '/about' ? 'active' : ''} nav-link`}>About Us</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link href="/">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Service
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#181818"
                        d="M13.463 5.806A.5.5 0 0013 5.5H3a.5.5 0 00-.462.306.525.525 0 00.106.55l5 5a.512.512 0 00.713 0l5-5a.525.525 0 00.106-.55z"
                      ></path>
                    </svg>
                  </a>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="arrow"></div>
                  <li>
                    <Link href="/app-development">
                      <a className={`${page === '/app-development' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M16.5 1.5h-9a2.26 2.26 0 00-2.25 2.25v16.5A2.26 2.26 0 007.5 22.5h9a2.26 2.26 0 002.25-2.25V3.75A2.26 2.26 0 0016.5 1.5zM7.5 3h9a.75.75 0 01.75.75v.75H6.75v-.75A.75.75 0 017.5 3zm9 18h-9a.75.75 0 01-.75-.75v-.75h10.5v.75a.75.75 0 01-.75.75z"
                            ></path>
                          </svg>
                        </span>
                        App Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-development">
                      <a className={`${page === '/web-development' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M19.5 3.75h-15A2.26 2.26 0 002.25 6v10.5a2.26 2.26 0 002.25 2.25h6.75v1.5H9a.75.75 0 100 1.5h6a.75.75 0 100-1.5h-2.25v-1.5h6.75a2.26 2.26 0 002.25-2.25V6a2.26 2.26 0 00-2.25-2.25zm0 13.5h-15a.75.75 0 01-.75-.75V15h16.5v1.5a.75.75 0 01-.75.75z"
                            ></path>
                          </svg>
                        </span>
                        Web Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/ecommerce-development">
                      <a className={`${page === '/ecommerce-development' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M20.99 6.131l-1.143 6.272a2.25 2.25 0 01-2.213 1.847H6.76l.413 2.25H17.25A2.25 2.25 0 1115 18.75c0-.256.044-.51.131-.75H9.62a2.25 2.25 0 11-3.825-.712L3.197 3H1.5a.75.75 0 010-1.5h1.697a1.5 1.5 0 011.472 1.228l.46 2.522H20.25a.74.74 0 01.572.272.722.722 0 01.169.61z"
                            ></path>
                          </svg>
                        </span>
                        Ecommerce Development
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/game-development">
                      <a className={`${page === '/game-development' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M23.203 17.035h-.009l-1.528-7.922c0-.01 0-.01-.01-.018a5.625 5.625 0 00-5.53-4.622l-8.25.028a5.616 5.616 0 00-5.541 4.65v.019L.807 17.026a3.366 3.366 0 002.737 3.91c.192.037.386.056.581.055a3.413 3.413 0 002.391-.984l.037-.047 3.816-4.219 3.272-.018 3.806 4.246.047.047c.632.63 1.489.985 2.381.985.199 0 .396-.02.591-.056a3.384 3.384 0 002.737-3.91zM9.75 10.875H9v.75a.75.75 0 11-1.5 0v-.75h-.75a.75.75 0 110-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5zm3.75-.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm6.703 9.348a1.883 1.883 0 01-1.64-.507l-2.916-3.234h.478a5.624 5.624 0 004.782-2.653l.815 4.237a1.875 1.875 0 01-1.519 2.157z"
                            ></path>
                          </svg>
                        </span>
                        Game Development
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link href="/">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hire Developer
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#181818"
                        d="M13.463 5.806A.5.5 0 0013 5.5H3a.5.5 0 00-.462.306.525.525 0 00.106.55l5 5a.512.512 0 00.713 0l5-5a.525.525 0 00.106-.55z"
                      ></path>
                    </svg>
                  </a>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="arrow"></div>
                  <li>
                    <Link href="/app-developer">
                      <a className={`${page === '/app-developer' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M16.5 1.5h-9a2.26 2.26 0 00-2.25 2.25v16.5A2.26 2.26 0 007.5 22.5h9a2.26 2.26 0 002.25-2.25V3.75A2.26 2.26 0 0016.5 1.5zM7.5 3h9a.75.75 0 01.75.75v.75H6.75v-.75A.75.75 0 017.5 3zm9 18h-9a.75.75 0 01-.75-.75v-.75h10.5v.75a.75.75 0 01-.75.75z"
                            ></path>
                          </svg>
                        </span>
                        App Developer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={`${page === '' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M19.5 3.75h-15A2.26 2.26 0 002.25 6v10.5a2.26 2.26 0 002.25 2.25h6.75v1.5H9a.75.75 0 100 1.5h6a.75.75 0 100-1.5h-2.25v-1.5h6.75a2.26 2.26 0 002.25-2.25V6a2.26 2.26 0 00-2.25-2.25zm0 13.5h-15a.75.75 0 01-.75-.75V15h16.5v1.5a.75.75 0 01-.75.75z"
                            ></path>
                          </svg>
                        </span>
                        Web Developer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={`${page === '' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.25 4.5C11.25 4.08579 11.5858 3.75 12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5ZM8.56203 3H1.5C0.671573 3 0 3.67157 0 4.5C0 5.32843 0.671573 6 1.5 6H4.96292C4.90719 6.05802 4.85213 6.11678 4.79775 6.17626C3.81622 7.25 3.09034 8.52601 2.66782 9.90851C1.12434 10.3729 0 11.8052 0 13.5C0 15.5711 1.67893 17.25 3.75 17.25C5.82107 17.25 7.5 15.5711 7.5 13.5C7.5 12.1455 6.78192 10.9588 5.70569 10.2997C6.00705 9.52891 6.44875 8.81655 7.01202 8.20036C7.57252 7.58721 8.23864 7.08541 8.97502 6.71673C9.65749 7.64646 10.7583 8.25 12 8.25C13.2416 8.25 14.3424 7.64655 15.0248 6.71693C15.7611 7.08558 16.4271 7.58731 16.9875 8.20036C17.5508 8.81662 17.9925 9.52907 18.2939 10.3C17.2179 10.9591 16.5 12.1457 16.5 13.5C16.5 15.5711 18.1789 17.25 20.25 17.25C22.3211 17.25 24 15.5711 24 13.5C24 11.805 22.8754 10.3726 21.3316 9.90834C20.9091 8.5259 20.1832 7.24996 19.2017 6.17626C19.1474 6.11678 19.0923 6.05802 19.0366 6H22.5C23.3284 6 24 5.32843 24 4.5C24 3.67157 23.3284 3 22.5 3H15.438C14.8593 1.67557 13.5377 0.75 12 0.75C10.4623 0.75 9.1407 1.67557 8.56203 3ZM3.75 12.75C3.33579 12.75 3 13.0858 3 13.5C3 13.9142 3.33579 14.25 3.75 14.25C4.16421 14.25 4.5 13.9142 4.5 13.5C4.5 13.0858 4.16421 12.75 3.75 12.75ZM19.5 13.5C19.5 13.0858 19.8358 12.75 20.25 12.75C20.6642 12.75 21 13.0858 21 13.5C21 13.9142 20.6642 14.25 20.25 14.25C19.8358 14.25 19.5 13.9142 19.5 13.5Z"
                              fill="#7C7B7B"
                            />
                          </svg>
                        </span>
                        UI/UX Designer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={`${page === '' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M23.203 17.035h-.009l-1.528-7.922c0-.01 0-.01-.01-.018a5.625 5.625 0 00-5.53-4.622l-8.25.028a5.616 5.616 0 00-5.541 4.65v.019L.807 17.026a3.366 3.366 0 002.737 3.91c.192.037.386.056.581.055a3.413 3.413 0 002.391-.984l.037-.047 3.816-4.219 3.272-.018 3.806 4.246.047.047c.632.63 1.489.985 2.381.985.199 0 .396-.02.591-.056a3.384 3.384 0 002.737-3.91zM9.75 10.875H9v.75a.75.75 0 11-1.5 0v-.75h-.75a.75.75 0 110-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5zm3.75-.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm6.703 9.348a1.883 1.883 0 01-1.64-.507l-2.916-3.234h.478a5.624 5.624 0 004.782-2.653l.815 4.237a1.875 1.875 0 01-1.519 2.157z"
                            ></path>
                          </svg>
                        </span>
                        Game Developer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={`${page === '' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#7C7B7B"
                              d="M23.203 17.035h-.009l-1.528-7.922c0-.01 0-.01-.01-.018a5.625 5.625 0 00-5.53-4.622l-8.25.028a5.616 5.616 0 00-5.541 4.65v.019L.807 17.026a3.366 3.366 0 002.737 3.91c.192.037.386.056.581.055a3.413 3.413 0 002.391-.984l.037-.047 3.816-4.219 3.272-.018 3.806 4.246.047.047c.632.63 1.489.985 2.381.985.199 0 .396-.02.591-.056a3.384 3.384 0 002.737-3.91zM9.75 10.875H9v.75a.75.75 0 11-1.5 0v-.75h-.75a.75.75 0 110-1.5h.75v-.75a.75.75 0 011.5 0v.75h.75a.75.75 0 010 1.5zm3.75-.75a.75.75 0 01.75-.75h3a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75zm6.703 9.348a1.883 1.883 0 01-1.64-.507l-2.916-3.234h.478a5.624 5.624 0 004.782-2.653l.815 4.237a1.875 1.875 0 01-1.519 2.157z"
                            ></path>
                          </svg>
                        </span>
                        Game Developer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={`${page === '' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.4101 4.26302C16.6932 3.48447 16.2916 2.62383 15.513 2.34072C14.7345 2.05761 13.8738 2.45924 13.5907 3.23779L7.59072 19.7378C7.30761 20.5163 7.70924 21.377 8.48779 21.6601C9.26634 21.9432 10.127 21.5416 10.4101 20.763L16.4101 4.26302ZM7.15233 7.28976C7.68268 7.92618 7.59669 8.87202 6.96028 9.40237L3.84307 12L6.96028 14.5977C7.59669 15.1281 7.68268 16.0739 7.15233 16.7103C6.62199 17.3467 5.67614 17.4327 5.03972 16.9024L0.539723 13.1524C0.197734 12.8674 0 12.4452 0 12C0 11.5549 0.197734 11.1327 0.539723 10.8477L5.03972 7.09771C5.67614 6.56736 6.62199 6.65335 7.15233 7.28976ZM16.8477 7.28976C17.3781 6.65335 18.3239 6.56736 18.9603 7.09771L23.4603 10.8477C23.8023 11.1327 24 11.5549 24 12C24 12.4452 23.8023 12.8674 23.4603 13.1524L18.9603 16.9024C18.3239 17.4327 17.3781 17.3467 16.8477 16.7103C16.3174 16.0739 16.4033 15.1281 17.0398 14.5977L20.157 12L17.0398 9.40237C16.4033 8.87202 16.3174 7.92618 16.8477 7.28976Z"
                              fill="#7C7B7B"
                            />
                          </svg>
                        </span>
                        Full Stack Developer
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className={`${page === '' ? 'active' : ''} dropdown-item`}>
                        <span>
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.25 4.5C11.25 4.08579 11.5858 3.75 12 3.75C12.4142 3.75 12.75 4.08579 12.75 4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5ZM8.56203 3H1.5C0.671573 3 0 3.67157 0 4.5C0 5.32843 0.671573 6 1.5 6H4.96292C4.90719 6.05802 4.85213 6.11678 4.79775 6.17626C3.81622 7.25 3.09034 8.52601 2.66782 9.90851C1.12434 10.3729 0 11.8052 0 13.5C0 15.5711 1.67893 17.25 3.75 17.25C5.82107 17.25 7.5 15.5711 7.5 13.5C7.5 12.1455 6.78192 10.9588 5.70569 10.2997C6.00705 9.52891 6.44875 8.81655 7.01202 8.20036C7.57252 7.58721 8.23864 7.08541 8.97502 6.71673C9.65749 7.64646 10.7583 8.25 12 8.25C13.2416 8.25 14.3424 7.64655 15.0248 6.71693C15.7611 7.08558 16.4271 7.58731 16.9875 8.20036C17.5508 8.81662 17.9925 9.52907 18.2939 10.3C17.2179 10.9591 16.5 12.1457 16.5 13.5C16.5 15.5711 18.1789 17.25 20.25 17.25C22.3211 17.25 24 15.5711 24 13.5C24 11.805 22.8754 10.3726 21.3316 9.90834C20.9091 8.5259 20.1832 7.24996 19.2017 6.17626C19.1474 6.11678 19.0923 6.05802 19.0366 6H22.5C23.3284 6 24 5.32843 24 4.5C24 3.67157 23.3284 3 22.5 3H15.438C14.8593 1.67557 13.5377 0.75 12 0.75C10.4623 0.75 9.1407 1.67557 8.56203 3ZM3.75 12.75C3.33579 12.75 3 13.0858 3 13.5C3 13.9142 3.33579 14.25 3.75 14.25C4.16421 14.25 4.5 13.9142 4.5 13.5C4.5 13.0858 4.16421 12.75 3.75 12.75ZM19.5 13.5C19.5 13.0858 19.8358 12.75 20.25 12.75C20.6642 12.75 21 13.0858 21 13.5C21 13.9142 20.6642 14.25 20.25 14.25C19.8358 14.25 19.5 13.9142 19.5 13.5Z"
                              fill="#7C7B7B"
                            />
                          </svg>
                        </span>
                        UI/UX Designer
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="case-study">
                  <a className={`${page === '/case-study' ? 'active' : ''} nav-link`}>Case Study</a>
                </Link>
              </li>
              <li className="nav-item d-lg-none">
                <Link href="contact-us">
                  <a className={`${page === '/contact-us' ? 'active' : ''} nav-link`}>Contact US</a>
                </Link>
              </li>
            </ul>
            <div className="social-icon d-lg-none d-flex align-items-center justify-content-center flex-column mt-5">
              <p>Share</p>
              <ul className="d-flex align-items-center justify-content-center gap-3">
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#181818"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6.875c0-1.718 1.445-3.148 3.164-3.125a3.125 3.125 0 012.828 1.875h2.757L16.226 8.15A9.992 9.992 0 016.249 17.5c-2.5 0-3.125-.937-3.125-.937s2.5-.938 3.75-2.813c0 0-5-2.5-3.75-9.375 0 0 3.125 3.125 6.875 3.75v-1.25z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#181818"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 13.125a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
                      ></path>
                      <path
                        stroke="#181818"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.438 2.813H6.561a3.75 3.75 0 00-3.75 3.75v6.875a3.75 3.75 0 003.75 3.75h6.875a3.75 3.75 0 003.75-3.75V6.561a3.75 3.75 0 00-3.75-3.75z"
                      ></path>
                      <path
                        fill="#181818"
                        d="M14.063 6.719a.781.781 0 100-1.563.781.781 0 000 1.563z"
                      ></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="#181818"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.563 2.813H3.438a.625.625 0 00-.626.624v13.126c0 .345.28.625.626.625h13.124c.346 0 .625-.28.625-.625V3.438a.625.625 0 00-.625-.626z"
                      ></path>
                      <path
                        stroke="#181818"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.375 8.75v5"
                      ></path>
                      <path
                        stroke="#181818"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.875 8.75v5M9.375 10.938a2.187 2.187 0 114.375 0v2.812"
                      ></path>
                      <path
                        fill="#181818"
                        d="M6.875 7.031a.781.781 0 100-1.562.781.781 0 000 1.562z"
                      ></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>

            <Link href="/contact-us">
              <Button
                variant="primary"
                className="d-none d-lg-block shadow-none text-light"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
