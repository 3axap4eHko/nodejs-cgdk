'use strict';

import {toHex, fromBytesToHex, toComplexArray, fromUTF8ToArray, fromArrayToUTF8} from 'yyf-core/cast';

function padZeroLeft(value, size) {
    return `0000000000000000000${value}`.slice(-size);
}

export class UInt64Array {
    constructor(bufferOrArrayOrLength, byteOffset, length) {

    }
}
UInt64Array.BYTES_PER_ELEMENT = 8;


export function valuesToBuffer(BufferType, ...values) {
    const buffer = new ArrayBuffer(values.length * BufferType.BYTES_PER_ELEMENT);
    const typed = new BufferType(buffer);
    typed.set(values);
    return Buffer.from(buffer);
}
export function bufferToValues(BufferType, buffer) {
    const typed = new BufferType(buffer);
    return Array.prototype.slice.call(typed);
}

export function byteToBuffer(value) {
    return valuesToBuffer(Uint8Array, value);
}
export function bytesToBuffer(...values) {
    return valuesToBuffer(Uint8Array, ...values);
}
export function sbyteToBuffer(value) {
    return valuesToBuffer(Int8Array, value);
}
export function sbytesToBuffer(...values) {
    return valuesToBuffer(Int8Array, ...values);
}
export function intToBuffer(value) {
    return valuesToBuffer(Int32Array, value);
}
export function intsToBuffer(...values) {
    return valuesToBuffer(Int32Array, ...values);
}
export function longToBuffer(value) {
    return Buffer.from(padZeroLeft(toHex(value),16), 'hex');
}
export function longsToBuffer(...values) {
    const hex = values.map( value => padZeroLeft(toHex(value),16) ).join('');
    return Buffer.from(hex, 'hex');
}
export function floatToBuffer(value) {
    return valuesToBuffer(Float32Array, value);
}
export function floatsToBuffer(...values) {
    return valuesToBuffer(Float32Array, ...values);
}
export function doubleToBuffer(value) {
    return valuesToBuffer(Float64Array, value);
}
export function doublesToBuffer(...values) {
    return valuesToBuffer(Float64Array, ...values);
}
export function stringToBuffer(string) {
    const bytes = fromUTF8ToArray(string);
    const {length} = bytes;
    return Buffer.concat([intsToBuffer(length), bytesToBuffer(...bytes)]);
}
export function stringsToBuffer(strings) {
    const {length} = strings;
    const buffers = [intToBuffer(length)];
    return Buffer.concat(buffers.concat(strings.map(stringToBuffer)));
}
export function bufferToByte(buffer) {
    return bufferToValues(Uint8Array, buffer)[0];
}
export function bufferToBytes(buffer) {
    return bufferToValues(Uint8Array, buffer);
}
export function bufferToSByte(buffer) {
    return bufferToValues(Int8Array, buffer)[0];
}
export function bufferToSBytes(buffer) {
    return bufferToValues(Int8Array, buffer);
}
export function bufferToInt(buffer) {
    return bufferToValues(Int32Array, buffer)[0];
}
export function bufferToInts(buffer) {
    return bufferToValues(Int32Array, buffer);
}
export function bufferToLong(buffer) {
    const hex = fromBytesToHex(Array.from(buffer.values()));
    return toComplexArray(hex, 16).map( value => parseInt(value.join(''), 16));
}
export function bufferToLongs(buffer) {
    const hex = fromBytesToHex(Array.from(buffer.values()));
    return toComplexArray(hex, 16).map( value => parseInt(value.join(''), 16));
}
export function bufferToFloats(buffer) {
    return bufferToValues(Float32Array, buffer);
}
export function bufferToDoubles(buffer) {
    return bufferToValues(Float64Array, buffer);
}
export function bufferToString(buffer) {
    const length = bufferToInts(buffer.slice(0, Uint32Array.BYTES_PER_ELEMENT));
    const data = buffer.slice(Uint32Array.BYTES_PER_ELEMENT, length * Uint32Array.BYTES_PER_ELEMENT);
    const bytes = bufferToBytes(data);
    return fromArrayToUTF8(bytes);
}
export function bufferToComplex(buffer, types) {

}
export function emptyBuffer() {
    return Buffer.from([]);
}