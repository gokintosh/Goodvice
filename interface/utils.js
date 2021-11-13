
const api=require("./get_advice")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {
    rl.question('Enter a number of Advice to make you motivated today!! between 5 and 20: ', input => {
        if (Number(input)<5||Number(input)>20||isNaN(input)) {
            console.log(`Oops! That ${input} isn't valid. enter between 5 and 20 !!!`);
            getInput();
        } else {
            console.log(`Thanks! ${input} is valid`);

            console.log(`!!!Hold on Mordo.... we are generating ${input} advices to make you the next Elon Musk`)


            rl.close();
            api.callApi(input)
            


        }

        
    })

    
}

function loop(){
    console.log("\n")
    console.log("\n")
   
    console.log("would you like to explore more?")
}



exports.getInput=getInput
exports.loop=loop

 