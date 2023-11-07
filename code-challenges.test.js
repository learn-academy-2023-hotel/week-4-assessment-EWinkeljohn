// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("remover", () => {
    it("removes the first item from the array and shuffles the remaining items", () => {
      const colors1 = ["purple", "blue", "green", "yellow", "pink"]
      const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
      // place variables inside scope of test
      expect(remover(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
      expect(remover(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
    })
  })

// Both tests passed successfully

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const remover = (array) => {
    // Define remover function to take in array
    let gone = array.slice(1,array.length)
    // declare new variable for subset excluding first element
    for (let i = gone.length - 1; i > 0; i--) {
        const shuffle = Math.floor(Math.random() * (i + 1))
        const tempIndex = gone[i]
        gone[i] = gone[shuffle]
       gone[shuffle] = tempIndex
    //    Use Fisher-Yates algorithm to place each element at new randomized index -- hardcoded with gone
    }
    return gone
    // return new array after shuffling
} 
console.log(remover(colors1))
console.log(remover(colors2))

// Pseudo code:

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("totalVotes", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(totalVotes(votes1)).toEqual(11)
    expect(totalVotes(votes2)).toEqual(-31)
  })
})

// Both tests passed successfully

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

const totalVotes = (object) => {
  // define function to take in object
  return object.upVotes - object.downVotes
  // return the value at the key downVotes subtracted from the value at the key upVotes
}
console.log(totalVotes(votes1))
console.log(totalVotes(votes2))
