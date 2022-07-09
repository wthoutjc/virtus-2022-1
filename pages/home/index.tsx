import { Box } from "@mui/material";
import { Layout } from "../../components/layout";

// Components
import { Admin, Teacher } from "../../components/roles";
import { ConnectedLayout } from "../../components/layout";

// Enum
import { Hierarchy } from "../../enum";

// Redux
import { useAppSelector } from "../../hooks";

//Interface
import { DBDataUsers } from "../../interfaces";

interface Props {
  data: DBDataUsers[];
}

const HomePage = ({ data }: Props) => {
  const { user } = useAppSelector((state) => state.auth);

  const { role } = user;

  return (
    <Layout title="Welcome - App">
      <ConnectedLayout>
        {role === Hierarchy.admin && <Admin />}
        {role === Hierarchy.teacher && <Teacher />}
      </ConnectedLayout>
    </Layout>
  );
};

export default HomePage;
