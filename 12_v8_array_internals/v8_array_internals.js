
//    PART 1: THE TOOLS (V8 Debugging)

// To actually see these internal workings, we can't just use standard 
// Node.js or browser consoles
// We need special debugging tools:
// 1. JSVU (JavaScript Engine Version Updater): 
// A tool to install specific JS engines locally
// 2. v8-debug: A debug version of the V8 engine that exposes internal methods
   
// To run this file and see the internal debug prints, you would use:
// ~/.jsvu/bin/v8-debug --allow-natives-syntax file_name.js 
   
// The flag `--allow-natives-syntax` allows us to use V8 specific commands like `%DebugPrint(arr)`


const myArr = [];
// %DebugPrint(myArr); // This will only work with the v8-debug engine and 
// the --allow-natives-syntax flag


//     PART 2: ARRAY TYPES & OPTIMIZATIONS
// The V8 engine categorizes arrays into two main memory layouts
// 1. Continuous (Packed): Arrays without any empty slots/gaps (Highly Optimized)
// 2. Holey: Arrays that have gaps/empty slots (Less Optimized)
   
// Within these layouts, elements are further optimized into 3 types
// - SMI (Small Integer): Only contains whole numbers
// - Double: Contains floating-point numbers, NaN, or Infinity
// - Elements (Packed/Regular): Contains Strings, Objects, Functions, etc

// --- CONTINUOUS (PACKED) ARRAYS ---

// 1. PACKED_SMI_ELEMENTS 
// Best and most optimized type of array. It only contains whole numbers
const arrTwo = [1, 2, 3, 4, 5]; 
// %DebugPrint(arrTwo); -> PACKED_SMI_ELEMENTS 

// 2. PACKED_DOUBLE_ELEMENTS
// Pushing a floating point number immediately downgrades the array optimization to Double
arrTwo.push(6.0); 
// %DebugPrint(arrTwo); -> PACKED_DOUBLE_ELEMENTS 

// 3. PACKED_ELEMENTS
// Pushing a string or object downgrades it to the most generic packed type
arrTwo.push("7"); 
// %DebugPrint(arrTwo); -> PACKED_ELEMENTS 

// CRITICAL RULE: DOWNGRADING IS A ONE - WAY STREET
// Once an array is downgraded(e.g., from SMI to Double), it CANNOT be upgraded back
// Even if you delete or pop the string/double, the V8 compiler keeps the lower optimization


// --- HOLEY ARRAYS ---

// If we skip indexes and add an element directly to a far index, we create a "hole"
arrTwo[10] = 11; 
// The array now has empty slots at index 7, 8, and 9.
// %DebugPrint(arrTwo); -> HOLEY_ELEMENTS 

console.log(arrTwo); // [ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 11 ] 
console.log(arrTwo.length); // 11
console.log(arrTwo[9]); // undefined

// WHY ARE HOLES EXPENSIVE? (The Engineering Behind It)
// When you access an index in a holey array (like arrTwo[9]),
// the engine does multiple expensive checks Check: Is the index within the array's length?
// (Yes)  Check: Does the value exist at this index?
// (No, it returns undefined)  Because JS is prototype-based,
// it checks the prototype chain It runs one of the most expensive checks in JS
// to see if the object's prototype has it injected array was Packed (Continuous),
// it would just do the Bound Check and return the value directly


// optimized : SMI > DOUBLE > PACKED
// holes type : H_SMI > H_DOUBLE > H_PACKED

// PART 3: BEST PRACTICES & REAL-WORLD USAGE


// BAD PRACTICE: Creating arrays with predefined empty slots (Pre-allocating holes)
const arrFour = new Array(3); 
// %DebugPrint(arrFour); -> HOLEY_SMI_ELEMENTS  holes, it misses out on the 
// top-tier PACKED_SMI optimization "1"; 
// Downgrades directly to HOLEY_ELEMENTS Start with an empty array and push values
const arrFive = []; 
// %DebugPrint(arrFive); -> PACKED_SMI_ELEMENTS "); 
arrFive.push("2");
arrFive.push("3");
// %DebugPrint(arrFive); -> PACKED_ELEMENTS  up as PACKED_ELEMENTS,
// it avoided the expensive HOLEY classification entirely:
// Adding NaN or Infinity treats the array as Double 2, 3, 4, 5];
const arrSix = [1, 2, 3, 4, 5]
arrSix.push(Infinity)
arrSix.push(NaN); // Downgrades to PACKED_DOUBLE_ELEMENTS:
// Always prefer built-in methods like forEach, map, filter, and for-of loops 
// engine have highly optimized these internal methods for all these 
// specific edge cases (Packed vs Holey, SMI vs Double). Custom loops are often 
// less optimized than the engine's native implementations