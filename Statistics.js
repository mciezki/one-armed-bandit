class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult);
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let looses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, looses];
    }
}