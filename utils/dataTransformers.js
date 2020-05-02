import db from "../db/models";

export const oscaveType = {
  matcher: "oscav-output-",
  insert: (row, next) => {
    return db.DataRow.create({
      time: row["Time[s]"].replace(/^ /, ""),
      mileage: row[" Mileage [km]"].replace(/^ /, ""),
      rpm: row[" RPM [rpm]"].replace(/^ /, ""),
      pm1m: row[" PM1M [kpa]"].replace(/^ /, ""),
      oscav: row[" OSCAVE"].replace(/^ /, ""),
      svhal: row[" SVHALF"].replace(/^ /, ""),
      bikeName: row[" Filename"].replace(
        /.*[0-9]{8}_([A-z0-9]*)_[A-Za-z0-9-_\.'"]*$/,
        "$1"
      ),
    }).then((data) => next(null, data));
  },
};
