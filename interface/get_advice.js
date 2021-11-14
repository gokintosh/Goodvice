// const axios=require('axios');
const translateApi=require("./translate_advice")
const { default: axios } = require("axios")




let engArray=[]
let idArray=[]



let limit

let start=0
let i

const someFunc=async limit=>{

    

    while(start<limit){
        try {
            const resp = await axios.get("https://api.adviceslip.com/advice");
            engArray.push(resp.data.slip.advice)
            idArray.push(resp.data.slip.id)
            // console.log(resp.data.slip.id)
            start++
        } catch (err) {
           
            console.error(err);
        }

        



        // array.push(await (await axios.get("https://api.adviceslip.com/advice")).data.slip.advice)
        
    }

    

    if(start==limit){
        

        
        translate(engArray,idArray)
    }
}

// function returnEngArray(){
//     return array
// }


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


function translate(array,idArray){
    translateApi.sendAllData(array,idArray)
}





exports.callApi=callApi

// exports.returnEngArray=returnEngArray





