'use strict';

import ActionType from './ActionType';

const _messages = Symbol('messages');

export default class Move {
    static fromData() {

    }
    constructor() {
        this.speed = 0;
        this.strafeSpeed = 0;
        this.turn = 0;
        this.action = ActionType.None;
        this.castAngle = 0;
        this.minCastDistance = 0;
        this.maxCastDistance = 10000.0;
        this.statusTargetId = -1;
        this.skillToLearn = null;
        this[_messages] = [];
    }
    get messages() {
        return this[_messages].slice();
    }
    set messages(message) {
        if (message) {
            this[_messages].push(message);
        }
    }
    toData() {

    }
}

Move.SIZE = 100;