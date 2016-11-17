'use strict';

import {Transform} from 'stream';

export default class Writer extends Transform {
    constructor(targetStream) {
        super({objectMode: true});
        this.pipe(targetStream);
    }
    _transform(data, encoding, done) {
        if (data && data.buffer) {
            this.push(data.buffer);
        } else if (Buffer.isBuffer(data)){
            this.push(data);
        }
        done();
    }
    _flush(done) {
        debugger;
        done();
    }
}