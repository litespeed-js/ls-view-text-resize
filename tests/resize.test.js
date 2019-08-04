// __tests__/displayUser-test.js
'use strict';

require('litespeed.js');
require('ls-view-text-resize');

test('textarea resize', () => {
    expect(function () {
        document.body.innerHTML = `<textarea data-ls-text-resize>Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! </textarea>`;
        
        window.scrollTo = () => { }; // Skip browser implementation

        window.ls.run(window);

        return document.body.innerHTML.trim();
    }()).toEqual('<textarea style=\"height: 0px;\">Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! Hello World! </textarea>');
});