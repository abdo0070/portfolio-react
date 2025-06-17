import React from "react";

export const Banner = () => {
  return (
    <div className="bg-slate-950 w-full flex justify-center">
      <div className="md:h-32 h-24 text-white flex flex-row container justify-between mx-4 md:mx-14">
        <div className="font-semibold h-full flex items-center text-sm sm:text-base md:text-lg">
          CHECK MY RESUME&GITHUB LINKS
        </div>
        <div className="font-medium flex flex-row h-full items-center gap-2">
          <a
            href="https://github.com/abdo0070/"
            className="sm:p-2 md:p-3 p-1 text-sm sm:text-base bg-red-700 h-fit rounded-sm cursor-pointer hover:bg-red-600"
          >
            GITHUB
          </a>
          <a
            href="https://drive.google.com/file/d/11ty417gktdYXMITXdKY9SKov3WmePsuk/view?usp=sharing"
            className="sm:p-2 md:p-3 p-1 text-sm sm:text-base bg-indigo-700 h-fit rounded-sm cursor-pointer hover:bg-indigo-600"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};
