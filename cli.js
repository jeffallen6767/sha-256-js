#!/usr/bin/env node
var sha256 = require("./index"),
	fs = require('fs'),
  utf8 = require('utf8'),
  program = require('commander'),
  pkg = require('./package.json'),
  version = pkg.version;
  
program
  .version(version)
  .option('-f, --file', 'file to apply sha-256')
  /*
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq-sauce', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  */
  .parse(process.argv);

if (program.file) {
  //console.log('sha256 file', program.args[0]);
  var filePath = program.args[0],
    message = fs.readFileSync(filePath),//, 'utf8'
    result = sha256(message);
  console.log(result);
} else if (program.args.length === 1) {
  //console.log('sha256 text', program.args[0]);
  var message = program.args[0],
    result = sha256(
      utf8.encode(message)
    );
  console.log(result);
} else {
  console.log('ERROR: Unknown program', program);
}



  /*
function testFormat(msg, max) {
  var quote = "'",
    max = max | 0,
    len = msg.length,
    result;
  if (max && len > max) {
    result = quote + msg.slice(0, max) + "..." + quote + " [+" + (len - max) + " more characters]";
  } else {
    result = quote + msg + quote;
  }
  return result;
}

testData.forEach(function(tdat) {
  
  var message = tdat[0],
    expected = tdat[1].split(' ').join('');

  tests["sync test sha256() for " + testFormat(message, FORMAT_MAX_MSG_LEN)] = function(test) {
    test.startTime();
    var result = sha256(
      utf8.encode(message)
    );
    test.endTime();
    test.assert.identical(result, expected);
    test.done();
  };
});

// run tests
tester.run(tests);
*/