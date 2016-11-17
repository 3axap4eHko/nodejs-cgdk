'use strict';

import {Socket} from 'net';
import Reader from './Stream/Reader';
import Writer from './Stream/Writer';
import State from './Stream/State';

import AuthenticationTokenMessage from './Messages/AuthenticationToken';
import ProtocolVersionMessage from './Messages/ProtocolVersion';

const socket = new Socket({
    fs: null,
    allowHalfOpen: true,
    readable: true,
    writable: true
});
const writer = new Writer(socket);
const reader = new Reader(socket);
const state = new State(reader);

socket.connect(31001, '127.0.0.1');

writer.write(new AuthenticationTokenMessage('0000000000000000'));
writer.write(new ProtocolVersionMessage(1));
