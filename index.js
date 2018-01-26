// You should be able to request (with GET) the web server (port 4400) on URL /bingo and it should return you 'Bingo'.

const app = require('./src/app');

// port
const port = process.argv[2]|| 4400;

// start server here
app.get('/bingo', function (req, res) {
  res.send('Bingo')
})


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
})