import css from "styled-jsx/css";

// DOnde podemos susa rnuevos instituos
// Donde podemos usar nuevas ,etas apara llegar a objetivos que antes creiamo s inalcanzables y todavia  nos pueden parecer obsoleyt+os
export default css`
  /* TODO EL GRID */
  .grid-container {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr min-content;
    background-color: var(--primary);
  }
  /*  // topbar */
  .grid-item:first-child {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 90;
    background-color: var(--primary);
  }

  /* el sidebar */
  .grid-item:nth-child(2) {
    background-color: transparent;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    background-color: var(--primary);
    height: 300vh;
  }

  .grid-item:nth-child(3) {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
  }
`;
