/// <reference path="../typings/browser.d.ts" />

import func from '../src/module-a';
import chai = require('chai');

describe('test-modeule-a', function() {

    it('should behave as expected', () => {
        chai.expect(func().bar).to.equal(2);
    })

});