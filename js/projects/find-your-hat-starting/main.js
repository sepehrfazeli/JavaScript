const prompt = require('prompt-sync')({
    sigint: true
});

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let game = true;

class Field {
    constructor(field) {
        this._field = field;
        this._hatP = this.hatP();
        this._holesP = this.holesP();
        this._Cp = [0, 0];
    };
    set Cp(CurrentPosition) {
        this._Cp = CurrentPosition;
    }
    get Cp() {
        return this._Cp;
    }
    hatP() {
        let R = []
        Array.from(this._field).forEach((x, i) => {
            Array.from(x).forEach((y, j) => {
                if (y === '^') {
                    R = [i, j];
                }
            })
        })
        return R;
    };
    holesP() {
        let R = []
        Array.from(this._field).forEach((x, i) => {
            Array.from(x).forEach((y, j) => {
                if (y === 'O') {
                    R.push([i, j]);
                }
            });
        });
        return R;
    };
    print() {
        Array.from(this._field).forEach(x => {
            console.log(Array.from(x).join(' '))
            console.log('')
        })
    };
    disChecker(row,col) {
        try{
        if (Array.from(this._field)[row][col] === 'O') {
            game = false;
            console.log('KEEP AWAY FROM **HOLES**, You Lost!!!');
            return false;
        }else
        if (Array.from(this._field)[row][col] === '^') {
            game = false;
            console.log('You Win');
            return false;
        }else{
            return true;
        }}
        catch(e){
            game = false;
            console.log('OUT!!! You Lost');
            return false;
        }
    }
    goR() {
        this._Cp[1] += 1;
        if(this.disChecker(this._Cp[0],this._Cp[1]))
        this._field[this._Cp[0]][this._Cp[1]] = pathCharacter;
    }
    goB() {
        this._Cp[0] += 1;
        if(this.disChecker(this._Cp[0],this._Cp[1]))
        this._field[this._Cp[0]][this._Cp[1]] = pathCharacter;
    }
    goL() {
        this._Cp[1] -= 1;
        if(this.disChecker(this._Cp[0],this._Cp[1]))
        this._field[this._Cp[0]][this._Cp[1]] = pathCharacter;
    }
    goU() {
        this._Cp[0] -= 1;
        if(this.disChecker(this._Cp[0],this._Cp[1]))
        this._field[this._Cp[0]][this._Cp[1]] = pathCharacter;
    }
};

const myField = new Field([
    ['*', '░', 'O','░', '^', 'O','░', '░', '░'],
    ['░', 'O', '░','░', 'O', '░','░', 'O', '░'],
    ['░', '░', '░','░', '░', '░','░', 'O', '░'],
    ['░', 'O', '░','░', 'O', 'O','░', '░', '░'],
    ['░', '░', '░','░', '░', '░','O', '░', '░'],
    ['O', '░', 'O','░', 'O', '░','░', '░', 'O'],
]);


var Play = function () {
    myField.print();
    readline.question('Which way?', dir => {
        // console.log(`Hey there ${dir}!`);
        switch (dir.toLowerCase()) {
            case 'r':
                myField.goR();
                break;
            case 'b':
                myField.goB();
                break;
            case 'l':
                myField.goL();
                break;
            case 'u':
                myField.goU();
                break;
            case 'q':
                return readline.close();
                break;
        }
        if (game === true)
            Play();
        else readline.close();
    });
};
Play();