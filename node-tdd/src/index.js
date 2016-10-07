import {testMethod} from './test-dependency';

export function basicTest() {
    return true;
}

export function stubTest(foo) {
    return testMethod(foo);
}
