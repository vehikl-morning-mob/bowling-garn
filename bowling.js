export class Bowling {
    constructor() {
        this.frames = Array.from({ length: 10 }, (_, index) => new Frame(index));
    }

    roll(pins) {
        const frameIndex = this.getCurrentFrameIndex();
        this.frames[frameIndex].push(pins);
    }

    score() {
        return this.frames.reduce((sum, frame, index) => {
            const lastFrame = this.frames[index - 1];
            let score = frame.score();
            if (lastFrame && lastFrame.isSpare()) {
                score += (frame.rolls[0]);
            }

            return sum + score;
        }, 0);
    }

    getCurrentFrameIndex() {
        return this.frames.findIndex(frame => {
            return !frame.isComplete();
        })
    }
}

class Frame {
    constructor(frame) {
        this.rolls = [];
        this.frame = frame;
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
        return this.frame < 9 ? this.rolls.length === 2 : false;
    }

    isSpare() {
        return this.score() === 10;
    }
}

