// const axios=require('axios');

const { default: axios } = require("axios")


let array=[]

// async function callApi(){
//     let response=await axios({url:"https://api.adviceslip.com/advice"})

//     // console.log("Response: ",response.data);
//     array.push(response.data)
// }

let limit

let start=0
let i

const someFunc=async limit=>{
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
    for(let i=start;i<array.length;i++){
        console.log(array[i])
        console.log("\n")
    }
    console.log(`this is${array.length}`);
}


// const createLi=(advice)=>{
//     const li=document.createElement('li')

//     li.textContent=`${advice.id} : ${advice.advice}`;
//     return li
// }



// const appendToDom=()=>{
//      const ul=document.querySelector('ul')

//      array.map(advice=>{
//          ul.appendChild(createLi(advice))
//      })
// }



function callApi(limit){
    someFunc(limit)
}

exports.callApi=callApi





