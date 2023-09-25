// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.
import fetch from "node-fetch";
async function getData(){

    const url1 = 'https://catfact.ninja/fact' ;
    const url2 = 'https://official-joke-api.appspot.com/random_joke' ;
    const url3 = 'https://api.publicapis.org/entries' ;
    const url4= 'https://api.agify.io?name=meelad'
    const responses = await Promise.all([fetch(url1), fetch(url2),fetch(url3),fetch(url4)]);
    const data =[await responses[0].json(),await responses[1].json(),await responses[2].json(),await responses[3].json()]
    console.log(data[0],'<--->',data[1],'<--->',data[2],'<---->',data[3]) ;
    // using map we can also show the all the data that we are getting from api
    


}

getData() ;