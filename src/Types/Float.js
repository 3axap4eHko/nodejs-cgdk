'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Float32Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Float32Array, [value]);
}

export default class Float extends Type {

    static SIZE = Float32Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new Float(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}