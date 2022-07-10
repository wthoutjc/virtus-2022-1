import { GetStaticProps } from "next";
import { Layout } from "../../components/layout";

// Components
import { Admin, Teacher } from "../../components/roles";
import { ConnectedLayout } from "../../components/layout";

// Enum
import { Hierarchy } from "../../enum";

// Redux
import { useAppSelector } from "../../hooks";

//Interface
import { IModulo } from "../../interfaces";

// Database
import { dbModulos } from "../../database";

interface Props {
  modulos: IModulo[];
}

const HomePage = ({ modulos }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  const { role } = user;

  return (
    <Layout title="Welcome - App">
      <ConnectedLayout>
        {role === Hierarchy.admin && <Admin />}
        {role === Hierarchy.teacher && <Teacher modulos={modulos} />}
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

export default HomePage;
