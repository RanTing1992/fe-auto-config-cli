#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copy = void 0;
var fs = require("node:fs");
var path = require("node:path");
function copy(templateName) {
    var cwd = process.cwd();
    var root = path.join(cwd, './');
    var templateRoot = path.resolve(__dirname, '../template');
    var fileTemplate = path.resolve(templateRoot, templateName);
    var files = fs.readFileSync(fileTemplate);
    console.log(files, '这是个什么');
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        // if(file ==='package.json'){
        // }
    }
}
exports.copy = copy;
