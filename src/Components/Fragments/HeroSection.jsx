import React from "react";
import Button from "../Elements/Button";
import Gambar from "../../../public/Mercedes Car EQC 300kW Edition - 900x598 1 (2).png";
function HeroSection() {
  return (
    <div>
      <div className="flex items-center h-screen ">
        <div className="    mx-7 w-[50%]  ">
          <h1 className="font-bold text-[36px] text-start w-[80%]">
            Sewa & Rental Mobil Terbaik Di kawasan Langsa
          </h1>
          <p className=" my-5 ">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas{" "}
            <br />
            terbaik dengan harga terjangkau. Selalu siap melayani <br />{" "}
            kebutuhanmu untuk sewa mobil selama 24 jam.
          </p>

          <Button ukuran={"w-36"} text={"Mulai Sewa Mobil"}></Button>
        </div>
        <div className="relative z-40">
          <img className="w-full  " src={Gambar}></img>
          <div className="bg-[#0d28a6] w-[100%] rounded-tl-full h-[30vh] absolute bottom-0 left-0 -z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
