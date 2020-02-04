var path = require('path');
var fs = require('fs-extra');
const webpackMerge = require('webpack-merge');
const {dev, prod} = require('@ionic/app-scripts/config/webpack.config');
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, './manifest.json')));

console.log("Clonning common files");
// Copy custom setup
try {
    var dir = path.join(__dirname,'build/*');
    fs.copySync(dir, '../static/*');
} catch (err) {
    console.log("catch error");
}
