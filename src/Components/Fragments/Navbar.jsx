import React from "react";
import { Link } from "react-router-dom";
import Button from "../Elements/Button";

function Navbar() {
  return (
    <div className="flex justify-between mx-24 py-4 items-center ">
      <div className="bg-blue-700 w-20 h-10 rounded-sm flex items-center justify-center ">
        Logo
      </div>
      <div className="">
        <ul className="flex  items-center gap-10 text-base ">
          <li>
            <a href="#ourservice">Our Services</a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <Button ukuran={"w-20"} text={"login"}></Button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
