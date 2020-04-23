import { Layout } from "../components/Layout";
import { SimpleReactFileUpload } from "../components/UploadForm";

export default () => {
  return (
    <Layout>
      <h1>Upload CSV</h1>

      <SimpleReactFileUpload />
    </Layout>
  );
};
