const translateApi=require("./translate_advice")
const { default: axios } = require("axios")
const launcher=require('./index');
const inquirer = require("inquirer");
const utils=require("./utils")




let engArray=[]
let idArray=[]
let limit
let start=0
let i



const getAdviceEng=async limit=>{

    while(start<limit){
        console.clear()
        
        console.log("  loading..data transmissions can delay   ")

        try {
            const resp = await axios.get("https://api.adviceslip.com/advice");

            // check if the advice is already present!!
            if(!idArray.includes(resp.data.slip.id)){
                engArray.push(resp.data.slip.advice)
                idArray.push(resp.data.slip.id)
                start++
            }


            
        
            
        } catch (err) {

            // catch error and give custom values
            engArray.push("If your program runs, dont touch it!!")
            idArray.push(101010)
            start++
           
        }
        
    }

    
    // the next line executes when the start==limit
    // we need to show the user English advices.

    if(start==limit){
        console.clear()
        console.log("\n")

        console.log("The English advices returned are: ")
        console.log("\n")


        utils.printArray(engArray,idArray)
        console.log("\n")




        // asking user to whether to translate the advices.
        // if yes go to translate if no close app

        inquirer.prompt([{
            name:"continue",
            type:"confirm",
            message:"Would you like to translate to Polish? "
        }])
        .then((answer)=>{
            if(answer.continue==true){
                console.clear()
                translate(engArray,idArray)
            }
            else{
                utils.end()
            }
            // console.log(answer.continue)
        })




        
        
        

        
        
    }
}



// helper functions


function callApi(limit){
    getAdviceEng(limit)
}


function translate(array,idArray){
    translateApi.translateAdvice(array,idArray)
}





// export variables

exports.getAdviceEng=getAdviceEng






