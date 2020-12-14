/*
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (x) =>{
  console.log(x);
};
const handleFailure = (x)=>{
  console.log(x);
};
// checkInventory(order).then(handleSuccess,handleFailure);  

checkInventory(order)
.then(handleSuccess)
.catch(handleFailure);
*/
const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) =>{
        return processPayment(resolvedValueArray)})
            .then((resolvedValueArray) =>{
                return shipOrder(resolvedValueArray)})
                    .then((successMessage) =>{
                        console.log(successMessage)});
