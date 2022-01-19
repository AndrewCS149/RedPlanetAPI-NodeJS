const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routing
app.use(routes);

app.listen(app.get("port"), function () {
    console.log("Server started on port " + app.get("port"));
});



