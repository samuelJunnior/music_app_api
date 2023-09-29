const express = require('express');
const app = express();
const serveIndex = require('serve-index')

app.use(express.json());
app.use(
  "/public",
  express.static("public"),
  serveIndex("public", { icons: true })
);

const dbConn = require('../config/db/db_conn_config');
dbConn();

const dataLoader = require('../config/db/data_loader');
dataLoader();

const router = require('../config/router/router');
app.use('/api', router);

app.use((err, req, res) => {
  res.status(err.statusCode).send({
    success: false,
    message: err.message
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Initialized application on port ${port}`);
});