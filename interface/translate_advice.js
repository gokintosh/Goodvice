const axios=require('axios')
const api=require("./get_advice")
const utils=require("./utils")

let pol_advice_array=[]

let i



// const eng_advice_array = api.returnEngArray()

const sendAllData=async (eng_advice_array,idArray) =>{


    for(i=0;i<eng_advice_array.length;i++){

            console.clear()
        
            console.log(`${i+1} advices loaded!`)


        
        
            await axios.post("https://libretranslate.de/translate",{
                q:eng_advice_array[i],
                source:"en",
                target:"pl"
            })
            .then(response => pol_advice_array.push(response.data.translatedText))


        
        
    
        
    }
 
    
    if(i==eng_advice_array.length){
        printArray(eng_advice_array,pol_advice_array,idArray)
    }
  
}




function printArray(eng_array,pol_array,id_array){
    console.log(`!!!We hope this ${pol_array.length} advices will make you the next Elon Musk!!`)
    
    for(let j=0;j<eng_array.length;j++){
        console.log(id_array[j])
        console.log(eng_array[j])
        console.log(pol_array[j])
        console.log("\n")
    }

    utils.loop()
    


    
    
}

exports.sendAllData=sendAllData



