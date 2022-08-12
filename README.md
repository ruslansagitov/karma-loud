# karma-loud [![Build Status](https://github.com/ruslansagitov/karma-loud/actions/workflows/test.yaml/badge.svg)](https://github.com/ruslansagitov/karma-loud/actions/workflows/test.yaml) [![Coverage Status](https://coveralls.io/repos/ruslansagitov/karma-loud/badge.svg)](https://coveralls.io/r/ruslansagitov/karma-loud) [![Code Climate](https://codeclimate.com/github/ruslansagitov/karma-loud/badges/gpa.svg)](https://codeclimate.com/github/ruslansagitov/karma-loud)

[Karma][] plugin for [Loud][], web accessibility testing helper

## Getting Started

```
npm install karma loud karma-loud --save-dev
```

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
