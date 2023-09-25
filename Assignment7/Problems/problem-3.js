// 3. Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })
// function fetchData(callback){
//  setTimeout(()=>{callback('https://catfact.ninja/fact',"Data fetched successfully");},1000) ;
// }

// function fun(url,str){
//      const data = fetch(url).then(response => response.json()) // fetching the data from 
//     .then(response => console.log((JSON.stringify(response))));
//      console.log(str) ;

// }

// fetchData(fun) ;
import fetch from "node-fetch";
const url = 'https://catfact.ninja/fact';
function fetchData(callback){
   setTimeout(()=>{callback('https://catfact.ninja/fact',"Data fetched successfully");},1000) ;
  }
  
  function fun(url,str){
       const data = fetch(url).then(response => response.json()) // fetching the data from 
      .then(response => console.log((JSON.stringify(response))));
       console.log(str) ;
  
  }

  fetchData(fun) ;

// now converting this data fetching to promise based api ;
async function dataFetch(url){
  const response = (await fetch(url)).json() ;
  const data = await response ;
  console.log(data) ;
}

dataFetch(url) ;
