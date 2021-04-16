const fs = require("fs");
const folderName = process.argv[2] || "Project";

try {
	fs.mkdir(folderName);
	fs.writeFileSync(`${folderName}/index.html`);
	fs.writeFileSync(`${folderName}/app.css`);
	fs.writeFileSync(`${folderName}/app.js`);
} catch (e) {
	console.log("Error:");
	consold.log(e);
}
