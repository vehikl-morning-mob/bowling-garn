export class Bowling {
    constructor() {
        this.total = 0;
        this.frames = [];
        // { firstRoll, secondRoll }
    }

    roll(pins) {
        this.total += pins;
    }

    score() {
        return this.total;
    }

    addFrame() {
        const frame = {
            firstRoll: null,
            secondRoll: null,
        }
        this.frames.push(frame);
        return frame;
    }

    needsNewFrame() {
        const frame = this.frames[this.frames.length - 1];
        return frame.secondRoll !== null || frame.firstRoll === 10;
    }

    getCurrentFrame() {
        if (this.needsNewFrame()) {
            return this.addFrame();
        }
        return this.frames[this.frames.length - 1];
    }
}
