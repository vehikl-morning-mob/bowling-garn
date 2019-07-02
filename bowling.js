export class Bowling {
    constructor() {
        this.total = 0;
    }

    roll(pins) {
        this.total += pins;
    }

    score() {
        return this.total;
    }
}
