export class Bowling {
    constructor() {
        this.frames = Array.from({ length: 10 }, (_, index) => new Frame(index + 1, this));
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
    constructor(frame, game) {
        this.rolls = [];
        this.frame = frame;
        this.game = game;
    }

    push(pins) {
        this.rolls.push(pins);
    }

    score() {
        return this.rolls.reduce((sum, pins) => {
            // if strike get next 2 rolls
                // if next frame is strike 10 + next next frame first roll
                // else next frame two rolls
            // if spare get next roll
            return sum + pins;
        });
    }

    isComplete() {
        return this.frame === 10
            ? false
            : (this.frame < 10 && this.rolls.length === 2 || this.rolls[0] === 10);
    }

    isSpare() {
        return this.rolls.length === 2 && this.rolls[0] + this.rolls[1] === 10;
    }

    isStrike() {
        return this.rolls.length === 1 && this.rolls[0] === 10;
    }
}

