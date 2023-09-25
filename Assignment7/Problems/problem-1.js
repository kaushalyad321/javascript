// 1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
import fetch from "node-fetch";
function fetchData(url){
    const data = fetch(url).then(response => response.json()) // fetching the data from 
    return data ;  
}

function showData(fetchData){
   fetchData.then(response => console.log((JSON.stringify(response))));
   return "" ;
}

showData(fetchData('https://catfact.ninja/fact')) ;