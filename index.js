'use strict';

let PATH = require('path');

let createPattern = function(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
};

let initLoud = function(files) {
    let resolvedPath = PATH.dirname(require.resolve('loud')),
        distPath = PATH.join(resolvedPath, '../dist');

    files.unshift(createPattern(PATH.join(distPath, 'loud.js')));
};

initLoud.$inject = ['config.files'];

module.exports = {
    'framework:loud': ['factory', initLoud]
};
