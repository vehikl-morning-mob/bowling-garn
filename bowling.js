export class Bowling {
    constructor() {
        this.frames = Array.from({ length: 10 }, () => new Frame());
    }

    roll(pins) {
        const frameIndex = this.getCurrentFrameIndex();
        this.frames[frameIndex].push(pins);
    }

    score() {
        return this.frames.reduce((sum, frame) => {
            return sum + frame.score();
        }, 0);
    }

    getCurrentFrameIndex() {
        return this.frames.findIndex(frame => {
            return frame.rolls.length < 2;
        })
    }
}

class Frame {
    constructor() {
        this.rolls = [];
    }

    push(pins) {
        this.rolls.push(pins);
    }

    score() {
        return this.rolls.reduce((sum, pins) => {
            return sum + pins;
        });
    }

    isComplete() {
        return false;
    }
}

