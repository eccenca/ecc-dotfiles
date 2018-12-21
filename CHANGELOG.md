# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/) and [Keep A Changelog's Format](http://keepachangelog.com/).

## [2.6.0] 2018-12-21

### Changed
- several eslint rules

## [2.5.2] 2018-08-24

### Added
- MR template now contains a checkbox for queries

## [2.5.1] 2018-06-12

### Added
- add eslintignore template

### Changed
- template for component merge request

## [2.5.0] 2018-02-13

### Changed
- Make `prefer-destructuring` into a warning

## [2.4.0] 2018-02-09

### Changed
- Turn `react/jsx-boolean-value` off

## [2.3.2] 2018-01-23

### Fixed
- ignore gulpfile and buildConfig in root dev dependency check
- npm registry in yarn lock

## [2.3.1] 2017-12-11

### Fixed
- Make sure yarn includes all files in `copyFiles` and `linkFiles`

## [2.3.0] 2017-12-11

### Changed
 -  strictness of several eslint checks has been lowered:
      -  `import/no-extraneous-dependencies` does not error in ui-test and test folders anymore
      -  `react/jsx-no-bind`, `react/forbid-prop-types`, `react/prefer-es6-class`,
          `react/prop-types`, `react/require-default-props` and `react/sort-comp`


## [2.2.0] 2017-11-01

### Changed
- Renamed package to `@eccenca/dotfiles`

## [2.1.0] 2017-08-04

### Added

- added `no-warning-comments` to eslint rules

## [2.0.1] 2017-07-30

### Fixed

- prettier parameter `trailingComma`

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
