import React, { useRef } from "react";
export default function Topbar() {
  const dropContent = useRef();
  return (
    <div className="topbarContainer flex-v w-100vw p-fixed bg-primary">
      <div className="flex-h justify-center bg-primary pd-10 gap-20 pd-right-25 pd-left-25 p-relative">
        {/* INICIO dropmenu para moviles */}
        <div className="dropdown-menu flex-h justify-start flex-075 bg-primary pd-9 gap-25 cursor-pointer">
          <i
            className="bi bi-list ft-wei-5 ft-size-25 flex-v align-center color-white"
            onClick={() => dropContent.current.classList.toggle("open")}
          />
          <div
            ref={dropContent}
            className="drop-content flex-v bg-primary p-absolute z-1 pd-20 gap-20"
          >
            <div className="flex-h justify-between center">
              <div className="flex-h flex-1"></div>
              <div className="flex-h center flex-075 w-75px cursor-pointer">
                <h2 className="h-35px color-white">Portfolio</h2>
              </div>
              <div className="flex-h flex-1 justify-end">
                <i
                  className="bi bi-list ft-wei-5 ft-size-25 flex-v align-center color-white"
                  onClick={() => dropContent.current.classList.toggle("open")}
                />
              </div>
            </div>

            <div className="flex-h align-center justify-between ">
              <h3 className="ft-size-20 ft-wei-5 color-h1">About</h3>
            </div>
            <div className="flex-h align-center justify-between">
              <h3 className="ft-size-20 ft-wei-5 color-h1">Skills</h3>
            </div>
            <div className="flex-h align-center justify-between">
              <h3 className="ft-size-20 ft-wei-5 color-h1">Experience</h3>
            </div>
            <div className="flex-h align-center justify-between">
              <h3 className="ft-size-20 ft-wei-5 color-h1">Education</h3>
            </div>
          </div>
        </div>
        {/* FIN dropmenu para moviles */}

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
        <div className="menu-4 flex-h justify-end flex-075 bg-primary gap-25">
          <button className="btn btn_e rd-25">Github</button>
        </div>
      </div>

      <style jsx>{`
        .topbarContainer {
          transition: top 0.2s ease-in-out;
        }
        .logo {
          height: 30px;
        }
        .dropdown-menu {
          display: none;
        }
        .drop-content {
          transition: width 0.5s;
        }

        @media only screen and (max-width: 600px) {
          .menu-4,
          .menu-3,
          .menu-2 {
            display: none;
          }
          .logo {
            height: 30px;
            position: absolute;
            top: 15px;
            left: 34vw;
          }
          .dropdown-menu {
            display: flex;
          }
          .drop-content {
            top: 0px;
            left: -150px;
            width: 0px;
            height: 100vh;
            transition: width 0.5s;
          }
          .open {
            height: 100vh;
            width: 100vw;
            left: 0;
            top: 0;
            transition: width 0.5s;
          }
        }
      `}</style>
    </div>
  );
}
