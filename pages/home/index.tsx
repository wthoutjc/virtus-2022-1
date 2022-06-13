import { Box } from "@mui/material";
import { Layout } from "../../components/layout";

// Components
import { Admin, Client, Employee } from "../../components/roles";
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

  const { hierarchy } = user;

  return (
    <Layout title="Welcome - App">
      <ConnectedLayout>
        <Box sx={{ padding: "0 1em" }}>
          {hierarchy === Hierarchy.admin && <Admin />}
          {hierarchy === Hierarchy.employee && <Employee />}
          {hierarchy === Hierarchy.client && <Client data={data} />}
        </Box>
      </ConnectedLayout>
    </Layout>
  );
};

export default HomePage;
