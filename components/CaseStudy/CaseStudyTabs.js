import Isotope from 'isotope-layout';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CaseStudyTabs = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setIsotope(
      new Isotope(".grid", {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
      })
    );
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <div className="case-studies py-2 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center primary-1">OUR RECENT PROJECT</p>
            <h2 className="text-primary text-center mb-5">
              Latest Case Studies
            </h2>

            {/* <!-- isotop --> */}
            <div className="isotop-part">
              {/* <!-- isotop nav --> */}
              <div className="menu_iso" id="custom-filter">
                <li>
                  <a
                    onClick={() => setFilterKey("*")}
                    className={`${filterKey === "*" && "is-checked"}`}
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setFilterKey("item1")}
                    className={`${filterKey === "item1" && "is-checked"}`}
                  >
                    Mobile app
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setFilterKey("item2")}
                    className={`${filterKey === "item2" && "is-checked"}`}
                  >
                    WebSite
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setFilterKey("item3")}
                    className={`${filterKey === "item3" && "is-checked"}`}
                  >
                    E-commerce
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setFilterKey("item4")}
                    className={`${filterKey === "item4" && "is-checked"}`}
                  >
                    Game
                  </a>
                </li>
              </div>
              {/* <!-- isotop nav -->
                  <!-- isotop content --> */}
              <div className="container">
                <div className="grid">
                  <div className="grid-item item1">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item1.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item2">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item2.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item3">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item3.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="grid-item item4">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item4.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item2">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item5.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item3">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item6.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className=" grid-item item1">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item7.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="grid-item item4">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item1.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item1">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item2.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item3">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item3.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item2">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item4.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="grid-item item4">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item5.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item3">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item6.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item2">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item7.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Fitness &amp; Workout app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>

                  <div className="grid-item item1">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item1.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Hotel Booking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>
                  <div className="grid-item item4">
                    <div className="img_iso">
                      <Image
                        src={"/assets/images/case-study/item2.webp"}
                        alt=""
                        width="100%"
                        height="100%"
                        layout="responsive"
                      />
                    </div>
                    <div className="content">
                      <p>Car Parking app</p>
                      <ul>
                        <li>Android</li>
                        <li>Flatter</li>
                        <li>React</li>
                        <li>IOS</li>
                      </ul>
                      <Link href="/case-study-details">Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyTabs;
