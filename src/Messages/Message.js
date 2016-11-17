'use strict';

import Int8 from '../Types/Int8';
import Structure from '../Types/Structure';

const _type = Symbol('type');
const _value = Symbol('value');
const _buffer = Symbol('buffer');

export default function(messageType, Types, toState, defaultValue) {
    const MessageStructure = Structure(Int8, ...Types);

    class Message {
        static fromBuffer(buffer) {
            const {value} = MessageStructure.fromBuffer(buffer);
            return new Message(value.slice(1));
        }
        constructor(value = defaultValue) {
            this[_value] = value;
            this[_type] = messageType;
            this[_buffer] = new MessageStructure(messageType, value).buffer;
        }
        get value() {
            return this[_value];
        }
        get type() {
            return this[_type];
        }
        get buffer() {
            return this[_buffer];
        }
        toState() {
            return toState(this[_value]);
        }
    }
    return Message;
}