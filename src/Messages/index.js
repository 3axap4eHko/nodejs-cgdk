'use strict';

import GameOver from './GameOver';
import AuthenticationToken from './AuthenticationToken';
import TeamSize from './TeamSize';
import ProtocolVersion from './ProtocolVersion';
import GameContext from './GameContext';
import PlayerContext from './PlayerContext';
import Moves from './Moves';

class Unknown extends Error {
    constructor() {
        super('Unknown message type')

    }
}

export default {
    Unknown,
    GameOver,
    AuthenticationToken,
    TeamSize,
    ProtocolVersion,
    GameContext,
    PlayerContext,
    Moves
};