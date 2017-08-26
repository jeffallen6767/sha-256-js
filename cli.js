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
  .parse(process.argv);

if (program.file) {
  var filePath = program.args[0],
    message = fs.readFileSync(filePath),
    result = sha256(message);
  console.log(result);
} else if (program.args.length === 1) {
  var message = program.args[0],
    result = sha256(
      utf8.encode(message)
    );
  console.log(result);
} else {
  console.log('ERROR: Unknown program', program);
}
