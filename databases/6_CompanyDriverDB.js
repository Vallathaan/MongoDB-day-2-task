
use("Zen_class_programme");

db.createCollection("companyDrives");


db.companyDrives.insertMany([
  {
    userId: 1,
    driveDate: new Date("04-oct-2020"),
    company: "Tesla",
  },
  {
    userId: 1,
    driveDate: new Date("11-oct-2020"),
    company: "FaceBook",
  },
  {
    userId: 2,
    driveDate: new Date("20-oct-2020"),
    company: "Meta",
  },
  {
    userId: 3,
    driveDate: new Date("25-oct-2020"),
    company: "Amazon",
  },
  {
    userId: 2,
    driveDate: new Date("27-oct-2020"),
    company: "TCS",
  },
]);