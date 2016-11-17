'use strict';

import Condition from '../Types/Condition';
import Bool from '../Types/Bool';
import Int32 from '../Types/Int32';
import UInt64 from '../Types/UInt64';
import Double from '../Types/Double';
import Structure from '../Types/Structure';
import ArrayOf from '../Types/ArrayOf';

import MessageTypes from './MessageTypes';
import Message from './Message';

const Int32Array = ArrayOf(Int32);

const GameStructure = Structure(
    UInt64,
    Int32,
    Double,
    Bool,
    Bool,
    Double,
    Double,

    Double,
    Double,
    Double,
    Double,
    Double,
    Double,
    Int32,

    Double,
    Int32,
    Double,
    Double,
    Double,
    Double,
    Double,

    Double,
    Double,
    Int32,
    Int32,
    Int32,
    Int32,
    Double,
    Double,

    Double,
    Double,
    Double,
    Int32,
    Int32,
    Int32,
    Int32,
    Int32,

    Int32,
    Int32,
    Int32,
    Int32,
    Int32,
    Int32,
    Int32,
    Int32,
    Int32,

    Int32,
    Double,
    Double,
    Int32Array,
    Double,
    Double,
    Double,

    Double,
    Int32,
    Int32,
    Int32,
    Int32,
    Double,
    Double,
    Int32,

    Double,
    Double,
    Double,
    Int32,
    Int32,
    Double,
    Double,

    Int32,
    Double,
    Double,
    Int32,
    Double,
    Double,
    Int32,

    Double,
    Double,
    Double,
    Double,
    Int32,
    Int32,
    Double,

    Double,
    Double,
    Double,
    Int32,
    Int32,
    Double,
    Double,

    Double,
    Double,
    Int32,
    Int32,
    Int32,
    Int32,
    Int32,
    Double,

    Int32,
    Int32,
    Double,
    Double,
    Double,
    Int32,
    Double,

    Double,
    Double,
    Double,
    Int32,
    Int32,
    Double,
    Int32
);

const GameContext = Condition(GameStructure);

function toState(values) {
    return {game: {

    }};
}

export default Message(MessageTypes.GameContext, [GameContext], {});
