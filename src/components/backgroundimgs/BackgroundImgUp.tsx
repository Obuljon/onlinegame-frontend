import React from "react";

export default function BackgroundImgUp() {
  return (
    <div
      className="fill-blue-950 flex flex-col justify-center "
      style={{
        background: `url(${
          require("../../assets/images/signupimg.png").default
        }) lightgray 50% / cover no-repeat`,
        width: "50%",
        height: "1080px",
      }}
    >
      <p className="text-white mx-auto max-w-[450px] text-4xl font-bold text-center">
        Hey, you can take this screen UI, CSS, Swift and Android code for free
      </p>
    </div>
  );
}
