'use strict';

import {Transform} from 'stream';
const _state = Symbol('state');

export default class Context extends Transform {
    constructor(sourceStream) {
        super({objectMode: true});
        sourceStream.pipe(this);
        this[_state] = {};
    }
    _transform(data, encoding, done) {
        if (data && data.toState) {
            Object.assign(this[_state], data.toState());
        }
        done();
    }
    getState() {
        return this[_state];
    }
}