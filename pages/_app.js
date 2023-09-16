function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        /* Google Font Link */
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
        body {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
          border: none;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        :root {
          --background_1: #f6f5f7;

          --background_signin: #1e293b;
          --background_signup: #1e293b;

          --primary: #191924;
          --secondary: #e2e8f0;
          --terciary: #e1ebfb;
          --active-color: rgb(133, 76, 230);
          --active-color-1: #1b28ff;
          --active-color-2: #11285e;
          --op-active-color: #blue;
          --op-complementary-color: #071323;
          --op-h1-color: #ffffff;
          --h1-color: #ffffff;
          --h3-color: #ffffff;
          --subtitle-color: #8aa6ba;
          --h3-color: #617385;
          --placeholder-ligth: #dadde3;
          --placeholder-hard: #8d98a8;
          --wow-logo-url: url("/logo-horizontal-completov3.svg");
          --btn-radius: 3px;
          --input-radius: 5px;
          --card-radius-s: 10px;
          --card-radius-m: 12px;
          --card-radius-l: 15px;
          --color-success: #03d89a;
          --color-error: #fd4243;

          --bg-adidas-img: #ebeff1;

          --shadow_a: rgba(32, 56, 117, 0.35) 0px 10px 20px -13px;
          --shadow_active: 0px 15px 20px rgba(0, 118, 255, 0.4);
          --shadow_active: rgba(0, 118, 255, 0.4) 0px 4px 12px;
          --shadow_error: rgba(253, 66, 67, 0.4) 0px 4px 12px;
        }

        .dark-mode {
          --background_1: #1f1d2c;

          --background_signin: #1f1d2c;
          --background_signup: #1f1d2c;

          --primary: #142232;
          --secondary: #071323;
          --primary: #2e3035;
          --secondary: #383b44;

          --terciary: #e1ebfb;
          --active-color: #0076ff;
          --op-active-color: #ffffff;
          --op-complementary-color: #f3f8fc;
          --op-h1-color: #142232;
          --h1-color: #ffffff;
          --h3-color: #72889e;
          --subtitle-color: #8aa6ba;
          --h3-color: #aabed1;
          --subtitle-color: #8aa6ba;

          --wow-logo-url: url("/logo-horizontal-completov3-dark.svg");
          --shadow_a: rgba(32, 56, 117, 0.35) 0px 10px 20px -13px;
          --rojo: red;
        }

        ::-webkit-scrollbar {
          width: 3px;
          border-radius: 50px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle lo que se mueve*/
        ::-webkit-scrollbar-thumb {
          background: #8888883d;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        ::-webkit-scrollbar {
          width: 5px;
          height: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: var(--secondary);
        }

        /* Handle (la parte que se mueve)*/
        ::-webkit-scrollbar-thumb {
          background: var(--primary);
          border-radius: 50px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: var(--subtitle-color);
        }

        /* FORM*/

        .error_message {
          display: none;
        }
        .errore .error_message {
          color: var(--color-error);
          display: flex;
        }

        .errore input,
        .errore textarea {
          border: 1px solid var(--color-error);
        }

        .success input,
        .success textarea {
          border: 1px solid var(--color-success);
        }

        /* FIN FORM */

        .active {
          color: var(--active-color);
        }
        .hov-active:hover {
          color: var(--active-color);
        }

        .hidden {
          visibility: hidden;
        }

        .shadow,
        .shadow_a {
          box-shadow: var(--shadow_a);
        }

        .shadow_b {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        hr.linea {
          border-top: 0.01em solid rgba(100, 116, 139, 0.3);
          width: 100%;
        }
        h1 {
          color: var(--h1-color);
          margin: 0px;
          font-weight: bold;
        }
        h2,
        h3,
        h4,
        h5,
        p,
        span {
          color: var(--h3-color);
          margin: 0px;
        }
        a {
          color: var(--h1-color);
          font-weight: 700;
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: var(--active-color);
          text-decoration-thickness: 2px;
        }

        form {
          margin: 0px;
          padding: 0px;
        }
        input {
          background-color: var(--secondary);
          border-radius: var(--input-radius);
          padding: 7px 10px;
          border: none;
          color: var(--subtitle-color);
          font-weight: 700;
          outline: none;
          max-height: 40px;
          min-height: 40px;
        }
        input:hover {
          color: var(--h1-color);
          border: 1px solid var(--active-color);
        }
        input:focus {
          color: var(--h1-color);
          outline: none;
          border: 1px solid var(--active-color);
        }
        input::placeholder {
          color: var(--subtitleh1-color);
          opacity: 0.6;
        }
        input:focus::placeholder,
        input:hover::placeholder {
          color: transparent;
        }

        ul {
          list-style-type: none;
        }
        li {
          list-style-type: none;
        }

        textarea {
          background-color: var(--secondary);
          border-radius: var(--input-radius);
          padding: 7px 10px;
          border: none;
          color: var(--subtitle-color);
          font-weight: 700;
          outline: none;
        }
        textarea:hover {
          color: var(--h1-color);
          border: 1px solid var(--active-color);
        }
        textarea:focus {
          color: var(--h1-color);
          outline: none;
          border: 1px solid var(--active-color);
        }

        .parrafo {
          color: var(--h3-color);
          line-height: 1.5;
          font-size: 12px;
          font-weight: 500;
        }
        .dot {
          height: 5px;
          width: 5px;
        }
        .center {
          align-items: center;
          justify-content: center;
        }

        .tooltip {
          font-size: 11px;
          font-weight: 500;
          color: var(--subtitle-color);
          position: absolute;
          display: flex;
          background-color: var(--primary);
          box-shadow: var(--shadow_a);
          padding: 15px;
          display: none;
          width: min-content;
          border-radius: 5px;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 99;
        }
        .tooltip::after {
          content: "";
          display: block;
          position: absolute;
          border-top: 10px solid var(--primary);
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          bottom: -10px;
          border-radius: 0px;
        }

        .tooltipContainer:hover .tooltip {
          display: flex;
        }

        .adibtn {
          padding: 15px 15px;
          color: black;
          font-weight: 500;
          font-size: 13px;
          background-color: var(--primary);
          border: none;
          width: max-content;
          font-size: ;
          cursor: pointer;
          text-align: center;
          letter-spacing: 2px;
          position: relative;
        }
        .adibtn:after {
          content: "";
          background-color: transparent;
          width: 97.5%;
          position: absolute;
          height: 92%;
          top: 4px;
          left: 5px;
          transition: 0.2s;
          border: solid 1.5px var(--primary);
        }
        .adibtn:hover:after {
          top: 0px;
          left: 0px;
        }

        .adibtn:hover {
          color: var(--subtitle-color);
        }

        .adibtn:focus {
          /*           border: 1px solid var(--op-complementary-color); */
          /*     box-shadow: var(--shadow_active); */
        }
        .adibtn:active {
          animation: press 0.2s 1 ease;
        }

        .adibtn_b.adibtn:after {
          content: none;
          border: none;
        }

        .adibtn_a.adibtn:after {
          border-color: black;
        }

        .adibtn.adibtn_a {
          background-color: black;
          color: white;
        }

        .adibtn.adibtn_a:hover {
        }

        .adibtn.adibtn_b {
          background-color: transparent;
          border: solid 1px var(--secondary);
          color: black;
          font-weight: 400;
          letter-spacing: 0px;
          padding: 10px 15px;
        }

        .adibtn.adibtn_b:hover {
          border: solid 1px var(--h3-color);
        }

        .btn {
          padding: 7px 20px;
          color: var(--subtitle-color);
          font-weight: 700;
          background-color: var(--primary);
          border: 1px solid var(--h3-color);
          border-radius: var(--btn-radius);
          width: min-content;
          font-size: ;
          cursor: pointer;
          text-align: center;
        }
        button:disabled,
        button[disabled] {
          opacity: 0.6;
        }

        .btn:hover {
          color: #ffffff;
          background-color: var(--active-color);
          /* border: 1px solid #ffffff; */
          box-shadow: var(--shadow_active);
        }

        @keyframes press {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes bounce {
          50% {
            transform: rotate(5deg) translate(20px, -50px);
          }
          to {
            transform: scale(0.9) rotate(10deg) translate(50px, -80px);
            opacity: 0;
          }
        }
        @keyframes bounceInv {
          0% {
            opacity: 0;
          }
          50% {
            transform: scale(0.9) rotate(10deg) translate(50px, -80px);
            opacity: 0;
          }
          to {
            transform: rotate(5deg) translate(-0px, 0px);
          }
        }

        .animation-bounce:active {
          animation: bounce 1s 1 linear;
        }
        .ani-bounce {
          animation: bounce 0.8s 1 linear;
        }
        .ani-bounceInv {
          animation: bounceInv 0.8s 1 cubic-bezier(0, 0.79, 1, 1);
          animation: bounceInv 0.2s 1 cubic-bezier(0.57, 0.45, 0, 0.76);
        }
        .ani-none {
          animation: none;
        }

        .animation-press:active {
          animation: press 0.2s 1 ease;
        }

        .btn:focus {
          /*           border: 1px solid var(--op-complementary-color); */
          /* box-shadow: var(--shadow_active); */
        }
        .btn:active {
          animation: press 0.2s 1 ease;
        }

        .btn_a {
          background-color: var(--secondary);
          border: none;
        }

        .btn_a:hover {
          border: none;
        }
        .btn_b {
          background-color: var(--active-color);
          color: #ffffff;
          border: none;
        }
        .btn_b:hover {
          border: none;
          box-shadow: var(--shadow_active);
        }

        .btn_c {
          background-color: var(--op-active-color);
          color: var(--op-h1-color);
          border: none;
        }
        .btn_c:hover {
          border: none;
        }

        .btn_d {
          border: none;
          background-color: var(--primary);
          color: var(--active-color);
        }
        .btn_d:hover {
          border: none;
        }
        .btn_e {
          border: none;
          background-color: var(--primary);
          border: 1px solid var(--h1-color);
          color: var(--h1-color);
        }
        .btn_e:hover {
          border: 1px solid var(--active-color);
        }

        .btn_f {
          border: none;
          background-color: var(--primary);
          border: 1px solid var(--active-color);
          color: var(--active-color);
        }
        .btn_f:hover {
          border: 1px solid var(--active-color);
        }

        .btn_g {
          border: none;
          background-color: var(--secondary);
          color: var(--active-color);
        }
        .btn_g:hover {
          border: none;
        }

        .btn_h {
          border: none;
          background-color: var(--primary);
          color: var(--h3-color);
        }
        .btn_h:hover {
          border: none;
        }

        .btn_i {
          border: none;
          border-radius: 0;
          border-bottom: 3px solid transparent;
        }
        .btn_i:hover {
          border-bottom: 3px solid var(--active-color);
          background: transparent;
          color: var(--h3-color);
          box-shadow: none;
        }
        .btn_i-active,
        .btn_i-active:hover {
          border: none;
          border-radius: 0;
          border-bottom: 3px solid var(--active-color);
          background: transparent;
          color: var(--h3-color);
          box-shadow: none;
        }

        .btn_error {
          border: none;
          background-color: var(--color-error);
          color: white;
        }
        .btn_error:hover,
        .hov-btn_error:hover {
          background-color: var(--color-error);
          box-shadow: var(--shadow_error);
          border: none;
        }

        .btn_error:focus,
        .hov-btn_error:focus {
          box-shadow: var(--shadow_error);
        }

        .btn-cuadrado-a {
          width: 40px;
          height: 40px;
          padding: center;
          margin: auto;
        }
        .btn_cuadrado {
          width: 40px;
          height: 40px;
          padding: center;
          margin: auto;
        }
        /* overflow */

        .ov-hidden {
          overflow: hidden;
        }
        .ovy-hidden {
          overflow-y: hidden;
        }
        .ovx-hidden {
          overflow-x: hidden;
        }
        .ovy-scroll {
          overflow-y: scroll;
        }
        .ovx-scroll {
          overflow-x: scroll;
        }

        /* image */
        .i-contain {
          object-fit: contain;
        }
        .i-cover {
          object-fit: cover;
        }
        .i-none {
          object-fit: cover;
        }
        .i-down {
          object-fit: scale-down;
        }

        /* BORDER */
        .bd-dotted {
          border-style: dotted;
        }
        .bd-active {
          border-color: var(--active-color);
        }
        .bd-h1 {
          border-color: var(--h1-color);
        }
        .bd-h3 {
          border-color: var(--h3-color);
        }
        .bd-primary {
          border-color: var(--primary);
        }
        .bd-secondary {
          border-color: var(--secondary);
        }
        .bd-1 {
          border-style: solid;
          border-width: 1px;
        }
        .bd-15 {
          border-style: solid;
          border-width: 1.5px;
        }
        .bd-2 {
          border-style: solid;
          border-width: 2px;
        }
        .bd-25 {
          border-style: solid;
          border-width: 2.5px;
        }
        .bd-3 {
          border-style: solid;
          border-width: 3px;
        }
        .bd-35 {
          border-style: solid;
          border-width: 3.5px;
        }
        .bd-4 {
          border-style: solid;
          border-width: 4px;
        }
        .bd-45 {
          border-style: solid;
          border-width: 4.5px;
        }
        .bd-5 {
          border-style: solid;
          border-width: 5px;
        }
        .bd-55 {
          border-style: solid;
          border-width: 5.5px;
        }
        .bd-6 {
          border-style: solid;
          border-width: 6px;
        }
        .bd-7 {
          border-style: solid;
          border-width: 7px;
        }
        .bd-8 {
          border-style: solid;
          border-width: 8px;
        }
        .bd-9 {
          border-style: solid;
          border-width: 1px;
        }
        .bd-10 {
          border-style: solid;
          border-width: 10px;
        }

        /* DISPLAY */
        .display-none {
          display: none;
        }
        .display-block {
          display: block;
        }
        .display-auto {
          display: auto;
        }
        .display-inline-block {
          display: inline-block;
        }

        /* Transforms */
        .rotation-360 {
          transform: rotate(-360deg);
          transition: transform 500ms ease;
        }

        /* txt separation */

        .txt-sep-1 {
          letter-spacing: 1px;
        }
        .txt-sep-2 {
          letter-spacing: 2px;
        }

        /* Z-INDEX*/
        .z-1 {
          z-index: 1;
        }
        .z-2 {
          z-index: 2;
        }
        .z-5 {
          z-index: 5;
        }
        .z-9 {
          z-index: 9;
        }
        .z-10 {
          z-index: 10;
        }
        .z-15 {
          z-index: 15;
        }
        .z-20 {
          z-index: 20;
        }
        .z-25 {
          z-index: 25;
        }
        .z-30 {
          z-index: 30;
        }
        .z-35 {
          z-index: 35;
        }
        .z-40 {
          z-index: 40;
        }
        .z-45 {
          z-index: 45;
        }
        .z-50 {
          z-index: 50;
        }
        .z-55 {
          z-index: 55;
        }
        .z-60 {
          z-index: 60;
        }
        .z-65 {
          z-index: 65;
        }
        .z-70 {
          z-index: 70;
        }
        .z-75 {
          z-index: 75;
        }
        .z-80 {
          z-index: 80;
        }
        .z-85 {
          z-index: 85;
        }
        .z-90 {
          z-index: 90;
        }
        .z-91 {
          z-index: 91;
        }
        .z-92 {
          z-index: 92;
        }
        .z-93 {
          z-index: 93;
        }
        .z-94 {
          z-index: 94;
        }
        .z-95 {
          z-index: 95;
        }
        .z-96 {
          z-index: 96;
        }
        .z-97 {
          z-index: 97;
        }
        .z-98 {
          z-index: 98;
        }
        .z-99 {
          z-index: 99;
        }
        .z-100 {
          z-index: 100;
        }

        /* POSITION */

        .p-static {
          position: static;
        }
        .p-relative {
          position: relative;
        }
        .p-absolute {
          position: absolute;
        }
        .p-fixed {
          position: fixed;
        }
        .p-sticky {
          position: sticky;
        }

        /* top-bottom-right-left */
        /*  TOP*/
        .top-0 {
          top: 0px;
        }
        .top--25pc {
          top: -25%;
        }
        .top--50pc {
          top: -50%;
        }
        .top--75pc {
          top: -75%;
        }
        .top--100pc {
          top: -100%;
        }
        .top-25pc {
          top: 25%;
        }
        .top-50pc {
          top: 50%;
        }
        .top-75pc {
          top: 75%;
        }
        .top-100pc {
          top: 100%;
        }
        .top-5 {
          top: 5px;
        }
        .top-10 {
          top: 10px;
        }
        .top-15 {
          top: 15px;
        }
        .top-20 {
          top: 20px;
        }
        .top-25 {
          top: 25px;
        }
        .top-30 {
          top: 30px;
        }
        .top-35 {
          top: 35px;
        }
        .top-40 {
          top: 40px;
        }
        .top-45 {
          top: 45px;
        }
        .top-50 {
          top: 50px;
        }
        .top-60 {
          top: 60px;
        }
        .top-75 {
          top: 75px;
        }
        .top-100 {
          top: 100px;
        }
        .top-125 {
          top: 125px;
        }
        .top-150 {
          top: 150px;
        }
        .top-175 {
          top: 175px;
        }
        .top-200 {
          top: 200px;
        }
        .top-250 {
          top: 250px;
        }
        .top-300 {
          top: 300px;
        }
        .top-350 {
          top: 350px;
        }
        .top-400 {
          top: 400px;
        }
        .top-450 {
          top: 450px;
        }
        .top-500 {
          top: 500px;
        }

        .top--5 {
          top: -5px;
        }
        .top--10 {
          top: -10px;
        }
        .top--15 {
          top: -15px;
        }
        .top--20 {
          top: -20px;
        }
        .top--25 {
          top: -25px;
        }
        .top--30 {
          top: -30px;
        }
        .top--35 {
          top: -35px;
        }
        .top--40 {
          top: -40px;
        }
        .top--45 {
          top: -45px;
        }
        .top--50 {
          top: -50px;
        }
        .top--60 {
          top: -60px;
        }
        .top--75 {
          top: -75px;
        }
        .top--100 {
          top: -100px;
        }
        .top--125 {
          top: -125px;
        }
        .top--150 {
          top: -150px;
        }
        .top--175 {
          top: -175px;
        }
        .top--200 {
          top: -200px;
        }
        .top--250 {
          top: -250px;
        }
        .top--300 {
          top: -300px;
        }
        .top--350 {
          top: -350px;
        }
        .top--400 {
          top: -400px;
        }
        .top--450 {
          top: -450px;
        }
        .top--500 {
          top: -500px;
        }

        /* BOTTOM */

        .bottom-0 {
          bottom: 0px;
        }
        .bottom-25pc {
          bottom: 25%;
        }
        .bottom-50pc {
          bottom: 50%;
        }
        .bottom-75pc {
          bottom: 75%;
        }
        .bottom-100pc {
          bottom: 100%;
        }
        .bottom--25pc {
          bottom: -25%;
        }
        .bottom--50pc {
          bottom: -50%;
        }
        .bottom--75pc {
          bottom: -75%;
        }
        .bottom--100pc {
          bottom: -100%;
        }
        .bottom-5 {
          bottom: 5px;
        }
        .bottom-10 {
          bottom: 10px;
        }
        .bottom-15 {
          bottom: 15px;
        }
        .bottom-20 {
          bottom: 20px;
        }
        .bottom-25 {
          bottom: 25px;
        }
        .bottom-30 {
          bottom: 30px;
        }
        .bottom-35 {
          bottom: 35px;
        }
        .bottom-40 {
          bottom: 40px;
        }
        .bottom-45 {
          bottom: 45px;
        }
        .bottom-50 {
          bottom: 50px;
        }
        .bottom-60 {
          bottom: 60px;
        }
        .bottom-75 {
          bottom: 75px;
        }
        .bottom-100 {
          bottom: 100px;
        }
        .bottom-125 {
          bottom: 125px;
        }
        .bottom-150 {
          bottom: 150px;
        }
        .bottom-175 {
          bottom: 175px;
        }
        .bottom-200 {
          bottom: 200px;
        }
        .bottom-250 {
          bottom: 250px;
        }
        .bottom-300 {
          bottom: 300px;
        }
        .bottom-350 {
          bottom: 350px;
        }
        .bottom-400 {
          bottom: 400px;
        }
        .bottom-450 {
          bottom: 450px;
        }
        .bottom-500 {
          bottom: 500px;
        }

        .bottom--5 {
          bottom: -5px;
        }
        .bottom--10 {
          bottom: -10px;
        }
        .bottom--15 {
          bottom: -15px;
        }
        .bottom--20 {
          bottom: -20px;
        }
        .bottom--25 {
          bottom: -25px;
        }
        .bottom--30 {
          bottom: -30px;
        }
        .bottom--35 {
          bottom: -35px;
        }
        .bottom--40 {
          bottom: -40px;
        }
        .bottom--45 {
          bottom: -45px;
        }
        .bottom--50 {
          bottom: -50px;
        }
        .bottom--60 {
          bottom: -60px;
        }
        .bottom--75 {
          bottom: -75px;
        }
        .bottom--100 {
          bottom: -100px;
        }
        .bottom--125 {
          bottom: -125px;
        }
        .bottom--150 {
          bottom: -150px;
        }
        .bottom--175 {
          bottom: -175px;
        }
        .bottom--200 {
          bottom: -200px;
        }
        .bottom--250 {
          bottom: -250px;
        }
        .bottom--300 {
          bottom: -300px;
        }
        .bottom--350 {
          bottom: -350px;
        }
        .bottom--400 {
          bottom: -400px;
        }
        .bottom--450 {
          bottom: -450px;
        }
        .bottom--500 {
          bottom: -500px;
        }
        /* RIGHT*/

        .right-0 {
          right: 0px;
        }
        .right-25pc {
          right: 25%;
        }
        .right-50pc {
          right: 50%;
        }
        .right-75pc {
          right: 75%;
        }
        .right-100pc {
          right: 100%;
        }
        .right--25pc {
          right: -25%;
        }
        .right--50pc {
          right: -50%;
        }
        .right--75pc {
          right: -75%;
        }
        .right--100pc {
          right: -100%;
        }
        .right-5 {
          right: 5px;
        }
        .right-10 {
          right: 10px;
        }
        .right-15 {
          right: 15px;
        }
        .right-20 {
          right: 20px;
        }
        .right-25 {
          right: 25px;
        }
        .right-30 {
          right: 30px;
        }
        .right-35 {
          right: 35px;
        }
        .right-40 {
          right: 40px;
        }
        .right-45 {
          right: 45px;
        }
        .right-50 {
          right: 50px;
        }
        .right-60 {
          right: 60px;
        }
        .right-75 {
          right: 75px;
        }
        .right-100 {
          right: 100px;
        }
        .right-125 {
          right: 125px;
        }
        .right-150 {
          right: 150px;
        }
        .right-175 {
          right: 175px;
        }
        .right-200 {
          right: 200px;
        }
        .right-250 {
          right: 250px;
        }
        .right-300 {
          right: 300px;
        }
        .right-350 {
          right: 350px;
        }
        .right-400 {
          right: 400px;
        }
        .right-450 {
          right: 450px;
        }
        .right-500 {
          right: 500px;
        }

        .right--5 {
          right: -5px;
        }
        .right--10 {
          right: -10px;
        }
        .right--15 {
          right: -15px;
        }
        .right--20 {
          right: -20px;
        }
        .right--25 {
          right: -25px;
        }
        .right--30 {
          right: -30px;
        }
        .right--35 {
          right: -35px;
        }
        .right--40 {
          right: -40px;
        }
        .right--45 {
          right: -45px;
        }
        .right--50 {
          right: -50px;
        }
        .right--60 {
          right: -60px;
        }
        .right--75 {
          right: -75px;
        }
        .right--100 {
          right: -100px;
        }
        .right--125 {
          right: -125px;
        }
        .right--150 {
          right: -150px;
        }
        .right--175 {
          right: -175px;
        }
        .right--200 {
          right: -200px;
        }
        .right--250 {
          right: -250px;
        }
        .right--300 {
          right: -300px;
        }
        .right--350 {
          right: -350px;
        }
        .right--400 {
          right: -400px;
        }
        .right--450 {
          right: -450px;
        }
        .right--500 {
          right: -500px;
        }

        /* LEFT*/
        .left-0 {
          left: 0px;
        }
        .left-25pc {
          left: 25%;
        }
        .left-50pc {
          left: 50%;
        }
        .left-75pc {
          left: 75%;
        }
        .left-100pc {
          left: 100%;
        }
        .left--25pc {
          left: -25%;
        }
        .left--50pc {
          left: -50%;
        }
        .left--75pc {
          left: -75%;
        }
        .left--100pc {
          left: -100%;
        }
        .left-5 {
          left: 5px;
        }
        .left-10 {
          left: 10px;
        }
        .left-15 {
          left: 15px;
        }
        .left-20 {
          left: 20px;
        }
        .left-25 {
          left: 25px;
        }
        .left-30 {
          left: 30px;
        }
        .left-35 {
          left: 35px;
        }
        .left-40 {
          left: 40px;
        }
        .left-45 {
          left: 45px;
        }
        .left-50 {
          left: 50px;
        }
        .left-60 {
          left: 60px;
        }
        .left-75 {
          left: 75px;
        }
        .left-100 {
          left: 100px;
        }
        .left-125 {
          left: 125px;
        }
        .left-150 {
          left: 150px;
        }
        .left-175 {
          left: 175px;
        }
        .left-200 {
          left: 200px;
        }
        .left-250 {
          left: 250px;
        }
        .left-300 {
          left: 300px;
        }
        .left-350 {
          left: 350px;
        }
        .left-400 {
          left: 400px;
        }
        .left-450 {
          left: 450px;
        }
        .left-500 {
          left: 500px;
        }

        .left--5 {
          left: -5px;
        }
        .left--10 {
          left: -10px;
        }
        .left--15 {
          left: -15px;
        }
        .left--20 {
          left: -20px;
        }
        .left--25 {
          left: -25px;
        }
        .left--30 {
          left: -30px;
        }
        .left--35 {
          left: -35px;
        }
        .left--40 {
          left: -40px;
        }
        .left--45 {
          left: -45px;
        }
        .left--50 {
          left: -50px;
        }
        .left--60 {
          left: -60px;
        }
        .left--75 {
          left: -75px;
        }
        .left--100 {
          left: -100px;
        }
        .left--125 {
          left: -125px;
        }
        .left--150 {
          left: -150px;
        }
        .left--175 {
          left: -175px;
        }
        .left--200 {
          left: -200px;
        }
        .left--250 {
          left: -250px;
        }
        .left--300 {
          left: -300px;
        }
        .left--350 {
          left: -350px;
        }
        .left--400 {
          left: -400px;
        }
        .left--450 {
          left: -450px;
        }
        .left--500 {
          left: -500px;
        }

        /* flex */

        .flex-v {
          display: flex;
          flex-direction: column;
        }
        .flex-v-reverse {
          display: flex;
          flex-direction: column-reverse;
        }
        .flex-h-reverse {
          display: flex;
          flex-direction: row-reverse;
        }
        .flex-h {
          display: flex;
        }

        .flex-1 {
          flex: 1;
        }
        .flex-025 {
          flex: 0.2475;
        }
        .flex-033 {
          flex: 0.3275;
        }
        .flex-050 {
          flex: 0.5;
        }
        .flex-066 {
          flex: 0.6575;
        }
        .flex-075 {
          flex: 0.7475;
        }

        .wrap {
          flex-wrap: wrap;
        }
        .gap-1 {
          gap: 1px;
        }
        .gap-2 {
          gap: 2px;
        }
        .gap-3 {
          gap: 3px;
        }
        .gap-4 {
          gap: 4px;
        }
        .gap-5 {
          gap: 5px;
        }
        .gap-10 {
          gap: 10px;
        }
        .gap-15 {
          gap: 15px;
        }
        .gap-20 {
          gap: 20px;
        }
        .gap-25 {
          gap: 25px;
        }
        .gap-30 {
          gap: 30px;
        }
        .gap-35 {
          gap: 35px;
        }
        .gap-40 {
          gap: 40px;
        }
        .gap-45 {
          gap: 45px;
        }
        .gap-40 {
          gap: 40px;
        }
        .gap-cl-5 {
          column-gap: 5px;
        }
        .gap-cl-10 {
          column-gap: 10px;
        }
        .gap-cl-15 {
          column-gap: 15px;
        }
        .gap-cl-20 {
          column-gap: 20px;
        }
        .gap-cl-25 {
          column-gap: 25px;
        }
        .gap-cl-30 {
          column-gap: 30px;
        }
        .gap-cl-35 {
          column-gap: 35px;
        }
        .gap-cl-40 {
          column-gap: 40px;
        }
        .gap-cl-45 {
          column-gap: 45px;
        }
        .gap-cl-50 {
          column-gap: 50px;
        }

        .justify-start {
          justify-content: start;
        }
        .justify-end {
          justify-content: end;
        }
        .justify-center {
          justify-content: center;
        }
        .justify-between {
          justify-content: space-between;
        }
        .justify-around {
          justify-content: space-around;
        }
        .justify-evenly {
          justify-content: space-evenly;
        }

        .align-start {
          align-items: start;
        }
        .align-end {
          align-items: end;
        }
        .align-center {
          align-items: center;
        }

        .align-self-start {
          align-self: start;
        }
        .align-self-end {
          align-self: end;
        }
        .align-self-center {
          align-self: center;
        }

        .align-content-start {
          align-content: start;
        }
        .align-content-end {
          align-content: end;
        }
        .align-content-center {
          align-content: center;
        }

        .align-content-between {
          align-content: space-between;
        }
        .align-content-around {
          align-content: space-around;
        }

        /* width */

        .w-100 {
          width: 100%;
        }
        .w-90 {
          width: 90%;
        }
        .w-85 {
          width: 85%;
        }
        .w-80 {
          width: 80%;
        }
        .w-75 {
          width: 75%;
        }
        .w-75 {
          width: 75%;
        }
        .w-50 {
          width: 50%;
        }
        .w-25 {
          width: 25%;
        }
        .w-1000px {
          width: 1000px;
        }
        .w-900px {
          width: 900px;
        }
        .w-800px {
          width: 800px;
        }
        .w-700px {
          width: 700px;
        }
        .w-600px {
          width: 600px;
        }
        .w-500px {
          width: 500px;
        }
        .w-450px {
          width: 450px;
        }
        .w-400px {
          width: 400px;
        }
        .w-350px {
          width: 350px;
        }
        .w-300px {
          width: 300px;
        }
        .w-250px {
          width: 250px;
        }
        .w-200px {
          width: 200px;
        }
        .w-175px {
          width: 175px;
        }
        .w-150px {
          width: 150px;
        }
        .w-125px {
          width: 125px;
        }
        .w-100px {
          width: 100px;
        }
        .w-75px {
          width: 75px;
        }
        .w-60px {
          width: 60px;
        }
        .w-50px {
          width: 50px;
        }
        .w-45px {
          width: 45px;
        }

        .w-40px {
          width: 40px;
        }
        .w-30px {
          width: 30px;
        }
        .w-25px {
          width: 25px;
        }
        .w-20px {
          width: 20px;
        }
        .w-15px {
          width: 15px;
        }
        .w-10px {
          width: 10px;
        }
        .w-9px {
          width: 9px;
        }
        .w-8px {
          width: 8px;
        }
        .w-7px {
          width: 7px;
        }
        .w-6px {
          width: 6px;
        }
        .w-5px {
          width: 5px;
        }
        .w-4px {
          width: 4px;
        }
        .w-3px {
          width: 3px;
        }
        .w-2px {
          width: 2px;
        }
        .w-1px {
          width: 1px;
        }
        .w-0 {
          width: 0px;
        }

        .w-100vw {
          width: 100vw;
        }
        .w-75vw {
          width: 75vw;
        }
        .w-50vw {
          width: 50vw;
        }

        /* min-width */

        .min-w-min {
          min-width: min-content;
        }
        .min-w-max {
          min-width: max-content;
        }
        .min-w-100 {
          min-width: 100%;
        }
        .min-w-75 {
          min-width: 75%;
        }
        .min-w-50 {
          min-width: 50%;
        }
        .min-w-25 {
          min-width: 25%;
        }

        .min-w-500px {
          min-width: 500px;
        }
        .min-w-450px {
          min-width: 450px;
        }
        .min-w-400px {
          min-width: 400px;
        }
        .min-w-350px {
          min-width: 350px;
        }
        .min-w-300px {
          min-width: 300px;
        }
        .min-w-250px {
          min-width: 250px;
        }
        .min-w-200px {
          min-width: 200px;
        }
        .min-w-175px {
          min-width: 175px;
        }
        .min-w-150px {
          min-width: 150px;
        }
        .min-w-125px {
          min-width: 125px;
        }
        .min-w-100px {
          min-width: 100px;
        }
        .min-w-75px {
          min-width: 75px;
        }
        .min-w-60px {
          min-width: 60px;
        }
        .min-w-50px {
          min-width: 50px;
        }
        .min-w-40px {
          min-width: 40px;
        }
        .min-w-45px {
          min-width: 45px;
        }
        .min-w-30px {
          min-width: 30px;
        }
        .min-w-25px {
          min-width: 25px;
        }
        .min-w-20px {
          min-width: 20px;
        }
        .min-w-15px {
          min-width: 15px;
        }
        .min-w-10px {
          min-width: 10px;
        }

        .min-w-100vw {
          min-width: 100vw;
        }
        .min-w-75vw {
          min-width: 75vw;
        }
        .min-w-50vw {
          min-width: 50vw;
        }

        /* height */

        .h-100 {
          height: 100%;
        }
        .h-90 {
          height: 90%;
        }
        .h-85 {
          height: 85%;
        }
        .h-80 {
          height: 80%;
        }
        .h-75 {
          height: 75%;
        }
        .h-50 {
          height: 50%;
        }

        .h-100px {
          height: 100px;
        }
        .h-950px {
          height: 950px;
        }
        .h-900px {
          height: 900px;
        }
        .h-850px {
          height: 850px;
        }
        .h-800px {
          height: 800px;
        }
        .h-750px {
          height: 750px;
        }
        .h-700px {
          height: 700px;
        }
        .h-650px {
          height: 650px;
        }
        .h-600px {
          height: 600px;
        }
        .h-550px {
          height: 550px;
        }
        .h-500px {
          height: 500px;
        }
        .h-450px {
          height: 450px;
        }
        .h-400px {
          height: 400px;
        }
        .h-350px {
          height: 350px;
        }
        .h-300px {
          height: 300px;
        }
        .h-250px {
          height: 250px;
        }
        .h-200px {
          height: 200px;
        }
        .h-175px {
          height: 175px;
        }
        .h-150px {
          height: 150px;
        }
        .h-125px {
          height: 125px;
        }
        .h-100px {
          height: 100px;
        }
        .h-75px {
          height: 75px;
        }
        .h-60px {
          height: 60px;
        }
        .h-50px {
          height: 50px;
        }
        .h-30px {
          height: 30px;
        }
        .h-40px {
          height: 40px;
        }
        .h-45px {
          height: 45px;
        }

        .h-25px {
          height: 25px;
        }
        .h-20px {
          height: 20px;
        }
        .h-15px {
          height: 15px;
        }
        .h-10px {
          height: 10px;
        }
        .h-9px {
          height: 9px;
        }
        .h-8px {
          height: 8px;
        }
        .h-7px {
          height: 7px;
        }
        .h-6px {
          height: 6px;
        }
        .h-5px {
          height: 5px;
        }
        .h-4px {
          height: 4px;
        }
        .h-3px {
          height: 3px;
        }
        .h-2px {
          height: 2px;
        }
        .h-1px {
          height: 1px;
        }
        .h-0 {
          height: 0px;
        }

        .h-100vh {
          height: 100vh;
        }
        .h-75vh {
          height: 75vh;
        }
        .h-50vh {
          height: 50vh;
        }

        /* min-height */
        .max-w-max {
          max-width: max-content;
        }
        .max-w-min {
          max-width: min-content;
        }

        .min-h-100 {
          min-height: 100%;
        }
        .min-h-75 {
          min-height: 75%;
        }

        .min-h-50 {
          min-height: 50%;
        }

        .min-h-500px {
          min-height: 500px;
        }
        .min-h-450px {
          min-height: 450px;
        }
        .min-h-400px {
          min-height: 400px;
        }
        .min-h-350px {
          min-height: 350px;
        }
        .min-h-300px {
          min-height: 300px;
        }
        .min-h-250px {
          min-height: 250px;
        }
        .min-h-200px {
          min-height: 200px;
        }
        .min-h-175px {
          min-height: 175px;
        }
        .min-h-150px {
          min-height: 150px;
        }
        .min-h-125px {
          min-height: 125px;
        }
        .min-h-100px {
          min-height: 100px;
        }
        .min-h-75px {
          min-height: 75px;
        }
        .min-h-60px {
          min-height: 60px;
        }
        .min-h-50px {
          min-height: 50px;
        }
        .min-h-30px {
          min-height: 30px;
        }
        .min-h-40px {
          min-height: 40px;
        }
        .min-h-45px {
          min-height: 45px;
        }
        .min-h-30px {
          min-height: 30px;
        }

        .min-h-25px {
          min-height: 25px;
        }
        .min-h-20px {
          min-height: 20px;
        }
        .min-h-15px {
          min-height: 15px;
        }
        .min-h-10px {
          min-height: 10px;
        }

        .min-h-100vh {
          min-height: 100vh;
        }
        .min-h-75vh {
          min-height: 75vh;
        }
        .min-h-50vh {
          min-height: 50vh;
        }
        /* max-height */

        .max-h-100 {
          max-height: 100%;
        }
        .max-h-75 {
          max-height: 75%;
        }

        .max-h-50 {
          max-height: 50%;
        }

        .max-h-500px {
          max-height: 500px;
        }
        .max-h-450px {
          max-height: 450px;
        }
        .max-h-400px {
          max-height: 400px;
        }
        .max-h-350px {
          max-height: 350px;
        }
        .max-h-300px {
          max-height: 300px;
        }
        .max-h-250px {
          max-height: 250px;
        }
        .max-h-200px {
          max-height: 200px;
        }
        .max-h-175px {
          max-height: 175px;
        }
        .max-h-150px {
          max-height: 150px;
        }
        .max-h-125px {
          max-height: 125px;
        }
        .max-h-100px {
          max-height: 100px;
        }
        .max-h-75px {
          max-height: 75px;
        }
        .max-h-60px {
          max-height: 60px;
        }
        .max-h-50px {
          max-height: 50px;
        }
        .max-h-30px {
          max-height: 30px;
        }
        .max-h-40px {
          max-height: 40px;
        }
        .max-h-45px {
          max-height: 45px;
        }
        .max-h-30px {
          max-height: 30px;
        }

        .max-h-25px {
          max-height: 25px;
        }
        .max-h-20px {
          max-height: 20px;
        }
        .max-h-15px {
          max-height: 15px;
        }
        .max-h-10px {
          max-height: 10px;
        }

        .max-h-100vh {
          max-height: 100vh;
        }
        .max-h-75vh {
          max-height: 75vh;
        }
        .max-h-50vh {
          max-height: 50vh;
        }

        /* color y background */

        .color-h1 {
          color: var(--h1-color);
        }

        .color-op-h1 {
          color: var(--op-h1-color);
        }
        .color-h3 {
          color: var(--h3-color);
        }
        .color-subtitle {
          color: var(--subtitle-color);
        }
        .color-active {
          color: var(--active-color);
        }
        .color-op-active {
          color: var(--op-active-color);
        }
        .color-op-complementary {
          color: var(--op-complementary-color);
        }

        .color-error {
          color: var(--color-error);
        }
        .color-success {
          color: var(--color-success);
        }
        .color-red {
          color: red;
        }
        .color-blue {
          color: blue;
        }
        .color-green {
          color: green;
        }
        .color-white {
          color: white;
        }
        .color-black {
          color: black;
        }

        .bg-primary {
          background-color: var(--primary);
        }
        .bg-secondary {
          background-color: var(--secondary);
        }
        .bg-active {
          background-color: var(--active-color);
        }
        .bg-active-1 {
          background-color: var(--active-color-1);
        }
        .bg-op-active {
          background-color: var(--op-active-color);
        }
        .bg-op-complementary {
          background-color: var(--op-complementary-color);
        }
        .bg-h3 {
          background-color: var(--h3-color);
        }
        .bg-h1 {
          background-color: var(--h1-color);
        }
        .bg-red {
          background-color: red;
        }
        .bg-blue {
          background-color: blue;
        }
        .bg-green {
          background-color: green;
        }
        .bg-transparent {
          background-color: transparent;
        }
        .bg-black {
          background-color: black;
        }

        .bg-adidas-img {
          background-color: var(--bg-adidas-img);
        }

        /* margenes */

        .mg-0 {
          margin: 0px;
        }
        .mg-3 {
          margin: 3px;
        }
        .mg-4 {
          margin: 4px;
        }
        .mg-5 {
          margin: 5px;
        }
        .mg-10 {
          margin: 10px;
        }
        .mg-15 {
          margin: 15px;
        }
        .mg-20 {
          margin: 20px;
        }
        .mg-25 {
          margin: 25px;
        }
        .mg-30 {
          margin: 30px;
        }
        .mg-40 {
          margin: 40px;
        }
        .mg-50 {
          margin: 50px;
        }
        .mg-100 {
          margin: 100px;
        }
        .mg-150 {
          margin: 150px;
        }
        .mg-200 {
          margin: 200px;
        }
        .mg-top-0 {
          margin-top: 0px;
        }
        .mg-top-3 {
          margin-top: 3px;
        }
        .mg-top-4 {
          margin-top: 4px;
        }
        .mg-top-5 {
          margin-top: 5px;
        }
        .mg-top-10 {
          margin-top: 10px;
        }
        .mg-top-15 {
          margin-top: 15px;
        }
        .mg-top-20 {
          margin-top: 20px;
        }
        .mg-top-25 {
          margin-top: 25px;
        }
        .mg-top-30 {
          margin-top: 30px;
        }
        .mg-top-33 {
          margin-top: 33px;
        }
        .mg-top-40 {
          margin-top: 40px;
        }
        .mg-top-45 {
          margin-top: 45px;
        }
        .mg-top-50 {
          margin-top: 50px;
        }
        .mg-top-55 {
          margin-top: 55px;
        }
        .mg-top-60 {
          margin-top: 60px;
        }
        .mg-top-65 {
          margin-top: 65px;
        }
        .mg-top-70 {
          margin-top: 70px;
        }
        .mg-top-75 {
          margin-top: 75px;
        }
        .mg-top-80 {
          margin-top: 80px;
        }
        .mg-top-85 {
          margin-top: 85px;
        }
        .mg-top-90 {
          margin-top: 90px;
        }
        .mg-top-95 {
          margin-top: 95px;
        }
        .mg-top-100 {
          margin-top: 100px;
        }
        .mg-top-150 {
          margin-top: 150px;
        }
        .mg-top-200 {
          margin-top: 200px;
        }
        .mg-bottom-0 {
          margin-bottom: 0px;
        }
        .mg-bottom-3 {
          margin-bottom: 3px;
        }
        .mg-bottom-4 {
          margin-bottom: 4px;
        }
        .mg-bottom-5 {
          margin-bottom: 5px;
        }
        .mg-bottom-10 {
          margin-bottom: 10px;
        }
        .mg-bottom-15 {
          margin-bottom: 15px;
        }
        .mg-bottom-20 {
          margin-bottom: 20px;
        }
        .mg-bottom-25 {
          margin-bottom: 25px;
        }
        .mg-bottom-30 {
          margin-bottom: 30px;
        }
        .mg-bottom-40 {
          margin-bottom: 40px;
        }
        .mg-bottom-50 {
          margin-bottom: 50px;
        }
        .mg-bottom-55 {
          margin-bottom: 55px;
        }
        .mg-bottom-60 {
          margin-bottom: 60px;
        }
        .mg-bottom-65 {
          margin-bottom: 65px;
        }
        .mg-bottom-70 {
          margin-bottom: 70px;
        }
        .mg-bottom-75 {
          margin-bottom: 75px;
        }
        .mg-bottom-80 {
          margin-bottom: 80px;
        }
        .mg-bottom-85 {
          margin-bottom: 85px;
        }
        .mg-bottom-90 {
          margin-bottom: 90px;
        }
        .mg-bottom-95 {
          margin-bottom: 95px;
        }
        .mg-bottom-100 {
          margin-bottom: 100px;
        }
        .mg-bottom-150 {
          margin-bottom: 150px;
        }
        .mg-bottom-200 {
          margin-bottom: 200px;
        }

        .mg-right-0 {
          margin-right: 0px;
        }
        .mg-right-3 {
          margin-right: 3px;
        }
        .mg-right-4 {
          margin-right: 4px;
        }
        .mg-right-5 {
          margin-right: 5px;
        }
        .mg-right-10 {
          margin-right: 10px;
        }
        .mg-right-15 {
          margin-right: 15px;
        }
        .mg-right-20 {
          margin-right: 20px;
        }
        .mg-right-25 {
          margin-right: 25px;
        }
        .mg-right-30 {
          margin-right: 30px;
        }
        .mg-right-40 {
          margin-right: 40px;
        }
        .mg-right-50 {
          margin-right: 50px;
        }
        .mg-right-55 {
          margin-right: 55px;
        }
        .mg-right-60 {
          margin-right: 60px;
        }
        .mg-right-65 {
          margin-right: 65px;
        }
        .mg-right-70 {
          margin-right: 70px;
        }
        .mg-right-75 {
          margin-right: 75px;
        }
        .mg-right-80 {
          margin-right: 80px;
        }
        .mg-right-85 {
          margin-right: 85px;
        }
        .mg-right-90 {
          margin-right: 90px;
        }
        .mg-right-95 {
          margin-right: 95px;
        }
        .mg-right-100 {
          margin-right: 100px;
        }
        .mg-right-150 {
          margin-right: 150px;
        }
        .mg-right-200 {
          margin-right: 200px;
        }

        .mg-left-0 {
          margin-left: 0px;
        }
        .mg-left-3 {
          margin-left: 3px;
        }
        .mg-left-4 {
          margin-left: 4px;
        }
        .mg-left-5 {
          margin-left: 5px;
        }
        .mg-left-10 {
          margin-left: 10px;
        }
        .mg-left-15 {
          margin-left: 15px;
        }
        .mg-left-20 {
          margin-left: 20px;
        }
        .mg-left-25 {
          margin-left: 25px;
        }
        .mg-left-30 {
          margin-left: 30px;
        }
        .mg-left-40 {
          margin-left: 40px;
        }
        .mg-left-50 {
          margin-left: 50px;
        }
        .mg-left-55 {
          margin-left: 55px;
        }
        .mg-left-60 {
          margin-left: 60px;
        }
        .mg-left-65 {
          margin-left: 65px;
        }
        .mg-left-70 {
          margin-left: 70px;
        }
        .mg-left-75 {
          margin-left: 75px;
        }
        .mg-left-80 {
          margin-left: 80px;
        }
        .mg-left-85 {
          margin-left: 85px;
        }
        .mg-left-90 {
          margin-left: 90px;
        }
        .mg-left-95 {
          margin-left: 95px;
        }
        .mg-left-100 {
          margin-left: 100px;
        }
        .mg-left-150 {
          margin-left: 150px;
        }
        .mg-left-200 {
          margin-left: 200px;
        }

        /* FONT */
        .ft-size-0 {
          font-size: 0px;
        }
        .ft-size-5 {
          font-size: 5px;
        }
        .ft-size-6 {
          font-size: 6px;
        }
        .ft-size-7 {
          font-size: 7px;
        }
        .ft-size-8 {
          font-size: 8px;
        }
        .ft-size-9 {
          font-size: 9px;
        }
        .ft-size-10 {
          font-size: 10px;
        }
        .ft-size-11 {
          font-size: 11px;
        }
        .ft-size-12 {
          font-size: 12px;
        }
        .ft-size-13 {
          font-size: 13px;
        }
        .ft-size-14 {
          font-size: 14px;
        }
        .ft-size-15 {
          font-size: 15px;
        }
        .ft-size-16 {
          font-size: 16px;
        }
        .ft-size-19 {
          font-size: 19px;
        }
        .ft-size-18 {
          font-size: 18px;
        }
        .ft-size-19 {
          font-size: 19px;
        }
        .ft-size-20 {
          font-size: 20px;
        }
        .ft-size-21 {
          font-size: 21px;
        }
        .ft-size-22 {
          font-size: 22px;
        }
        .ft-size-23 {
          font-size: 23px;
        }
        .ft-size-24 {
          font-size: 24px;
        }
        .ft-size-25 {
          font-size: 25px;
        }
        .ft-size-30 {
          font-size: 30px;
        }
        .ft-size-35 {
          font-size: 35px;
        }
        .ft-size-40 {
          font-size: 40px;
        }
        .ft-size-45 {
          font-size: 45px;
        }
        .ft-size-50 {
          font-size: 50px;
        }
        .ft-size-100 {
          font-size: 100px;
        }
        .ft-size-150 {
          font-size: 150px;
        }
        .ft-size-150 {
          font-size: 150px;
        }
        .ft-size-200 {
          font-size: 200px;
        }

        .ft-wei-3 {
          font-weight: 300;
        }
        .ft-wei-4 {
          font-weight: 400;
        }
        .ft-wei-5 {
          font-weight: 500;
        }
        .ft-wei-6 {
          font-weight: 600;
        }
        .ft-wei-7 {
          font-weight: 700;
        }
        .ft-wei-8 {
          font-weight: 800;
        }
        .ft-wei-9 {
          font-weight: 900;
        }

        /*  TEXT*/

        .txt-deco-none {
          text-decoration: none;
        }
        .txt-align-center {
          text-align: center;
        }
        .txt-align-justify {
          text-align: justify;
        }
        .txt-align-right {
          text-align: right;
        }
        .txt-align-left {
          text-align: left;
        }

        /* padding */

        .pd-0 {
          padding: 0px;
        }
        .pd-3 {
          padding: 3px;
        }
        .pd-5 {
          padding: 5px;
        }
        .pd-6 {
          padding: 6px;
        }
        .pd-7 {
          padding: 7px;
        }
        .pd-8 {
          padding: 8px;
        }
        .pd-9 {
          padding: 9px;
        }
        .pd-10 {
          padding: 10px;
        }
        .pd-15 {
          padding: 15px;
        }
        .pd-20 {
          padding: 20px;
        }
        .pd-25 {
          padding: 25px;
        }
        .pd-30 {
          padding: 30px;
        }
        .pd-35 {
          padding: 35px;
        }
        .pd-40 {
          padding: 40px;
        }
        .pd-45 {
          padding: 45px;
        }
        .pd-50 {
          padding: 50px;
        }

        .pd-top-0 {
          padding-top: 0px;
        }
        .pd-top-5 {
          padding-top: 5px;
        }
        .pd-top-6 {
          padding-top: 6px;
        }
        .pd-top-7 {
          padding-top: 7px;
        }
        .pd-top-8 {
          padding-top: 8px;
        }
        .pd-top-9 {
          padding-top: 9px;
        }
        .pd-top-10 {
          padding-top: 10px;
        }
        .pd-top-15 {
          padding-top: 15px;
        }
        .pd-top-20 {
          padding-top: 20px;
        }
        .pd-top-25 {
          padding-top: 25px;
        }
        .pd-top-30 {
          padding-top: 30px;
        }
        .pd-top-35 {
          padding-top: 35px;
        }
        .pd-top-40 {
          padding-top: 40px;
        }
        .pd-top-45 {
          padding-top: 45px;
        }
        .pd-top-50 {
          padding-top: 50px;
        }

        .pd-bottom-0 {
          padding-bottom: 0px;
        }
        .pd-bottom-5 {
          padding-bottom: 5px;
        }
        .pd-bottom-6 {
          padding-bottom: 6px;
        }
        .pd-bottom-7 {
          padding-bottom: 7px;
        }
        .pd-bottom-8 {
          padding-bottom: 8px;
        }
        .pd-bottom-9 {
          padding-bottom: 9px;
        }
        .pd-bottom-10 {
          padding-bottom: 10px;
        }
        .pd-bottom-15 {
          padding-bottom: 15px;
        }
        .pd-bottom-20 {
          padding-bottom: 20px;
        }
        .pd-bottom-25 {
          padding-bottom: 25px;
        }
        .pd-bottom-30 {
          padding-bottom: 30px;
        }
        .pd-bottom-35 {
          padding-bottom: 35px;
        }
        .pd-bottom-40 {
          padding-bottom: 40px;
        }
        .pd-bottom-45 {
          padding-bottom: 45px;
        }
        .pd-bottom-50 {
          padding-bottom: 50px;
        }

        .pd-right-0 {
          padding-right: 0px;
        }
        .pd-right-5 {
          padding-right: 5px;
        }
        .pd-right-6 {
          padding-right: 6px;
        }
        .pd-right-7 {
          padding-right: 7px;
        }
        .pd-right-8 {
          padding-right: 8px;
        }
        .pd-right-9 {
          padding-right: 9px;
        }
        .pd-right-10 {
          padding-right: 10px;
        }
        .pd-right-15 {
          padding-right: 15px;
        }
        .pd-right-20 {
          padding-right: 20px;
        }
        .pd-right-25 {
          padding-right: 25px;
        }
        .pd-right-30 {
          padding-right: 30px;
        }
        .pd-right-35 {
          padding-right: 35px;
        }
        .pd-right-40 {
          padding-right: 40px;
        }
        .pd-right-45 {
          padding-right: 45px;
        }
        .pd-right-50 {
          padding-right: 50px;
        }

        .pd-left-0 {
          padding-left: 0px;
        }
        .pd-left-5 {
          padding-left: 5px;
        }
        .pd-left-6 {
          padding-left: 6px;
        }
        .pd-left-7 {
          padding-left: 7px;
        }
        .pd-left-8 {
          padding-left: 8px;
        }
        .pd-left-9 {
          padding-left: 9px;
        }
        .pd-left-10 {
          padding-left: 10px;
        }
        .pd-left-15 {
          padding-left: 15px;
        }
        .pd-left-20 {
          padding-left: 20px;
        }
        .pd-left-25 {
          padding-left: 25px;
        }
        .pd-left-30 {
          padding-left: 30px;
        }
        .pd-left-35 {
          padding-left: 35px;
        }
        .pd-left-40 {
          padding-left: 40px;
        }
        .pd-left-45 {
          padding-left: 45px;
        }
        .pd-left-50 {
          padding-left: 50px;
        }

        .pd-rl-0 {
          padding-left: 0px;
          padding-right: 0px;
        }
        .pd-rl-5 {
          padding-left: 5px;
          padding-right: 5px;
        }
        .pd-rl-6 {
          padding-left: 6px;
          padding-right: 6px;
        }
        .pd-rl-7 {
          padding-left: 7px;
          padding-right: 7px;
        }
        .pd-rl-8 {
          padding-left: 8px;
          padding-right: 8px;
        }
        .pd-rl-9 {
          padding-left: 9px;
          padding-right: 9px;
        }
        .pd-rl-10 {
          padding-left: 10px;
          padding-right: 10px;
        }
        .pd-rl-15 {
          padding-left: 15px;
          padding-right: 15px;
        }
        .pd-rl-20 {
          padding-left: 20px;
          padding-right: 20px;
        }
        .pd-rl-25 {
          padding-left: 25px;
          padding-right: 25px;
        }
        .pd-rl-30 {
          padding-left: 30px;
          padding-right: 30px;
        }
        .pd-rl-35 {
          padding-left: 35px;
          padding-right: 35px;
        }
        .pd-rl-40 {
          padding-left: 40px;
          padding-right: 40px;
        }
        .pd-rl-45 {
          padding-left: 45px;
          padding-right: 45px;
        }
        .pd-rl-50 {
          padding-left: 50px;
          padding-right: 50px;
        }
        .pd-rl-5pc {
          padding-left: 5%;
          padding-right: 5%;
        }
        .pd-rl-10pc {
          padding-left: 10%;
          padding-right: 10%;
        }
        .pd-rl-15pc {
          padding-left: 15%;
          padding-right: 15%;
        }
        .pd-rl-20pc {
          padding-left: 20%;
          padding-right: 20%;
        }
        .pd-rl-25pc {
          padding-left: 25%;
          padding-right: 25%;
        }
        .pd-rl-30pc {
          padding-left: 30%;
          padding-right: 30%;
        }
        .pd-rl-35pc {
          padding-left: 35%;
          padding-right: 35%;
        }
        .pd-rl-40pc {
          padding-left: 40%;
          padding-right: 40%;
        }
        .pd-rl-45pc {
          padding-left: 45%;
          padding-right: 45%;
        }
        .pd-rl-50pc {
          padding-left: 50%;
          padding-right: 50%;
        }

        .pd-tb-0 {
          padding-top: 0px;
          padding-bottom: 0px;
        }
        .pd-tb-5 {
          padding-top: 5px;
          padding-bottom: 5px;
        }
        .pd-tb-6 {
          padding-top: 6px;
          padding-bottom: 6px;
        }
        .pd-tb-7 {
          padding-top: 7px;
          padding-bottom: 7px;
        }
        .pd-tb-8 {
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .pd-tb-9 {
          padding-top: 9px;
          padding-bottom: 9px;
        }
        .pd-tb-10 {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .pd-tb-15 {
          padding-top: 15px;
          padding-bottom: 15px;
        }
        .pd-tb-20 {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .pd-tb-25 {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        .pd-tb-30 {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .pd-tb-35 {
          padding-top: 35px;
          padding-bottom: 35px;
        }
        .pd-tb-40 {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .pd-tb-45 {
          padding-top: 45px;
          padding-bottom: 45px;
        }
        .pd-tb-50 {
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .pd-tb-10pc {
          padding-top: 10%;
          padding-bottom: 10%;
        }
        .pd-tb-15pc {
          padding-top: 15%;
          padding-bottom: 15%;
        }
        .pd-tb-20pc {
          padding-top: 20%;
          padding-bottom: 20%;
        }
        .pd-tb-25pc {
          padding-top: 25%;
          padding-bottom: 25%;
        }
        .pd-tb-30pc {
          padding-top: 30%;
          padding-bottom: 30%;
        }
        .pd-tb-35pc {
          padding-top: 35%;
          padding-bottom: 35%;
        }
        .pd-tb-40pc {
          padding-top: 40%;
          padding-bottom: 40%;
        }
        .pd-tb-45pc {
          padding-top: 45%;
          padding-bottom: 45%;
        }
        .pd-tb-50pc {
          padding-top: 50%;
          padding-bottom: 50%;
        }

        /* radius */

        .rd-5 {
          border-radius: 5px;
        }
        .rd-10 {
          border-radius: 10px;
        }
        .rd-12 {
          border-radius: 12px;
        }
        .rd-15 {
          border-radius: 15px;
        }
        .rd-20 {
          border-radius: 20px;
        }

        .rd-25 {
          border-radius: 25px;
        }
        .rd-50 {
          border-radius: 50px;
        }

        /* CURSOR */

        .cursor-pointer {
          cursor: pointer;
        }
        .cursor-pointer:hover {
          cursor: pointer;
        }

        /*  FIN NUEVO SISTEMA*/
      `}</style>
    </>
  );
}

export default MyApp;
