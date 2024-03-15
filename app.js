const express = require('express');
const path = require('path');
const productRouter = express.Router();

//Other setting for show detail when call web
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { username: 'Boy', customers: ['1', '2', '3'] });
});

productRouter.route("/").get((req, res) => {
    res.render("Products", {
        products:[
            {title:'P1', price:45},
            {title:'P2', price:90},
            {title:'P3', price:30},
            {title:'P4', price:65},
        ]
    });
});
productRouter.route("/1").get((req, res) => {
    res.send("My Products1");
});
app.use("/products", productRouter);

app.listen(PORT, () => {
    debug("Listening on PORT %d", PORT);
})