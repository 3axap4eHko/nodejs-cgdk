'use strict';

import {fromUTF8ToArray} from 'yyf-core/cast';
import Type from './Type';
import UInt8 from './UInt8';
import ArrayOf from './ArrayOf';

const ArrayOfBytes = ArrayOf(UInt8);

function toBuffer(text) {
    const bytes = fromUTF8ToArray(text);
    return new ArrayOfBytes(bytes).buffer;
}

export default class Text extends Type {
    static fromBuffer(buffer) {
        const byteArray = ArrayOfBytes.fromBuffer(buffer);
        const text = byteArray.value.map( code => String.fromCharCode(code)).join('');
        return new Text(text);
    }
    constructor(values) {
        super(values, toBuffer);
    }
}