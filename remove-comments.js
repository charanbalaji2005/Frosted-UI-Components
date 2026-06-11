const fs = require("fs");
const path = require("path");
const stripComments = require("strip-comments");

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== "node_modules" && file !== "dist") {
        getFiles(path.join(dir, file), fileList);
      }
    } else {
      if (file.endsWith(".ts") || file.endsWith(".tsx")) {
        fileList.push(path.join(dir, file));
      }
    }
  }
  return fileList;
}

const dirs = [
  path.join(__dirname, "src"),
  path.join(__dirname, "playground", "src"),
  path.join(__dirname, "registry"),
];

let totalFiles = 0;

for (const dir of dirs) {
  if (fs.existsSync(dir)) {
    const files = getFiles(dir);
    for (const file of files) {
      const code = fs.readFileSync(file, "utf8");
      // keep protected comments if needed, but the user requested all
      const stripped = stripComments(code);
      
      // Also let's clean up multiple empty lines that might be left by stripped comments
      const cleaned = stripped.replace(/^\s*[\r\n]/gm, "\n").replace(/\n{3,}/g, "\n\n");
      
      fs.writeFileSync(file, cleaned, "utf8");
      totalFiles++;
    }
  }
}

console.log(`Successfully removed comments from ${totalFiles} files.`);
