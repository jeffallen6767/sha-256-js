
var sha256 = require("./sha256"),
	fs = require('fs');

function testing() {
	/*
	tests
	*/
	var tests = [
	/*
		[
			"",
			"E3B0C442 98FC1C14 9AFBF4C8 996FB924 27AE41E4 649B934C A495991B 7852B855"
		],
	
		[
			"abc",
			"BA7816BF 8F01CFEA 414140DE 5DAE2223 B00361A3 96177A9C B410FF61 F20015AD"
		],
	
		[
			"abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq",
			"248D6A61 D20638B8 E5C02693 0C3E6039 A33CE459 64FF2167 F6ECEDD4 19DB06C1"
		],
	*/
		[
			fs.readFileSync("./5k.txt", 'utf8'),
			"82FF26C4 0E394578 2B37ECB7 CA844E60 E850C8B9 B1B5FBE3 4486AF29 FE8B612E"
		],
	
	/*
		[
			fs.readFileSync("./a_1m.dat.txt", 'utf8'),
			"CDC76E5C 9914FB92 81A1C7E2 84D73E67 F1809A48 A497200E 046D39CC C7112CD0"
		]
	*/
	];

	tests.forEach(function(test, index) {
		
		var debugging = false,
			message = test[0],
			expected = debugging ? test[1].toUpperCase() : test[1].split(' ').join(''),
			output, hash, extra, err, result,
			start, end, elapsed;

		// begin test:
		start = new Date();

		output = sha256(message, debugging);

		end = new Date();

		elapsed = end.getTime() - start.getTime();

		hash = debugging ? output[0] : output;
		extra = debugging ? output[1] : 0;
		err = debugging ? output[2]: null;
		result = hash === expected;

		if (debugging) {
			console.log(" ");
			console.log("DEBUG:");
			extra.forEach(function(str, idx) {
				console.log(idx, str);
			});
		}

		console.log(" ");
		console.log("test", index+1);
		console.log("message", "'" + message + "'");
		console.log("expected", expected);
		console.log("    hash", hash);
		console.log("result", result, "in", elapsed, "milliseconds");

		if (result) {
			console.log("SUCCESS!");
		} else {
			console.error("ERROR!");
		}

		if (err) {
			console.error(err);
		}
		
		console.log(" ");
		console.log("--------------");
		console.log(" ");

	});
}

testing();
