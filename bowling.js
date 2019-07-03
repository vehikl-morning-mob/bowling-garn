export class Bowling {
    constructor() {
        this.frames = Array.from({ length: 10 }, () => []);
    }

    roll(pins) {
        const frameIndex = this.getCurrentFrameIndex();
        this.frames[frameIndex].push(pins);
    }

    score() {
        return this.frames.reduce((sum, frame) => {
            return sum + frame.reduce((sum, roll) => {
                return sum + roll;
            });
        }, 0);
    }

    getCurrentFrameIndex() {
        return this.frames.findIndex(frame => {
            return frame.length < 2;
        })
    }
}

