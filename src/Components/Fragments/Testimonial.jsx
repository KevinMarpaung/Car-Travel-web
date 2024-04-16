import React from "react";
import CardTestimonial from "../Elements/CardTestimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FotoProfil1 from "../../../public/img_photo (2).png";
import FotoProfil2 from "../../../public/img_photo (3).png";
function Testimonial() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div id="testimonial">
      <h1 className="text-center font-bold text-2xl">Testimonial</h1>
      <p className="text-center text-[14px]">
        Berbagai Review Positif Dari Pelanggan Kami
      </p>
      <div>
        <Slider {...settings}>
          <CardTestimonial
            nama={"Jhon doe"}
            FotoProfil={FotoProfil1}
          ></CardTestimonial>
          <CardTestimonial
            nama={"Jhon doe"}
            FotoProfil={FotoProfil1}
          ></CardTestimonial>
          <CardTestimonial
            FotoProfil={FotoProfil2}
            nama={"Melani"}
            alamat={"bromo"}
          ></CardTestimonial>{" "}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
