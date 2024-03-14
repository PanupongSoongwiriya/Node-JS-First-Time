const express = require('express');

//Other setting for show detail when call web
const debug = require('debug')('app');
const morgan = require('morgan');

const path = require('path');

const app = express();
const port = 2005;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
    res.send("Hello world 333");
});

app.listen(port, ()=>{
    debug("Listening on port %d", port);
})