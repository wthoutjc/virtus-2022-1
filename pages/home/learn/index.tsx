import { Layout, ConnectedLayout } from "../../../components/layout";

// Components
import { Learn } from "../../../components/learn";

const LearnPage = () => {
  return (
    <Layout>
      <ConnectedLayout>
        <Learn />
      </ConnectedLayout>
    </Layout>
  );
};

export default LearnPage;
