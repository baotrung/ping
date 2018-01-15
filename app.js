const express = require('express');
const app = express();

$port = parseInt(process.argv[2],10);
$host = process.argv[3];

app.get('/ping', function (req, res) {
    res.send('Hello World!')
})

app.listen($port,$host, function () {
    console.log('Example app listening on port ' + $port + "!");
  })