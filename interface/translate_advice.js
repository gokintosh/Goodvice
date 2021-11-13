const axios=require('axios')

const sendAllData=async()=>{
     return await axios.post("https://libretranslate.de/translate",{
        q:"hey",
        source:"en",
        target:"pl"
    })
    .then(response=>console.log("response",response.data))
    
}
sendAllData()