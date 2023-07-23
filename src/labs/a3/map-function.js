function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    numberArray1.push(6);
    numberArray1.splice(2,1);

    return (
        <div>
            <h3>Map</h3>
            squares = {numberArray1.map(square)}<br/>
            cubes = {numberArray1.map(a => a * a * a)}<br/>
        </div>
    )
}

export default MapFunction