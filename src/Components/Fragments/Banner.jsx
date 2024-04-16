import React from "react";
import Button from "../Elements/Button";

function Banner() {
  return (
    <div className="bg-blue-700 my-10 w-[70%] m-auto text-center rounded-lg  text-white p-8">
      <h1 className="text-4xl ">Sewa Mobil di Langsa Sekarang</h1>
      <p className="my-4 text-[14px] font-thin">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod{" "}
        <br />
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="flex items-center justify-center">
        <Button ukuran={"w-[190px]"} text={"Mulai Sewa Mobil"}></Button>
      </div>
    </div>
  );
}

export default Banner;
