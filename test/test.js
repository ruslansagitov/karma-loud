'use strict';

describe('karma-loud', function() {
    beforeEach(function() {
        this.button = document.createElement('button');
        this.button.innerHTML = 'Join';
    });

    it('works', function() {
        expect(loud.say(this.button)).toEqual(['Join', 'button']);
    });
});
