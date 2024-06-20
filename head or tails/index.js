    let result;
    function computerMove() {
        let randomValue = Math.random();
        if (randomValue < 0.5) {
            return 'Heads';
        } else {
            return 'Tails';
        }
    }
 