'use strict';

import Type from './Type';
import UInt32 from './UInt32';

export default function (ElementType) {

    function toBuffer(values) {
        const buffers = [new UInt32(values.length).buffer].concat(values.map( value => new ElementType(value).buffer ));
        return Buffer.concat(buffers);
    }

    class ArrayOf extends Type {
        static fromBuffer(buffer) {
            const length = UInt32.fromBuffer(buffer).value;
            const byteLength = ElementType.SIZE * length;
            const dataBuffer = buffer.slice(UInt32.SIZE, byteLength);
            const {values} = Array.from({length})
                .reduce( data => {
                    const element = ElementType.fromBuffer(data.dataBuffer);
                    const {value} = element;
                    data.dataBuffer = data.dataBuffer.slice(element.buffer.byteLength);
                    data.values.push(value);
                    return data;
                }, {dataBuffer, values: []});
            return new ArrayOf(values);
        }
        constructor(values) {
            super(values, toBuffer);
        }
    }

    return ArrayOf;
}