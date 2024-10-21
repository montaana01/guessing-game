class GuessingGame {
    constructor() {
    this.val = 0;
    this.min = 0;
    this.max = 0;
    }

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
        this.val = Math.ceil((this.max + this.min) /2);
        return this.val;
    }

    lower() {
        this.max = this.val;
    }

    greater() {
        this.min = this.val;
    }
}

module.exports = GuessingGame;
