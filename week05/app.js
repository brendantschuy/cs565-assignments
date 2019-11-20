var express = require('express');
var path = require('path');
var app = express();
const bodyParser = require('body-parser');

//app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content - Type, Accept");
    next();
});

app.post('/submit', ({body: {name, email, comment}}, res) => {
    res.send(
        `<p>name: ${name}<p>\n` +
        `<p>email: ${email}</p>\n` +
        `<p>comment: ${comment}</p>`
    );
})

var server = app.listen(3000, () => {

});