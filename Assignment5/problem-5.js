// 5. Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
 };
// Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

function flattenObject(nestedObject){
        let result = {};// creating empty object
        for (const i in nestedObject) {

         if ((typeof nestedObject[i]) === 'object' && !Array.isArray(nestedObject[i])) {
                //checking if value of key is object and not array that means it is object so calling same function recursively
                const temp = flattenObject(nestedObject[i]);
                 for (const j in temp) {
                     result[i + '.' + j] = temp[j];
                 }
            }
          else  if(Array.isArray(nestedObject[i])){
                const temp = flattenObject(nestedObject[i]);

                for(const j in temp){

                  result[i + '.'+ j] =temp[j];

                }
            }
     
            else {

                result[i] = nestedObject[i];

            }
            
    };

    return result; // resulting new flatten object
}
console.log(flattenObject(obj)) ;