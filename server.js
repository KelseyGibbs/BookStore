const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
const logger = require("morgan");
const mongoose = require('mongoose');

// Define middleware here
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

// //   Connect to the Mongo DB
// let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks";

// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
