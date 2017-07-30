# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [Unreleased]

TODO: add at least one Added, Changed, Deprecated, Removed, Fixed or Security section

## [2.0.0] 2017-07-30

### Changed
- Breaking: eslint now needs the following dependencies (which will be provided in a new version ecc-gulp-tasks)
    - "babel-eslint": "^7.2.3"
    - "eslint": "^3.19.0"
    - "eslint-config-airbnb": "^15.1.0"
    - "eslint-config-prettier": "^2.3.0"
    - "eslint-plugin-import": "^2.7.0"
    - "eslint-plugin-jsx-a11y": "^5.1.1"
    - "eslint-plugin-prettier": "^2.1.2"
    - "eslint-plugin-react": "^7.1.0"
    - "prettier": "^1.5.3"
- Upgraded dependencies

## [1.12.0] 2017-03-01
### Changed
- Upgraded dependencies

### Removed
- application merge templates

## [1.11.0] 2017-01-02
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
