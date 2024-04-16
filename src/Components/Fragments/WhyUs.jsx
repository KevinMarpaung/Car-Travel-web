import React from "react";
import CardWhyUs from "../Elements/CardWhyUs";

function WhyUs() {
  return (
    <div id="whyus">
      <div className="mx-40 ">
        <h1 className="text-lg font-bold">Why Us?</h1>
        <p className="my-4">Mengapa Harus Pilih Car Rental</p>
        <div className="flex gap-4 justify-between mb-16 ">
          <CardWhyUs
            emoticon={"👍"}
            warna={"bg-red-600"}
            title={"Mobil Lengkap"}
            deskripsi={
              "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
            }
          ></CardWhyUs>
          <CardWhyUs
            emoticon={"🔖"}
            warna={"bg-blue-600"}
            title={"Harga Murah"}
            deskripsi={
              "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
            }
          ></CardWhyUs>
          <CardWhyUs
            emoticon={"🕣"}
            warna={"bg-yellow-200"}
            title={"Layanan 24 Jam"}
            deskripsi={
              "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"
            }
          ></CardWhyUs>
          <CardWhyUs
            emoticon={"🏅"}
            warna={"bg-green-600"}
            title={"Sopir Profesional"}
            deskripsi={
              " Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
            }
          ></CardWhyUs>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
