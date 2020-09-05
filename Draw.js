class Draw {
    constructor() {
        this.colors = ['red', 'green', 'blue'];
        let _result = this.drawResult();
        this.showResult = () => _result;
    }

    drawResult() {
        let cols = [];
        for (let i = 0; i < this.colors.length; i++) {
            const index = Math.floor(Math.random() * this.colors.length);
            cols.push(this.colors[index]);
        }
        return cols;
    }
}