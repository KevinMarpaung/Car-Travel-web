import React from "react";

function Footer() {
  return (
    <div className="flex justify-between mx-52 text-[10px]">
      <div>
        <p>
          Jalan Suroyo No. 161 Mayangan Kota <br /> Probolonggo 672000
        </p>
        <p className="my-2">binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div>
        <ul>
          <li>Our services</li>
          <li className="my-1">Why Us</li>
          <li className="my-1">Testimonial</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <p>Connect with us</p>
        <ul className="flex">
          <li>📞</li>
          <li>📞</li>
          <li>📞</li>
          <li>📞</li>
          <li>📞</li>
        </ul>
      </div>
      <div>
        <p>Copyright By Kevin 2024</p>
      </div>
    </div>
  );
}

export default Footer;
