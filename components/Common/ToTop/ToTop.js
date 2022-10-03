import Link from "next/link";
import React, { useState } from "react";

const ToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // window.addEventListener("scroll", toggleVisible);
  global.window && window.addEventListener('scroll', toggleVisible)

  
  return (
    <nav id="button" className={`social ${visible && 'show'}`} onClick={scrollToTop}>
      <ul >
        <li id="twitter">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M16 27V5M7 14l9-9 9 9"
              ></path>
            </svg>
          </span>
          <Link href="/">Go To Top </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ToTop;
