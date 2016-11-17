'use strict';

import UInt32 from '../Types/UInt32';
import MessageTypes from './MessageTypes';
import Message from './Message';

export default Message(MessageTypes.ProtocolVersion, [UInt32], 1);
