'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Int32Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Int32Array, [value]);
}

export default class Int32 extends Type {

    static SIZE = Int32Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new Int32(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}