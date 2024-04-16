import React from "react";

function Faq() {
  return (
    <div id="faq">
      <div className="w-[70%]  flex m-auto   justify-center my-16 text-[14px]">
        <div className="w-[40%] ">
          <h1 className="font-bold my-4 text-2xl">Frequently Asked Question</h1>
          <p className="font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="w-[70%] text-[14px]">
          <div className="collapse collapse-arrow border my-3 rounded-none">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-thin ">
              Apa saja syarat yang dibutuhkan?
            </div>
            <div className="collapse-content">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                libero quaerat iste similique dolor et quisquam doloribus
                temporibus recusandae
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border my-3 rounded-none">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-thin ">
              Apakah Ada biaya antar-jemput?
            </div>
            <div className="collapse-content">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                libero quaerat iste similique dolor et quisquam doloribus
                temporibus recusandae
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border my-3 rounded-none">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-thin ">
              Bagaimana jika terjadi kecelakaan
            </div>
            <div className="collapse-content">
              <p className="font-light">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                libero quaerat iste similique dolor et quisquam doloribus
                temporibus recusandae
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border my-3 rounded-none">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-thin">
              Berapa hari minimal sewa mobil lepas kunci?
            </div>
            <div className="collapse-content">
              <p className="font-light">
                Fugiat natus quod amet placeat ipsam eveniet iusto, itaque, unde
                doloremque saepe asperiores minus nemo tempora.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow border rounded-none my-3">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-thin">
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </div>
            <div className="collapse-content">
              <p className="font-light">
                Fugiat natus quod amet placeat ipsam eveniet iusto, itaque, unde
                doloremque saepe asperiores minus nemo tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
