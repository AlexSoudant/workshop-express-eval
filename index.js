let chalk = require('chalk');

const app = require('./src/app');

// port
const port = 3000;

// start server here
// console.log(chalk.green('Hello web server'));

app.get('/', function (req, res) {
  res.send('Hello web server')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})