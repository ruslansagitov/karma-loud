var PATH = require('path');

var createPattern = function(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
};

var initLoud = function(files) {
    var resolvedPath = PATH.dirname(require.resolve('loud')),
        distPath = PATH.join(resolvedPath, '../dist');

    files.unshift(createPattern(PATH.join(distPath, 'loud.js')));
};

initLoud.$inject = ['config.files'];

module.exports = {
    'framework:loud': ['factory', initLoud]
};
