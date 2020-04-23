import { post } from "axios";
import { useState } from "react";

const URL = "/api/upload-csv";

export const SimpleReactFileUpload = () => {
  const [file, setFile] = useState(null);

  const fileUpload = () => {
    const formData = new FormData();
    formData.append("file", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return post(URL, formData, config);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    fileUpload().then((response) => {
      console.log(response.data);
    });
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input type="file" onChange={onChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
