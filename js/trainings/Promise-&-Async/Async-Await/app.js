let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

const serveDinnerAgain = async()=>{
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`)
}
serveDinnerAgain()

/*
const serveDinner1 = async ()=>{          in order
  let vegetablePromise = await steamBroccoli();
  let starchPromise = await cookRice();
  let proteinPromise = await bakeChicken();
  let sidePromise = await cookBeans();
  console.log(`2Dinner is served. We're having ${vegetablePromise}, ${starchPromise}, ${proteinPromise}, and ${sidePromise}.`)
}

serveDinner1()        simultaneously
const serveDinner = async ()=>{
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`1Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`)
}
serveDinner()


*/