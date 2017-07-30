#!/usr/bin/env node

/* eslint no-console: "off", no-use-before-define: "error" */

const fs = require('fs-extra');
const path = require('path');
const eol = require('os').EOL;

console.info('Running ecc-link-dotfiles');
console.info('');

// This should be the folder in which `ecc-link-dotfiles` is run
let destFolder = process.cwd();

const indexOf = destFolder.indexOf('node_modules');

// If somehow we are not in the root of the node app, but somewhere in the node_modules folder
if (indexOf >= 0) {
    destFolder = path.join(
        destFolder,
        path.relative(destFolder, destFolder.substr(0, indexOf)),
    );
    process.chdir(destFolder);
}

console.info('Current working directory:', process.cwd());

const copyFiles = path.join(__dirname, 'copyFiles');

try {
    fs.copySync(copyFiles, destFolder, {
        clobber: true,
    });
    console.log('Copied .dotfiles');
} catch (err) {
    console.log('Error copying .dotfiles');
    console.error(err);
}

// Feed Template for each ignore file into the file
const templatePath = path.join(__dirname, 'templates');

// read all dotfiles
const templateFiles = fs.readdirSync(templatePath);

templateFiles.forEach(templateFileName => {
    const ignoreFileName = `.${templateFileName.replace('.template', '')}`;

    const ignoreFile = path.join(destFolder, ignoreFileName);
    const templateFile = path.join(templatePath, templateFileName);

    console.info(
        `Feeding Template ${path.relative(
            destFolder,
            templateFile,
        )} into ${ignoreFileName}.`,
    );

    if (fs.existsSync(ignoreFile)) {
        let contents = fs.readFileSync(ignoreFile, 'utf8');
        contents = contents
            .replace(/#START[\s\S]+#END/gim, '')
            .replace(/^(\s*\r?\n)+/i, '');
        contents = fs.readFileSync(templateFile, 'utf8') + eol + contents;
        contents = contents.split(/\r?\n/);
        const ignored = [];
        let result = [];
        let addAll = false;
        contents.forEach(line => {
            if (line === '') {
                result.push(line);
                return;
            }
            if (line.match(/^\s*#/) === null) {
                if (addAll || ignored.indexOf(line) === -1) {
                    ignored.push(line);
                    result.push(line);
                }
            } else {
                result.push(line);
            }
            if (line === '#START') {
                addAll = true;
            }
            if (line === '#END') {
                addAll = false;
            }
        });
        result = result.join(eol).replace(/(\r?\n)+$/i, eol);
        fs.writeFileSync(ignoreFile, result);
    }
});

console.info('');
console.info('Finished ecc-link-dotfiles');
