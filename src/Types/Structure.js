'use strict';

import Type from './Type';

export default function (...Types) {

    function toBuffer(values) {
        const buffers = values.map( (value, idx) => {
            const ElementType = Types[idx];
            return new ElementType(value).buffer;
        } );
        return Buffer.concat(buffers);
    }

    class Structure extends Type {
        static fromBuffer(buffer) {
            const {values} = Types.reduce( (data, ElementType) => {
                try {
                    const element = ElementType.fromBuffer(data.buffer);
                    const {value} = element;
                    data.buffer = data.buffer.slice(element.buffer.byteLength);
                    data.values.push(value);
                    return data;
                } catch (e) {
                    console.log(ElementType);
                    throw e;
                }
            }, {buffer, values: []});
            return new Structure(...values);
        }
        constructor(...values) {
            super(values, toBuffer);
        }
    }

    return Structure;
}