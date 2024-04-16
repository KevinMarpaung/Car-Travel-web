import React from "react";
import GambarService from "../../../public/img_service (2).png";
export default function OurService() {
  return (
    <div id="ourservice">
      <div className="flex justify-center gap-14 my-14">
        <div className="w-1/3">
          <img src={GambarService} alt="" />
        </div>
        <div className="w-1/3">
          <h1 className="font-bold text-xl my-4">
            Best Car Rental for any kind of trip in Langsa!!
          </h1>
          <p className="my-5">
            Sewa mobil di Langsa bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
            dll.
          </p>
          <ul className=" text-[14px]">
            <li className="my-2 ">
              <span className="bg-violet-200 rounded-full">✔️</span> Sewa Mobil
              Dengan Supir di Bali 12 Jam
            </li>
            <li>
              <span className="bg-violet-200 rounded-full">✔️</span>
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="my-2">
              <span className="bg-violet-200 rounded-full ">✔️</span>Sewa Mobil
              Jangka Panjang Bulanan
            </li>
            <li className="my-2 ">
              <span className="bg-violet-200 rounded-full">✔️</span>Gratis Antar
              - Jemput Mobil di Bandara
            </li>
            <li>
              <span className="bg-violet-200 rounded-full">✔️</span>Layanan
              Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
