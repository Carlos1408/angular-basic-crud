const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/angular-crud", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
