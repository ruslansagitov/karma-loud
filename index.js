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
    const resolvedPath = path.dirname(require.resolve('loud'));
    const distPath = path.join(resolvedPath, '../dist');

    files.unshift(createPattern(path.join(distPath, 'loud.js')));
}

initLoud.$inject = ['config.files'];

module.exports = {
    'framework:loud': ['factory', initLoud]
};
