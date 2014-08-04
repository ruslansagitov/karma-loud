# karma-loud [![Build Status](https://travis-ci.org/ruslansagitov/karma-loud.svg?branch=master)](https://travis-ci.org/ruslansagitov/karma-loud) [![Test Coverage](https://codeclimate.com/github/ruslansagitov/karma-loud/badges/coverage.svg)](https://codeclimate.com/github/ruslansagitov/karma-loud) [![Code Climate](https://codeclimate.com/github/ruslansagitov/karma-loud.png)](https://codeclimate.com/github/ruslansagitov/karma-loud)

Karma plugin for [Loud][], the web accessibility unit-testing framework

## Installing

```
npm install karma-loud --save-dev
```

## Getting Started

```javascript
/* karma.conf.js */
module.exports = function(config) {
    config.set({
        frameworks: ['loud']
    });
};
```

 [Karma]: <http://karma-runner.github.io> "Karma — Testing environment"
 [Loud]: <https://github.com/ruslansagitov/loud> "Loud — Web accessibility unit-testing framework"
