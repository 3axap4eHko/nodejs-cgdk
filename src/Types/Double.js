'use strict';

import Type from './Type';

function fromBuffer(buffer) {
    return Type.bufferToArray(Float64Array, buffer)[0];
}
function toBuffer(value) {
    return Type.arrayToBuffer(Float64Array, [value]);
}

export default class Double extends Type {

    static SIZE = Float64Array.BYTES_PER_ELEMENT;

    static fromBuffer(buffer) {
        return new Double(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}