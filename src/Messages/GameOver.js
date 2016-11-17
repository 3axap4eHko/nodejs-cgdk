'use strict';

import {emptyBuffer} from '../utils/convert'
import MessageTypes from './MessageTypes';
import Message from './Message';

export default class GameOver extends Message {
    constructor(version = 1) {
        super(MessageTypes.GameOver, version, emptyBuffer);
    }
}