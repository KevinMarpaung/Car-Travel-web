import React from "react";

function CardTestimonial({ FotoProfil, nama, alamat }) {
  return (
    <div className=" p-2 my-5 rounded-md border flex items-center  bg-[#F1F3FF] mx-4 ">
      <div>
        <img className="w-44" src={FotoProfil} alt="" />
      </div>
      <div className="w-[600px] ">
        <span>🌟🌟🌟🌟🌟</span>
        <p className="">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod”
        </p>
        <h1 className="font-bold">
          {" "}
          {nama}, {alamat}
        </h1>
      </div>
    </div>
  );
}

export default CardTestimonial;
