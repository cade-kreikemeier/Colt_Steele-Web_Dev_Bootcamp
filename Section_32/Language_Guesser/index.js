const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);

if (langCode === 'und') {
	console.log("SORRY, COULDN'T FIGURE IT OUT! TRY A LARGER SAMPLE.".red);
} else {
	const language = langs.where('3', langCode);
	console.log(`My best guess is: ${language.name}`.green);
}
