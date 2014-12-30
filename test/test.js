/* global Loud, document, describe, it, beforeEach, afterEach, expect */
'use strict';

describe('karma-loud', function() {
    var loud, button;

    beforeEach(function() {
        loud = new Loud();
        button = document.createElement('button');
        button.innerHTML = 'Join';
        document.body.appendChild(button);
    });

    afterEach(function() {
        document.body.removeChild(button);
    });

    it('works', function() {
        expect(loud.say(button)).toEqual([
            'Join', 'button'
        ]);
    });
});
