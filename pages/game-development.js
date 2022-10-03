import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceLayout from "../components/Common/ServiceLayout/ServiceLayout";

const GameDevelopment = () => {
  return (
    <div>
      <div className="app_development py-2 py-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <h3
                style={{ opacity: "0.4" }}
                className="text-primary text-4 text-center text-lg-start"
              >
                Service
              </h3>
              <h1 className="text-primary mb-3 text-center text-lg-start">
                Game Development
              </h1>
              <p
                style={{ opacity: "0.5" }}
                className="subtitle-1-n text-teritiary mb-lg-5 mb-0 text-center text-lg-start"
              >
                A Pioneer To The Emerging And Effective Web And CMS Development
                proficiency and upgrades it.
              </p>
              <div className="d-block d-lg-none img my-3 w-50 mx-auto">
                <Image
                  src="/assets/images/Service-Layout/app-developmetn.png"
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  className="img-fluid"
                />
              </div>
              <p className="icon text-center text-lg-start">
                It is a straightforward technique for buying and selling
                exchanges of items based online over the web. The E-Commerce
                site is very famous and of late becoming fundamental for the
                business.Internet business is the ideal method for satisfying
                your requirements for advancements. The scale may be different
                for everybody, except the outcome generally ends up being
                productive.
                <br />
                <br />
                Web based business sites change organizations and assist them
                with extending for the development of the organization.
                Coordinate your necessities and inclinations with E-Commerce
                sites. All tasks designated at the creation, the executives, and
                advancement of a web store are covered under web based business
                web composition and improvement. With a single tick, the
                activity online can act in E-Commerce improvement. The UX/UI is
                the E-Commerce site&apos;s key element, and enormous choices
                draw in clients and clients.
              </p>
              <div className="btn_part mt-5">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    fill="none"
                    viewBox="0 0 29 29"
                  >
                    <path
                      stroke="#fff"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M27.693 22.832c0 .48-.106.973-.333 1.453-.227.48-.52.934-.907 1.36-.653.72-1.373 1.24-2.186 1.574-.8.333-1.667.506-2.6.506-1.36 0-2.814-.32-4.347-.973-1.533-.653-3.067-1.533-4.587-2.64a38.34 38.34 0 01-4.373-3.733 37.888 37.888 0 01-3.72-4.36c-1.093-1.52-1.973-3.04-2.613-4.547-.64-1.52-.96-2.973-.96-4.36 0-.907.16-1.773.48-2.573.32-.814.826-1.56 1.533-2.227.853-.84 1.787-1.253 2.773-1.253.374 0 .747.08 1.08.24.347.16.654.4.894.746l3.093 4.36c.24.334.413.64.533.934.12.28.187.56.187.813 0 .32-.093.64-.28.947a4.535 4.535 0 01-.747.946L9.6 11.1a.714.714 0 00-.213.533c0 .107.013.2.04.307.04.106.08.186.106.266.24.44.654 1.014 1.24 1.707.6.693 1.24 1.4 1.934 2.107a40.08 40.08 0 002.12 1.96c.693.586 1.266.986 1.72 1.226.066.027.146.067.24.107a.92.92 0 00.333.053c.227 0 .4-.08.547-.226l1.013-1c.333-.334.653-.587.96-.747.307-.187.613-.28.947-.28.253 0 .52.053.813.173.293.12.6.294.933.52l4.414 3.134c.346.24.586.52.733.853.133.333.213.667.213 1.04z"
                    ></path>
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M23.067 10.391c0-.8-.627-2.026-1.56-3.026-.854-.92-1.987-1.64-3.107-1.64M27.733 10.392A9.327 9.327 0 0018.4 1.059"
                    ></path>
                  </svg>
                </div>
                <div className="query">
                  <p>For Query</p>
                  <Link href="callto:3104372766">
                    <a>
                      <h5>310-437-2766</h5>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="img my-5 d-none d-lg-block">
                <Image
                  src="/assets/images/Service-Layout/app-developmetn.png"
                  alt=""
                  width="100%"
                  height="100%"
                  layout="responsive"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceLayout />
    </div>
  );
};

export default GameDevelopment;
