const { moduleExpression } = require("@babel/types");

class Dog
{
    constructor(name, furColour, breed)
    {
        this.name = name;
        this.legs = 4;
        this.tailWagging = false;
        this.furColour = furColour
        this.breed = breed
    }
    bark()
    {
       return this.name + " is barking! Bark!"
    }
    pet()
    {
        const excitement = true;
        this.tailWagging = excitement;
        if(this.tailWagging == true)
        {
            this.tailWagging = false;
            return this.name + " loves being pet and it's tail is wagging!"
        }
    }
    run()
    {
        let excitement = true;
        if(excitement == true)
        {
            return this.name + " is very excited during it's run!"
        }
    }
}

const bish = new Dog("bish", "gold", "labrador");
const bash = new Dog("bash", "black", "Husky");
const bosh = new Dog("bosh", "white", "Pomeranian");



module.exports = {
    Dog,
    bish,
    bash,
    bosh,
}