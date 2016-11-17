'use strict';

import {toHex} from 'yyf-core/cast';

function padZeroLeft(value, size) {
    return `0000000000000000000${value}`.slice(-size);
}
import Type from './Type';

function fromBuffer(buffer) {
    const hex = buffer.toString('hex');
    return parseInt(hex, 16);

}
function toBuffer(value) {
    return Buffer.from(padZeroLeft(toHex(value),16), 'hex');
}

export default class UInt64 extends Type {

    static SIZE = 8;

    static fromBuffer(buffer) {
        return new UInt64(fromBuffer(buffer));
    }
    constructor(value) {
        super(value, toBuffer);
    }
}