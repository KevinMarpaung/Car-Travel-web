import React from "react";
import Navbar from "../Components/Fragments/Navbar";
import HeroSection from "../Components/Fragments/HeroSection";
import OurService from "../Components/Fragments/OurService";
import WhyUs from "../Components/Fragments/WhyUs";
import Testimonial from "../Components/Fragments/Testimonial";
import Banner from "../Components/Fragments/Banner";
import Faq from "../Components/Fragments/Faq";
import Footer from "../Components/Fragments/Footer";

export default function HomePages() {
  return (
    <>
      <div className=" bg-[#f1f3ff]">
        <Navbar></Navbar>
        <HeroSection></HeroSection>{" "}
      </div>
      <OurService></OurService>
      <WhyUs></WhyUs>
      <Testimonial></Testimonial>
      <Banner></Banner>
      <Faq></Faq>
      <Footer></Footer>
    </>
  );
}
