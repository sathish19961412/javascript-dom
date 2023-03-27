
//Object

const Person={
    name:'sathish', //Properties
    place:'coimbatore', //Properties
    detailsUser(){
        return `Hello,My name is ${this.name} and i'm coming from ${this.place}`;
    },
};

Person.name="mathew";
Person.place="usa";
const person1= Person.detailsUser()

//console.log(person1);

document.body.innerHTML=`<h1>${person1}<h1>`;
//document.write(person1);