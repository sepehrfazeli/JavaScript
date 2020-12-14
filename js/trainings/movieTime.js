class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }
    // Insert code below
    movieTime() {
        let minreq = this.data * 5 + 10;
        (minreq <= this.data) ? true: false;
    }
}
const library = new Network(50, 9)
console.log(library.movieTime())
// returns false