import { Layout } from "../components/Layout";
import { SimpleReactFileUpload } from "../components/UploadForm";

export default () => {
  return (
    <Layout>
      <h1>Upload CSV</h1>

      <SimpleReactFileUpload />

      <h2>Assumptions</h2>
      <ul>
        <li>Filename matches the available graphs - ie `oscav-output-`</li>
      </ul>
    </Layout>
  );
};
