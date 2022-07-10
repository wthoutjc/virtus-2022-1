import { GetServerSideProps } from "next";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

// Components
import { Layout } from "../components/layout";
import {
  Nosotros,
  Ludicas,
  Teoria,
  Footer,
  Landing,
} from "../components/landing";

// Redux
import { useAppDispatch } from "../hooks";
import { setLandingPosition } from "../reducers";

// Auth
import { requireNoAuth } from "../auth";

// Database
import { dbModulos } from "../database";
import { IModulo } from "../interfaces";

interface Props {
  modulos: IModulo[];
}

const Home = ({ modulos }: Props) => {
  const dispatch = useAppDispatch();

  const ludicasRef = useRef<HTMLDivElement>(null);
  const proyectoRef = useRef<HTMLDivElement>(null);
  const modulosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(
      setLandingPosition({
        ludicas: ludicasRef.current!.offsetTop,
        proyecto: proyectoRef.current!.offsetTop,
        modulos: modulosRef.current!.offsetTop,
      })
    );
  }, [dispatch]);

  return (
    <>
      <Layout title={"Home - VIRTUS Training"}>
        <Box className="index__container">
          <Landing />
          <Box ref={ludicasRef} className="index__sub-container" id="ludicas">
            <Ludicas />
          </Box>
          <Box ref={proyectoRef} className="index__sub-container" id="proyecto">
            <Nosotros />
          </Box>
          <Box ref={modulosRef} className="index__sub-container" id="modulos">
            <Teoria modulos={modulos} />
          </Box>
          <Box className="index__sub-container" id="footer">
            <Footer />
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireNoAuth(
  async (_ctx) => {
    const modulos = await dbModulos.getModulos();
    return {
      props: { modulos },
    };
  }
);

export default Home;
