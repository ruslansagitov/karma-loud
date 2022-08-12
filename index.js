'use strict';

const path = require('path');

function createPattern(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
}

function initLoud(files) {
    let resolvedPath = path.dirname(require.resolve('loud'));
    let distPath = path.join(resolvedPath, '../dist');

    files.unshift(createPattern(path.join(distPath, 'loud.js')));
}

initLoud.$inject = ['config.files'];

module.exports = {
    'framework:loud': ['factory', initLoud]
};
