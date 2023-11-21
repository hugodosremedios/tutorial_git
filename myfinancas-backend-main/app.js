const express = require('express');
const app = express();
const router = require('./router/router');
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "content-type")
    res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATH, OPTIONS")
app.use(cors());
next()
})


app.use(router);

app.listen(8080, function (request, response) {
    console.log("Servidor rodando na porta 8080");
});


