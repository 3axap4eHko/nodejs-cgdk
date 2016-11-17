'use strict';

import {intToBuffer, bufferToInt, emptyBuffer} from '../utils/convert'
import MessageTypes from './MessageTypes';
import Message from './Message';

function movesToBuffer(game) {
    return emptyBuffer;
}
function bufferToMoves(buffer) {
    return {};
}

export default class Moves extends Message {
    constructor(moves = {}) {
        super(MessageTypes.Moves, moves, movesToBuffer);
    }
}