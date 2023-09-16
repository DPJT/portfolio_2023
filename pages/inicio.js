import Head from "next/head";
import Image from "next/image";
//compoenets
import Container from "components/Container/Container";

export default function InicioPage() {
  return (
    <Container headTitle="Inicio - Portfolio">
      <div className="middleContainer flex-v h-200px bg-red center">
        <h2 className="ft-size-25 ft-wei-5 color-h1 ">Portfolio</h2>
      </div>
      <style jsx>{`
        .middleContainer {
          margin-top: 11vh;
        }
      `}</style>
    </Container>
  );
}
