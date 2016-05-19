'use strict';

var loud = require('../index');

module.exports = function(config) {
    var browsers = [],
        plugins = [
            'karma-jasmine',
            loud
        ];

    if (process.env.KARMA_BROWSERS) {
        browsers = process.env.KARMA_BROWSERS.split(',');

        browsers.forEach(function(name) {
            plugins.push('karma-' + name.toLowerCase() + '-launcher');
        });
    }

    config.set({
        plugins: plugins,
        frameworks: ['jasmine', 'loud'],
        browsers: browsers,
        files: ['test.js'],
        reporters: ['dots']
    });
};
