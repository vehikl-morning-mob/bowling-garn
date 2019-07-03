export class Bowling {
    constructor() {
        this.frames = Array.from({ length: 10 }, () => []);
    }

    roll(pins) {
        const frameIndex = this.getCurrentFrameIndex();
        this.frames[frameIndex].push(pins);
    }

    score() {
        const rolls = this.getRollsArrayFromFrames();
        return rolls.reduce((sum, roll) => {
            return sum + roll;
        }, 0);
    }

    getCurrentFrameIndex() {
        return this.frames.findIndex(frame => {
            return frame.length < 2;
        })
    }

    getRollsArrayFromFrames() {
        return [].concat(...this.frames);
    }
}

