//Fortune Car

const Stored_Messages = {
  type: ["brand new", "old", "rusty"],
  color: ["black", "white", "red", "silver"],
  cars: ["Benz", "corvette", "BMW", "dodge"],
  randomtype() {
    return this.type[Math.floor(Math.random() * this.type.length)];
  },
  randomcolor() {
    return this.color[Math.floor(Math.random() * this.color.length)];
  },
  randomcars() {
    return this.cars[Math.floor(Math.random() * this.cars.length)];
  },
};
const FurtuneTeller = () => {
    console.log(`\nYour Furtune Car is:\n** A ${Stored_Messages.randomtype()} ${Stored_Messages.randomcolor()} ${Stored_Messages.randomcars()} **\n`)
};

///////TEST///////TEST///////TEST///////TEST///////TEST///////TEST///////TEST///////TEST///////
FurtuneTeller();
