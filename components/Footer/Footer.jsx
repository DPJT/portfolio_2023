import React, { useRef } from "react";
export default function Footer() {
  const dropContent = useRef();
  return (
    <div className="topbarContainer flex-v w-100 bg-primary">
      <div className="footContainer flex-h justify-center bg-primary pd-10 gap-20 pd-right-30 pd-left-30 p-relative">
        <div className="flex-h flex-075 h-30px cursor-pointer ">
          <h2 className="ft-size-25 ft-wei-5 color-h1 logo">Portfolio</h2>
        </div>
        <div className="menu-3 flex-h center flex-1 bg-primary gap-25 ">
          <a className="ft-size-15 ft-wei-5 color-h1 txt-deco-none hov-active">
            About
          </a>
          <a className="ft-size-15 ft-wei-5 color-h1 txt-deco-none hov-active">
            Skills
          </a>
          <a className="ft-size-15 ft-wei-5 color-h1 txt-deco-none hov-active">
            Experience
          </a>
          <a className="ft-size-15 ft-wei-5 color-h1 txt-deco-none hov-active">
            Education
          </a>
        </div>
      </div>

      <div className="flex-h center bg-black txt-sep-2 ft-wei-2 ft-size-10 color-white pd-8 pd-top-10">
        ©2023 Jerez Developer. All rights reserved.
      </div>

      <style jsx>{`
        @media only screen and (max-width: 600px) {
          .footContainer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
