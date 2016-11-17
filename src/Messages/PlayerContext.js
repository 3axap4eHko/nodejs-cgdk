'use strict';

import {intToBuffer, bufferToInt, emptyBuffer} from '../utils/convert'
import MessageTypes from './MessageTypes';
import Message from './Message';

function playerToBuffer(game) {
    return emptyBuffer;
}
function bufferToPlayer(buffer) {
    return {};
}

export default class PlayerContext extends Message {
    constructor(player = {}) {
        super(MessageTypes.PlayerContext, player, playerToBuffer);
    }
}