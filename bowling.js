export class Bowling {
    constructor() {
        this.frames = Array.from({ length: 10 }, (_, index) => new Frame(index + 1));
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

            if (lastFrame && lastFrame.isStrike()) {
                score += frame.score();
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
        return this.frame === 10
            ? false
            : (this.frame < 10 && this.rolls.length === 2 || this.rolls[0] === 10);
    }

    isSpare() {
        return this.rolls.length === 2 && this.score() === 10;
    }

    isStrike() {
        return this.rolls.length === 1 && this.score() === 10;
    }

}

