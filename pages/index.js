import Head from "next/head";
import Banner from "../components/Home/Banner";
import CountDown from "../components/Home/CountDown";
import DifferentPart from "../components/Home/DifferentPart";
import DigitalProduct from "../components/Home/DigitalProduct";
import LogoSlider from "../components/Home/LogoSlider";
import Pricing from "../components/Home/Pricing";
import ServiceProvide from "../components/Home/ServiceProvide";
import WorkProcess from "../components/Home/WorkProcess";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Banner />
      <LogoSlider />
      <DifferentPart />
      <DigitalProduct />
      <CountDown />
      <ServiceProvide />
      <WorkProcess />
      <Pricing />
    </>
  );
}
