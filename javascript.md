# What I've learnt so far

##  Lesson 2: Transpiling
- Refresher on npm usage: local vs global.
- Refresher on nvm usage to isolate versions of node.
- Initialize a project with `npm init -y`.
- Configure Babel with presets, plugins and sourceMaps.
- Install babel-cli, and the required presets and plugins.
- Configure a script for running babel in the package.json file.
- Learnt that npx can run local packages as opposed to npm.
- List the installed (top-level) packages with `npm ls -depth=0`.
- Packages we're using for Babel:
```
$ npm install babel-cli --save-dev
$ npm install babel-preset-es2015 --save-dev
$ npm install babel-preset-stage-0 --save-dev
$ npm install babel-plugin-transform-decorators-legacy --save-dev
```

## Lesson 2: Bundling Modules
