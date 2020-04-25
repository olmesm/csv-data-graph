import formidable from "formidable";
import { parse as csvParse } from "fast-csv";

const form = formidable();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  form.parse(req, (err, fields, files) => {
    // res.send("ok");
  });

  form.onPart = (part) => {
    part
      .pipe(csvParse())
      .on("error", (error) => {
        console.error(error);
      })
      .on("data", (row) => {
        console.log(row);
      });
    // .on("end", (rowCount) => {
    //   console.log(`Parsed ${rowCount} rows`);
    //   res.write("Parsed");
    // });
  };

  form.on("end", () => {
    res.send("OK 1");
  });
};
