const { describe } = require("yargs")
const dogIndex = require("./index")

describe("To run through each method in the dog class", () =>{
    test("Test if the bark method works", ()=>{
        let stringOutputBark = dogIndex.bish.bark()
        expect(stringOutputBark).toBe("bish is barking! Bark!")
    })
    
    test("Test if the pet method works", ()=>{
        let stringOutputPet = dogIndex.bish.pet()
        expect(stringOutputPet).toBe("bish loves being pet and it's tail is wagging!")
    })
    
    test("Test if the run method works", ()=>{
        let stringOutputRun = dogIndex.bish.run()
        expect(stringOutputRun).toBe("bish is very excited during it's run!")
    })
})
