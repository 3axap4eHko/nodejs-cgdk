'use strict';

import * as Types from '../Types';

const Schema = {
    id: Types.UInt64,
    x: Types.Float64,
    y: Types.Float64,
    speedX: Types.Float64,
    speedY: Types.Float64,
    angle: Types.Float64,
    faction: Types.Enum
};

export default class Unit {
    constructor(id, x, y, speedX, speedY, angle, faction) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.angle = angle;
        this.faction = faction;
    }

    getAngleTo(x, y) {
        if (x instanceof Unit) {
            y = x.y;
            x = x.x;
        }
        const absoluteAngleTo = Math.atan2(y - this.y, x - this.x);
        let relativeAngleTo = absoluteAngleTo - this.angle;
        while (relativeAngleTo > Math.PI) {
            relativeAngleTo -= 2.0 * Math.PI;
        }
        while (relativeAngleTo < -Math.PI) {
            relativeAngleTo += 2.0 * Math.PI;
        }
        return relativeAngleTo;
    }

    getDistanceTo(x, y) {
        if (x instanceof Unit) {
            y = x.y;
            x = x.x;
        }
        const xRange = x - this.x;
        const yRange = y - this.y;
        return Math.pow(xRange * xRange + yRange * yRange, .5);
    }
}