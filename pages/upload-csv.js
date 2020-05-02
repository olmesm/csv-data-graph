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
        <li>
          MF4 column inside CSV matches the following naming pattern
          `YYYYMMDD_&lt;BIKE NAME&gt;_*` <br />
          ie `<b>20191218_PDE082</b>
          _17083kmF.mf4`
        </li>
      </ul>
    </Layout>
  );
};
