import ArrayIndexAndLength from "./array-index-and-length"
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays"
import ForLoops from "./for-loops"
import MapFunction from "./map-function"
import JsonFunction from "./json-stringify"
import FindFunction from "./find-function"
import FindIndex from "./find-index"
import FilterFunction from "./filter-function"

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [ functionScoped,   blockScoped, constant1, numberArray1,   stringArray1];

    console.log('Working with Arrays');
    console.log(`numberArray1 = ${numberArray1.join('')}`);
    console.log(`stringArray1 = ${stringArray1.join('')}`);

    for (let i = 0; i < variableArray1.length; i++) {
        if (typeof variableArray1[i] === 'object') {
          variableArray1[i] = variableArray1[i].join('');
        }
      }
    console.log(`variableArray1 = ${variableArray1.join('')}`);

    return (
       <div>
            <h3>Working with Arrays</h3>
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonFunction/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
       </div>
    );
}

export default WorkingWithArrays