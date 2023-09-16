import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
//components
import Topbar from "/components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer";
import styles from "./Container-style";

const Container = ({ children, headTitle = "Porfolio" }) => {
  return (
    <div className="grid-container">
      <Head>
        <title>{headTitle}</title>;
      </Head>

      <div className="grid-item">
        <Topbar />
      </div>
      <div className="grid-item">{children}</div>
      <div className="grid-item">
        <Footer />
      </div>
      {/*       <button
        onClick={appState.toggleDarkMode}
        className="dark-button btn_b btn-cuadrado-a rd-50 "
      >
        <i className="bx bxs-moon"></i>
      </button> */}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Container;
