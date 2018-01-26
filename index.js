const app = require('./src/app');

// port
const port = process.argv[2]|| 3000;

// start server here
app.get('/', function (req, res) {
  res.send('Hello web server')
})


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
})