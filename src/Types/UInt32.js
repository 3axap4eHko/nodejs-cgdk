'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Uint32Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Uint32Array, [value]);
}

export default class UInt32 extends Type {

    static SIZE = Uint32Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new UInt32(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}