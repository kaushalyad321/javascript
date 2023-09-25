// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.
import fetch from "node-fetch";
async function getData(){
    const url1 = 'https://official-joke-api.appspot.com/random_joke'
    const url2 = 'https://catfact.ninja/fact' ;
    const responses = await Promise.all([fetch(url1), fetch(url2)]) ;
    const data1 = await responses[0].json()
    const data2 = await responses[1].json()
    // do what you want with data1 and data2 here
    console.log(data1 ,"<----> " ,data2 ) ;
   

}

getData() ;