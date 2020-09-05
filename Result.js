class Result {
    static winOrNot(result, bid) {
        if (result) return 4 * bid;
        else return 0;
    }

    static checkWinner(colors) {
        if ((colors[0] === colors[1] && colors[1] === colors[2]) || (colors[0] !== colors[1] && colors[0] !== colors[2] && colors[1] !== colors[2])) return true;
        else return false;
    }
}