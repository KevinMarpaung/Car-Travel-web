import React from "react";

function Button({ text, ukuran }) {
  return (
    <div
      className={` ${ukuran}  text-center bg-[#5CB85F] text-white p-2  rounded-sm `}
    >
      {text}
    </div>
  );
}

export default Button;
