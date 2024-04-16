import React from "react";

function CardWhyUs({ emoticon, warna, title, deskripsi }) {
  return (
    <div className="border w-52 p-3 rounded-md">
      <span className={`${warna} rounded-full`}>{emoticon}</span>
      <h1 className="font-bold my-2 text-[16px]">{title}</h1>
      <p className="font-thin text-[14px]">{deskripsi}</p>
    </div>
  );
}

export default CardWhyUs;
