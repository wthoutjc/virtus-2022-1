import { GetStaticProps } from "next";
import { Layout, ConnectedLayout } from "../../../components/layout";
import { IModulo } from "../../../interfaces";

// Components
import { Learn } from "../../../components/learn";

// Database
import { dbModulos } from "../../../database";

interface Props {
  modulos: IModulo[];
}

const LearnPage = ({ modulos }: Props) => {
  return (
    <Layout>
      <ConnectedLayout>
        <Learn modulos={modulos} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const modulos = await dbModulos.getModulos();

  return {
    props: {
      modulos,
    },
  };
};

export default LearnPage;
