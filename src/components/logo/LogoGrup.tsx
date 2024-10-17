import React from "react";
import { Apple, Google, Facebook } from "../";

export default function LogoGrup() {
  return (
    <div className='flex justify-center gap-2'>
      <div className='auth_logo_bg flex justify-center items-center'>
        <Apple />
      </div>
      <div className='auth_logo_bg flex justify-center items-center'>
        <Google />
      </div>
      <div className='auth_logo_bg flex justify-center items-center'>
        <Facebook />
      </div>
    </div>
  );
}
