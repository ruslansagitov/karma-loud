# karma-loud [![Build Status](https://travis-ci.org/ruslansagitov/karma-loud.svg?branch=master)](https://travis-ci.org/ruslansagitov/karma-loud) [![Coverage Status](https://coveralls.io/repos/ruslansagitov/karma-loud/badge.svg)](https://coveralls.io/r/ruslansagitov/karma-loud) [![Code Climate](https://codeclimate.com/github/ruslansagitov/karma-loud/badges/gpa.svg)](https://codeclimate.com/github/ruslansagitov/karma-loud)

Karma plugin for [Loud][], web accessibility testing helper

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
 [Loud]: <https://github.com/ruslansagitov/loud> "Loud — Web accessibility testing helper"
