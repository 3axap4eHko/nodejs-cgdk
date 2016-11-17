'use strict';

import UInt32 from '../Types/UInt32';
import MessageTypes from './MessageTypes';
import Message from './Message';

function toState(value) {
    return {teamSize: value};
}

export default Message(MessageTypes.TeamSize, [UInt32], toState, 0);
