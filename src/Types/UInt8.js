'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Uint8Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Uint8Array, [value]);
}

export default class UInt8 extends Type {

    static SIZE = Uint8Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new UInt8(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}