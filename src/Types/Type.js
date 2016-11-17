'use strict';

const _value = Symbol('value');
const _valueBuffer = Symbol('valueBuffer');

export default class Type {
    static SIZE = 0;

    static arrayToBuffer(BufferType, values) {
        const buffer = new ArrayBuffer(values.length * BufferType.BYTES_PER_ELEMENT);
        const typed = new BufferType(buffer);
        typed.set(values);
        return Buffer.from(buffer);
    }
    static bufferToArray(BufferType, buffer) {
        const typed = new BufferType(buffer);
        return Array.prototype.slice.call(typed);
    }
    static fromBuffer(buffer) {
        throw new Error('fromBuffer not implemented');
    }

    constructor(value, toBuffer) {
        const valueBuffer = toBuffer(value);
        this[_value] = value;
        this[_valueBuffer] = valueBuffer;
    }

    get value() {
        return this[_value];
    }
    get buffer() {
        return this[_valueBuffer];
    }
}
