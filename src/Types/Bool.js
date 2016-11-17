'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Uint8Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Uint8Array, [value ? 1 : 0]);
}

export default class Bool extends Type {

    static SIZE = Uint8Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new Bool(fromBuffer(buffer));
    }
    constructor(value) {
        super(value ? 1 : 0, toBuffer);
    }
    get value() {
        return !!super.value;
    }
}