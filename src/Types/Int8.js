'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Int8Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Int8Array, [value]);
}

export default class Int8 extends Type {

    static SIZE = Int8Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new Int8(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}