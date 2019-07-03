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
}
