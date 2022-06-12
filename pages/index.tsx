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
import { INotification } from "../interfaces";
import { newNotification, setLandingPosition } from "../reducers";

// uuid
import { v4 as uuid } from "uuid";

// Auth
import { requireNoAuth } from "../auth";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  const handleNotification = () => {
    const payload: INotification = {
      id: uuid(),
      title: "Success:",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, iusto quibusdam laboriosam magni at nesciunt quam. Architecto dignissimos numquam, fugiat rem commodi neque enim optio. Ut odit deserunt explicabo tenetur?",
      severity: "error",
    };
    dispatch(newNotification(payload));
  };

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
          <Landing handleNotification={handleNotification} />
          <Box ref={ludicasRef} className="index__sub-container" id="ludicas">
            <Ludicas />
          </Box>
          <Box ref={proyectoRef} className="index__sub-container" id="proyecto">
            <Nosotros />
          </Box>
          <Box ref={modulosRef} className="index__sub-container" id="modulos">
            <Teoria />
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
    return {
      props: {},
    };
  }
);

export default Home;
