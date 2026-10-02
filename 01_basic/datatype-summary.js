// primitive Data type

// 7 types: String, Number, Boolean, BigInt, Undefined, null, Symbol

/*let userName;
console.log(typeof userName)*/


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 45879321n  // n javascript ko signal dega ki yah BigInt hai koi normal nhi

    /*10n + 20n   // ✅ 30n
    10 + 20     // ✅ 30

    10n + 20    // ❌ TypeError*/


// Reference (Non- Primitive)

// Array, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"] // array

let MyObj = {                                  // object
    name:"Ayush",
    age: 20,
}

const MyFunction = function(){                // function
    console.log("Hello world")
}

console.log(typeof MyFunction)
console.log(typeof heros)
console.log(typeof MyObj)




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // Memory

// 1.Stack (primitive), 2.Heap (non-primitive)

    // 1.stack

let MyName = "Ayush"           // original me change nhi hota 

let MyName2 = MyName           // yah pe copy aati hai original nhi toh, isliye original me changes nhi hota
MyName2 = "Rahul"

console.log(MyName2);
console.log(MyName);

    // 2.Heap

let userOne= {                         // isme jobi changes hote hai vo original me bhi hote hai
    email: "ayush@googlecom",
    upi: "user@paytm"
}

let userTwo = userOne                   // EXAMPLE

userTwo.email = "Rahul@googlecom"           

console.log(userTwo.email)