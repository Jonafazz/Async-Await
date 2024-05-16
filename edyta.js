// step 1 : defgine a function to simulate cooking pizza
function cookPizza() {
    console.log("cooking the pizza...")
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Pizza is ready !');
            resolve('delicious Pizza!');
        }, 8000); //simulating 5 seconds for cooking
    })
}
//step 2 : define  a function to stimulate activites
function playGames() {
    console.log("playing star rail...")
}

function draw() {
    console.log("drawing a pinguin...")
}

function playChess() {
    console.log("Winning Chess..")
}
//use async/await to make our code async
async function PizzaParty() {
    console.log("Let's start the pizza party!")

    //start cooking the pizza
    let pizzaProjekt = cookPizza();

    //wile the pizza is mbeing made, we can:
    playGames()

    draw()

    playChess()

    //now let's wait for the pizza to finish cooking
    let pizza = await pizzaProjekt;
    //finally, the pizza is ready, and we can enjoy it
    console.log(`Yay! Time to eat ${pizza} !`);

    // `Time to eat ${pizza}!`; == `Time to eat`+pizza+`!`;
}
PizzaParty()