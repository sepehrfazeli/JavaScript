class Player {
    constructor(name, hitsPerMinute) {
        this._name = name;
        this._hitsPerMinute = hitsPerMinute;
        this._balloonCount = 100;
    };
    get name() {
        return this._name;
    };
    get hitsPerMinute() {
        return this._hitsPerMinute;
    };
    status() {
        console.log(`Player: ${this._name} -- Balllons Left: ${this._balloonCount}`)
    };
};

const balloonAttack =(p1, p2)=>{
    if (p1.hitsPerMinute > p2.hitsPerMinute) {
        console.log(p1.name);
    } else if (p1.hitsPerMinute < p2.hitsPerMinute) {
        console.log(p2.name);
    } else {
        console.log('Tie');
    }
};
const p1 = new Player('p1', 5);
const p2 = new Player('p2', 2);

balloonAttack(p1, p2);

/*
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
  }
}

// Write function below
const balloonAttack = (player1, player2) => {
  for (let i = 1; i <= 10; i++){
    player2.balloonCount -= player1.hitsPerMinute
    player1.balloonCount -= player2.hitsPerMinute
    player1.status();
    player2.status();
  }
  if (player1.balloonCount > player2.balloonCount) {
    return player1.name;
  }else if (player2.balloonCount > player1.balloonCount)
    return player2.name

  return 'Tie'
}
*/