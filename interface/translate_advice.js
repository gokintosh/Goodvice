const axios=require('axios')
const api=require("./get_advice")
const utils=require("./utils")

let pol_advice_array=[]
let i


// const eng_advice_array = api.returnEngArray()

const sendAllData=async eng_advice_array =>{


    for(let i=0;i<eng_advice_array.length;i++){

            console.clear()
            console.log(`${i} advices loaded!`)


        
        
            await axios.post("https://libretranslate.de/translate",{
                q:eng_advice_array[i],
                source:"en",
                target:"pl"
            })
            .then(response => pol_advice_array.push(response.data.translatedText))


        
        
    
        
    }
    printArray(eng_advice_array,pol_advice_array)
    // if(i==eng_advice_array.length){
    //     printArray()
    // }
  
}




function printArray(eng_array,pol_array){
    console.log(`!!!We hope this ${pol_array.lenth} advices will make you the next Elon Musk!!`)
    for(let i=0;i<pol_advice_array.length;i++){
        console.log(eng_array[i])
        console.log(pol_array[i])
        console.log("\n")
    }

    utils.loop()
    


    
    
}

exports.sendAllData=sendAllData



