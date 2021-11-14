
const api=require("./get_advice")
const readline = require('readline');
const launcher=require('./index');
const inquirer = require("inquirer");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput() {


    inquirer.prompt([
        {
            name:"num_of_items",
            type:"number",
            message:"How many Advices do you like to read at the moment [0-10]?",
        },
    ])
    .then((answer)=>{
        if((!answer.num_of_items)|(answer.num_of_items<1)|(answer.num_of_items>10)){
            console.log("that is not a valid input!");
            getInput();
        }else{
            console.log(`input accepted and redirecting.....${answer.num_of_items}`)
            api.callApi(answer.num_of_items)
        }
    })

    
}



function loop(){
    console.log("\n")
    console.log("\n")
   
    console.log("would you like to explore more?")

    console.log("\n")
    console.log("\n")

    inquirer.prompt([{
        name:"continue",
        type:"confirm",
        message:"Would you like to continue? "
    }])
    .then((answer)=>{
        if(answer.continue==true){
            console.clear()
            launcher.run()
        }
        else{
            console.log("bye bye")
        }
        // console.log(answer.continue)
    })

    

}





exports.getInput=getInput
exports.loop=loop
// exports.getInputConfirm=getInputConfirm
 