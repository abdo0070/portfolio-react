import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <div className="w-full md:h-44 min-h-fit flex justify-center text-slate-200">
      <div className="w-10/12 h-full p-2 flex justify-between items-center g-3 md:g-5">
        {/**LOGO & CONTACT SECTION */}
        <div className="h-full flex flex-col gap-2">
          <div className="w-20 h-10 md:w-24 md:h-12">
            <img
              className="bg-transparent rounded-md w-full h-full"
              src="/logo.png"
              alt=""
            />
          </div>
          <div className="text-xs md:text-base font-semibold ">
            <h2>Contact Info</h2>
            <h2>Tel: +201115907072</h2>
            <h2>Email: abdallammdouh6@gmail.com</h2>
          </div>
        </div>
        <div className="flex h-full justify-centers items-end mb-4 md:mb-8">
          <div className="h-fit">
            <h2 className="text-xs md:text-base font-semibold text-center ">
              Created By Abdalla Mmdouh
            </h2>
            <h2 className="text-xs md:text-base font-semibold text-center ">
              2024
            </h2>
          </div>
        </div>

        <div className="h-full flex flex-col gap-2 justify-items-end">
          <h2 className="text-sm md:text-lg font-semibold w-full text-center">
            FOLLOW ME
          </h2>
          <div className="flex gap-2 w-full'
           justify-center">
            {SOCIAL_MEDIA_LINKS.map((e) => {
              return <a href={e.href}>{e.icon}</a>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
