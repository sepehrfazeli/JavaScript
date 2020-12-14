class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newisCheckedOut) {
        this._isCheckedOut = newisCheckedOut;
    }
    getAverageRating() {
        return (this._ratings.reduce((sum, rating) => sum + rating , 0) / this._ratings.length);
    }
    toggleCheckOutStatus() {
        this._isCheckedOut === true ?
            (this._isCheckedOut = false) :
            (this._isCheckedOut = true);
    }
    addRating(rate) {
        this._ratings.push(rate);
    }
}
class Book extends Media {
    constructor(author, title,pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}
const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())
const 
