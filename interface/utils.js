
// this file contais all the util functions for this app
const api=require("./get_advice")
const readline = require('readline');
const inquirer = require("inquirer");





var i



// here we use inquirer->https://www.npmjs.com/package/inquirer
function getInput() {


    inquirer.prompt([
        {
            name:"num_of_items",
            type:"number",
            message:"How many Advices do you like to read at the moment [1-10]?",
        },
    ])
    .then((answer)=>{
        if((!answer.num_of_items)|(answer.num_of_items<1)|(answer.num_of_items>10)){
            console.log("that is not a valid input!");
            getInput();
        }else{
            console.log(`input accepted and redirecting.....${answer.num_of_items}`)
            api.getAdviceEng(answer.num_of_items)
        }
    })

    
}


// here we use function overloading to minimize the boilerplate


function printArray(eng_array,id_array,pol_array){


    if(typeof pol_array !=="undefined"){




        
        console.log("\n")
        console.log(`Hej, Mordo, !!!We hope this ${pol_array.length} advices will help you build the next boring company!!`)
        console.log("\n")
        for(let j=0;j<eng_array.length;j++){
            console.log(`id: ${id_array[j]}`)
            console.log(eng_array[j])
            console.log(pol_array[j])
            console.log("\n")
        }



           
        



        // this completes the app
        end()


    }
        else{
            for(i=0;i<eng_array.length;i++){
                console.log(`id : ${id_array[i]}`)
                console.log(eng_array[i])
                console.log("\n")
            }
            
    }



   
    


    
    
}


function end(){
    console.log("\n")
    console.log("\n")


    console.log("Hope you are on 🔥 after the advices!! it was nice showing you some advices!!")
    console.log("\n")
   
    console.log("Bye..Bye....")

    console.log("\n")
    console.log("Thanks for using GoodVice. See you soon 👍!!")

    console.log("\n")
    console.log("\n")


    

}











exports.getInput=getInput
exports.end=end
exports.printArray=printArray
// exports.getInputConfirm=getInputConfirm

 