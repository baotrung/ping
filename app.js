const express = require('express')
var rp = require('request-promise');
const app = express()

const action = process.argv[2]
const serverArr = process.argv[3].split(':')
const host = serverArr[0]
const port = serverArr[1]

const listen = (_host,_port) => {
    app.get('/ping', function (req, res) {
        res.send('ok')
    })
    
    app.listen(_port,_host, function () {
        console.log('Example app listening on port ' + _port + "!")
    })
}

const ping = (_host,_port) => {
    const url = 'http://'+_host+':'+_port+'/ping'
    console.log('pinging ' + url)
    var options = {
        uri: url,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    
    rp(options)
        .then(function (res) {
            console.log(res)
        })
        .catch(function (err) {
            console.log('haha',err.message)
        });
}



switch (action){
    case 'listen': 
        listen(host,port) 
        break
    case 'ping':
        ping(host,port)
        break
    default :
        console.log('action unknow! (' + action + ')')
        break

}



