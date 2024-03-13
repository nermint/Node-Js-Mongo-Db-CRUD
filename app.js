const express = require("express");
const connectDB = require("./middleware/connectDb");
const routes = require("./routes");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swagger/swagger-config");

const app = express();

connectDB();

app.listen(8080);

app.set("view engine", "ejs");

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/", routes);
