'use strict';

const loud = require('../index');

module.exports = function(config) {
    let browsers = [],
        plugins = [
            'karma-jasmine',
            loud
        ];

    if (process.env.KARMA_BROWSERS) {
        browsers = process.env.KARMA_BROWSERS.split(',');

        for (let name of browsers) {
            plugins.push(`karma-${name.toLowerCase()}-launcher`);
        }
    }

    config.set({
        plugins,
        frameworks: ['jasmine', 'loud'],
        browsers,
        files: ['test.js'],
        reporters: ['dots']
    });
};
