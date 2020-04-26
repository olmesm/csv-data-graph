import { post } from "axios";
import { useState } from "react";

const URL = "/api/upload-csv";

const PROCESS = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

const INITIAL_FILES = [""];

export const SimpleReactFileUpload = () => {
  const [file, setFile] = useState(INITIAL_FILES);
  const [process, setProcess] = useState(PROCESS.INITIAL);

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

    fileUpload()
      .then((response) => {
        console.log(response);
        setProcess(PROCESS.SUCCESS);
      })
      .catch((e) => {
        console.error(e);
        setProcess(PROCESS.ERROR);
      });
  };

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onReset = (e) => {
    e.preventDefault();

    setProcess(PROCESS.INITIAL);
    setFile(INITIAL_FILES);
  };

  if (process === PROCESS.ERROR) {
    return (
      <form onSubmit={onReset}>
        <h1>Error</h1>
        <p>
          There appears to be an error. Please try again or contact support.
        </p>
        <button>Try again?</button>
      </form>
    );
  }

  if (process === PROCESS.SUCCESS) {
    return (
      <form onSubmit={onReset}>
        <h1>Success</h1>
        <p>File was uploaded successfully.</p>
        <button>Upload another?</button>
      </form>
    );
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input type="file" name="file" onChange={onChange} />
      <button type="submit">Upload</button>
    </form>
  );
};
