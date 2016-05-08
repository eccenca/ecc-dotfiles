#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var eol = require('os').EOL;

var cwd = process.cwd();

var indexOf = cwd.indexOf('node_modules');

var destFolder = path.join(cwd, path.relative(cwd, cwd.substr(0, indexOf)));

console.info('Running ecc-dotfiles install.js');
console.info('');

var dotFilePath = path.join(cwd, 'dotfiles');

// read all dotfiles
var dotFiles = fs.readdirSync(dotFilePath);


process.chdir(destFolder);
console.log('Changing working dir: ' + process.cwd());

// create symlink for dotfiles
dotFiles.forEach(function(file) {
    var dotfileTemplate = path.join(dotFilePath, file);
    var dest = file;

    if (fs.existsSync(destFolder)) {

        if (fs.existsSync(dest)) {
            var realPath = fs.realpathSync(dest);

            if (realPath === dest) {
                console.warn('ATTENTION: real ' + file + ' exists, will not overwrite with symlink')
            } else if (realPath === dotfileTemplate) {
                console.info(file + ' is already correctly symlinked. Doing nothing.');
            } else if (typeof realPath === 'string') {
                realPath = realPath.split(path.sep);
                var e = realPath.length - 1;
                var d = e - 1;
                var c = d - 1;
                if (realPath[c] === 'common-files' && realPath[d] === 'dotfiles' && realPath[e] === file) {
                    fs.unlink(dest, unlinkCallBack.bind(null, realPath, dotfileTemplate, dest));
                } else {
                    console.warn('ATTENTION: An alternative ' + file + ' exists which may be incompatible with ecc-dotfiles.')
                }
            } else {
                console.warn('ATTENTION: An alternative ' + file + ' exists which may be incompatible with ecc-dotfiles.')
            }
        } else {
            createSymlink(path.relative(destFolder, dotfileTemplate), file);
        }


    }
});

var templatePath = path.join(cwd, 'templates');

feedTemplateIntoIgnoreFile(path.join(destFolder, '.npmignore'), path.join(templatePath, 'npmignore.template'));
feedTemplateIntoIgnoreFile(path.join(destFolder, '.gitignore'), path.join(templatePath, 'gitignore.template'));

console.info('');
console.info('Finished ecc-dotfiles install.js');

function feedTemplateIntoIgnoreFile(ignoreFile, templateFile) {
    console.info('Feeding Template into ' + ignoreFile + '.');
    if (fs.existsSync(ignoreFile)) {
        var contents =
            fs.readFileSync(ignoreFile, 'utf8');
        contents = contents.replace(/#START[\s\S]+#END/igm,
            '').replace(/^(\s*\r?\n)+/i, '');
        contents = fs.readFileSync(templateFile, 'utf8') + eol + contents;
        contents =
            contents.split(/\r?\n/);
        var ignored = [];
        var result = [];
        var addAll = false;
        contents.forEach(function(line) {
            if (line === '') {
                result.push(line);
                return;
            }
            if (line.match(/^\s*#/) === null) {
                if (addAll || ignored.indexOf(line)
                    === -1) {
                    ignored.push(line);
                    result.push(line);
                }
            } else {
                result.push(line);
            }
            if (line === '#START') {
                addAll =
                    true;
            }
            if (line === '#END') {
                addAll = false;
            }
        });
        result = result.join(eol).replace(/(\r?\n)+$/i, eol);
        fs.writeFileSync(ignoreFile, result)
    }
}

function createSymlink(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.symlinkSync(src, dest, 'file');
        console.info('Create Symlink to ' + dest);
    } else {
        console.info(dest + ' already exists. Doing nothing.');
    }
}

function unlinkCallBack(file, src, dest, err) {
    if (err === null) {
        console.info('Symlink to old ' + file.join(path.sep) + ' successfully deleted');
        createSymlink(src, dest);
    }
}
