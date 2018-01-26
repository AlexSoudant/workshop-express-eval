// You should be able to request (with GET) the web server (port 4400) on URL /bingo and it should return you 'Bingo'.

const app = require('./src/app');
var fs = require('fs');

// port
const port = process.argv[2]|| 4400;

//txt file to read
const textFile = './src/numbers.txt';

function log_file_content(result){
  console.log(result);
}

function read_file(path_to_file, callback){
  fs.readFile(path_to_file, 'utf8', function reading_done(error, file_content) {
    let result = file_content.split(/\r\n|\r|\n/).join(',');
    return callback(result);
  });
}

// start server here
app.get('/bingo', function (req, res) {
  let numbersToDisplay = read_file(textFile, log_file_content);
  console.log('numbersToDisplay', numbersToDisplay);
  res.send(numbersToDisplay);
});


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
