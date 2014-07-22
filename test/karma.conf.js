module.exports = function(config) {
    config.set({
        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',

            require('../index')
        ],
        frameworks: ['jasmine', 'loud'],
        browsers: ['Firefox', 'PhantomJS'],
        files: ['test.js'],
        reporters: ['dots']
    });
};
