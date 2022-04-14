// Tür Dönüşümleri

let val;


// number to string
val = String(10);

// bool to string
val = String(true);

// date to string
val = String(new Date());

// array to string
val = String([1,2,3,4])

// toString
val = (10).toString();
val = (false).toString();

// string to number
val = Number(10);
val = Number(true); // result 1
val = Number(false); // result 0
val = Number(null);

// NaN (Not a number)
val = Number('a'); // result Not a Number (NaN)
val = Number([1,2,3,4]) // result Not a Number (NaN)

// parseInt
val = parseInt('15');
val = parseInt('10.5'); // result 10

// parseFloat
val = parseFloat('15.3'); // result 15.3


console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));