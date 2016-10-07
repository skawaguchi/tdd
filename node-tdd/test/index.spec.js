import * as App from '../src/';
import * as testDependencyService from '../src/test-dependency';

import sinon from 'sinon';
import test from 'ava';

let sandbox;

test.beforeEach(() => {
    sandbox = sinon.sandbox.create();
});

test.afterEach(() => {
    sandbox.restore();
});

test('basic test', (t) => {
    t.is(App.basicTest(), true);
});

test('basic stubbing', (t) => {
    const fakeStubValue = 'baz';
    const fakeValue = 'someValue';

    const stub = sandbox.stub(testDependencyService, 'testMethod')
        .returns(fakeStubValue);

    App.stubTest(fakeValue);

    sinon.assert.calledWithExactly(stub, fakeValue);
});
