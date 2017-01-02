# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [Unreleased]
### Changed
- Added .tmp build folder to git and npmignore

## [1.10.0] 2017-01-02
### Changed
- removed unnecessary files from .gitignore 

## [1.9.1] 2016-11-27
### Fixed
- npmignore ignores dotfiles again
- rename deprecated eslint parameter

## [1.9.0] 2016-11-27
### Changed
- dotfiles are now copied instead of being symlinked.

## [1.8.0] 2016-11-10

### Added
- yarn related files to ignore files

### Fixed
- correct Makefile editorconfig
- correct global variable `__VERSION__`

## [1.7.1] 2016-10-24

### Fixed
- eslintrc.yml contained an formatting error

## [1.7.0] 2016-10-24

### Added
- global variable `__VERSION__` is now allowed

### Changed
- converted .eslintrc.yml to a real yaml file

## [1.6.0] 2016-09-13

### Added

- `.gitlab` folder with merge request templates will be added upon running `ecc-link-dotfiles`
