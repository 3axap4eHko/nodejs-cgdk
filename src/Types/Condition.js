'use strict';

import Type from './Type';
import Bool from './Bool';

export default function (ElementType) {

    function toBuffer(toRead, value) {
        const buffers = [new Bool(toRead).buffer];
        if (toRead) {
            buffers.push(new ElementType(value).buffer);
        }
        return Buffer.concat(buffers);
    }

    class Condition extends Type {
        static fromBuffer(buffer) {
            const toRead = Bool.fromBuffer(buffer).value;
            const values = [toRead];
            if (toRead) {
                const dataBuffer = buffer.slice(Bool.SIZE);
                const value = ElementType.fromBuffer(dataBuffer);
                values.push(value);
            }
            return new Condition(values);
        }
        constructor(values) {
            super(values, toBuffer);
        }
    }

    return Condition;
}