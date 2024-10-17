import React from "react";

export default function BackgroundImgIn() {
  return (
    <div
      style={{
        background: `url(${
          require("../../assets/images/signinimg.png").default
        }) lightgray 50% / cover no-repeat`,
      }}
      className="h-[1081px] w-1/2 flex flex-col justify-center"
    >
      <p className=" text-white font-bold text-4xl px-28 text-center">
        Hey, you can take this screen UI, CSS, Swift and Android code for free
      </p>
    </div>
  );
}
