import * as testDependencyService from '../src/test-dependency';
import test from 'ava';

test('has a test method for stubbing', (t) => {
    t.is(typeof testDependencyService.testMethod, 'function')
});
