const axios=require('axios')
const utils=require("./utils")
const chalk = require('chalk');




let pol_advice_array=[]
let i



// function to make post request

const translateAdvice=async (eng_advice_array,idArray) =>{


    for(i=0;i<eng_advice_array.length;i++){

            

            console.clear()
        
            console.log(` 🚀🚀🚀🚀🚀 Hold on tight..${i+1} advices translated and can get delayed..🙈🙊🙉!!  `)




            // here in case of error we wont close the app instead we will give some custom error message

            try {
                const resp = await axios.post("https://libretranslate.de/translate",{
                    q:eng_advice_array[i],
                    source:"en",
                    target:"pl"
                })
    
                
                pol_advice_array.push(resp.data.translatedText)
    
    
                
                
                
            } catch (err) {
    
                // cath error and give custom values
                pol_advice_array.push("nie udało się pobrać tej transakcji !!")
                
               
            }
        
    }
 

    // if the number satisfies the input size
    
    if(i==eng_advice_array.length){
        utils.printArray(eng_advice_array,idArray,pol_advice_array)
  
}



}
 




exports.translateAdvice=translateAdvice



