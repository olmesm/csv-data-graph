import * as csv from "fast-csv";
import path from "path";
import fs from "fs";
import formidable from "formidable";

import * as dataTransformers from "../../utils/dataTransformers";

export const config = {
  api: {
    bodyParser: false,
  },
};

const processCsv = ({ fileName, filePath }) => {
  const xformers = Object.keys(dataTransformers);
  const xformerName = xformers.find((xformer) =>
    fileName.startsWith(dataTransformers[xformer].matcher)
  );

  return new Promise((resolve, reject) => {
    fs.createReadStream(path.resolve(filePath))
      .pipe(csv.parse({ delimiter: ";", headers: true }))
      .transform(dataTransformers[xformerName].insert)
      .on("error", reject)
      .on("data", (row) => {
        // dont do anything with the returned data for now
        // however this is needed to keep track of the process
        console.log({ processCsvRow: row });
      })
      .on("end", resolve);
  });
};

export default async (req, res) => {
  const { files } = await new Promise((resolve, reject) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      resolve({ fields, files });
    });
  });

  if (!files) {
    throw new Error("Error processing file upload");
  }

  const fileName = files.file.name;
  const filePath = files.file.path;

  const result = await processCsv({ fileName, filePath });

  res.send(result);
};
