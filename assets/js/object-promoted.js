
//Object

const Person={
    name:'sathish', //Properties
    place:'coimbatore', //Properties
    detailsUser(){
        return `Hello,My name is ${this.name} and i'm coming from ${this.place}`;
    },
};

//Challeges:Dynamic get data in name && place

const userInput=prompt('What is your Name');
const userPlace=prompt('What is your Location');

Person.name=userInput;
Person.place=userPlace;

document.write(Person.detailsUser())