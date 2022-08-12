/* globals loud, document */
'use strict';

describe('karma-loud', () => {
    let button;

    beforeEach(() => {
        button = document.createElement('button');
        button.innerHTML = 'Join';
        document.body.appendChild(button);
    });

    afterEach(() => {
        document.body.removeChild(button);
    });

    it('works', () => {
        expect(loud.say(button)).toEqual(['Join', 'button']);
    });
});
