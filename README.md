# dotfiles

This repository provides common files for elds-ui javascript repositories:

*   `.babelrc` configuration
*   `.eslintrc` configuration
*   `.editorconfig` configuration
*   Several files are added to `.npmignore` and `.gitignore` files between a `#START` and an `#END` tag.
*   `.gitlab` configuration folder is copied to the current project

To use this package simply install it as a dev dependency and run it afterwards:

```
npm install --save-dev ecc-dotfiles
node_modules/.bin/ecc-link-dotfiles
```

or add it as an init script to the package.json to run it after each `npm install`

```
{
  "name": "example",
  "version": "6.2.0",
  "scripts": {
    "init": "ecc-link-dotfiles",
    "prepublish": "npm run init && npm run build"
  },
  "devDependencies": {
    "ecc-dotfiles": "^2.6.0"
  }
}
```
