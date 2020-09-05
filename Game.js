class Game {
    constructor(start) {

        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = document.querySelectorAll('div.color');
        this.input = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render()
    }

    render(colors = ['#eee', '#eee', '#eee'], money = this.wallet.getWalletValue(), score = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        this.boards.forEach((board, index) => board.style.backgroundColor = colors[index]);

        this.spanWallet.textContent = money;

        if (score) {
            score = `Wygrałeś ${wonMoney}$!`;
        } else if (!score && score !== '') {
            score = `Przegrałeś ${bid}$ :(`;
        }

        this.spanResult.textContent = score;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        this.input.value = '';

    }

    startGame() {
        if (this.input.value < 1) return alert('Wprowadzona kwota jest zbyt mała.')

        const bid = Math.floor(this.input.value);

        if (!this.wallet.checkCanPlay(bid)) return alert('Nie masz tylu środków na koncie!')

        this.wallet.changeMoneyValue(bid, '-');

        this.draw = new Draw();
        const colors = this.draw.drawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.winOrNot(win, bid);

        this.wallet.changeMoneyValue(wonMoney);
        this.stats.addGameToStats(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);
    }
}