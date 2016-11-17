'use strict';

import {Duplex, Transform} from 'stream';
import {values} from 'yyf-core/iterate';
import Messages from '../Messages';
import MessageTypes from '../Messages/MessageTypes';

const MessagesNames = Object.keys(MessageTypes);

export default class Reader extends Transform {
    constructor(sourceStream) {
        super({objectMode: true});
        sourceStream.pipe(this);
    }
    _transform(data, encoding, done) {
        if (Buffer.isBuffer(data)){
            const type = data[0];
            const messageName = MessagesNames[type];
            const MessageType = Messages[messageName];
            if (MessageType) {
                this.push(MessageType.fromBuffer(data));
            } else {
                throw new Error(`Unknown message type ${type}`);
            }
        }
        done();
    }
    _flush(done) {
        debugger;
        done();
    }

}