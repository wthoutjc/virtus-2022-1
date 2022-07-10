import { GetStaticPaths, GetStaticProps } from "next";
import { ConnectedLayout, Layout } from "../../../../components/layout";

// Database
import { dbModulos } from "../../../../database";

// Components
import { Submodule } from "../../../../components/learn";

// Interfaces
import { IModulo } from "../../../../interfaces";

interface Props {
  id: string;
  modulo: IModulo;
}

const LearnOptionPage = ({ id, modulo }: Props) => {
  return (
    <Layout>
      <ConnectedLayout>
        <Submodule modulo={modulo} id={id} />
      </ConnectedLayout>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const modulos = await dbModulos.getModulos();

  return {
    paths: modulos
      .map((modulo) =>
        modulo.content.map((data) => ({
          params: { id: data.to },
        }))
      )
      .flat(modulos.length) as [{ params: { id: string } }],
    fallback: false, // "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const modulo = await dbModulos.getSubmodule(id);

  return {
    props: {
      id,
      modulo: JSON.parse(JSON.stringify(modulo)),
    },
    revalidate: 86399,
  };
};

export default LearnOptionPage;
