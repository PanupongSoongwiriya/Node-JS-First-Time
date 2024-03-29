const express = require('express');
const path = require('path');

//Other setting for show detail when call web
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { username: 'Boy', customers: ['1', '2', '3'] });
});

app.use("/products", productsRouter);

app.listen(PORT, () => {
    debug("Listening on PORT %d", PORT);
})