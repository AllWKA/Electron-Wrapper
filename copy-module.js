const fs = require('fs');
const path = require('path');

function copyModule(from, to) {
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  const files = fs.readdirSync(from);

  files.forEach(file => {
    const fromPath = path.join(from, file);

    const toPath = path.join(to, file);

    if (fs.lstatSync(fromPath).isDirectory()) {
      copyModule(fromPath, toPath);
    } else {
      fs.copyFileSync(fromPath, toPath);
    }
  });
}

const args = process.argv.slice(2);

const toModule = args[0];

const modulePath = args[1];

if (!modulePath || !toModule) {
  console.error('Usage: node copyFolder.js <toDir> <fromDir>');

  process.exit(1);
}

try {
  copyModule(modulePath, toModule);
} catch (error) {
  console.error(error);
}
