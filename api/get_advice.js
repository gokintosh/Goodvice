// const axios=require('axios');

const { default: axios } = require("axios")


let array=[]

// async function callApi(){
//     let response=await axios({url:"https://api.adviceslip.com/advice"})

//     // console.log("Response: ",response.data);
//     array.push(response.data)
// }

let limit=20

let start=0
let i

const someFunc=async()=>{
    for(i=start;i<limit;i++){
        array.push(await (await axios.get("https://api.adviceslip.com/advice")).data.slip.advice)
        
    }
    if(i==limit){
        printArray()
    }
}


// // function callApiEveryNSeconds(n){
// //     setInterval(callApi,n*1000);
// // }


// // callApiEveryNSeconds(2)


// // axios.get("https://api.adviceslip.com/advice").then(resp=>{
// //     console.log(resp.data)
// // })




// function getloop(){
//     setTimeout(function(){
        
//         callApi()
//         start++
//         if(start<limit){
//             getloop();
//         }
//     },2000)


// }


// getloop();

function printArray(){
    for(let i=start;i<limit;i++){
        console.log(array[i])
        console.log("hi")
    }
    console.log(array.length);
}

someFunc()




