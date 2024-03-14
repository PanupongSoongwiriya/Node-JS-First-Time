const express = require('express');
const path = require('path');

//Other setting for show detail when call web
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, ()=>{
    debug("Listening on PORT %d", PORT);
})