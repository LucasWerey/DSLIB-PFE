const fs = require('fs')
const path = require('path')

// Read package.json and get the version
const packageJson = require('../package.json')
const version = packageJson.version

let readme = fs.readFileSync(path.join(__dirname, '../README.md'), 'utf8')

readme = readme.replace(/@lucaswerey\/dslib-pfe@[\d.]+/g, `@lucaswerey/dslib-pfe@${version}`)

fs.writeFileSync(path.join(__dirname, '../README.md'), readme)

console.log('\x1b[32m%s\x1b[0m', `Updated README.md to version ${version}`);
