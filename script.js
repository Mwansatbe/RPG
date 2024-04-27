let xp = 0;
let health = 100;
let gold = 50;

let currentWeapon = 0;
 
let fighting;

let monstersHealth;

let inventory =[
    "stick",
];

const  button1 =document.querySelector("#button1");
const  button2 =document.querySelector("#button2");
const  button3 =document.querySelector("#button3");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const monsterStats = document.querySelector("#monsterStats");
const goldText = document.querySelector("#goldText");
const monsterNameText = document.querySelector("#monsterName");
const text = document.querySelector("#text");
const monsterHealthText = document.querySelector("#monsterHealthText");



const locations =[
    {
        name: "Town Square", 
        "button text": ["Go to store","Go to cave", "Fight Dragon"],
        "button function": [goStore, goCave, fightDragon],
         text: "You're in town square and see a sign that says \"Store\""

    },
    {
       name: "You're in the store",
       "button text": ["Buy Health (10 gold)","Buy weapon (30 gold)", "Go to town Square"],
       "button function": [buyHealth, buyWeapon,goTown],
        text: "You're in the store"

    }
   // {
//         name: "You're in the cave",
//         "button text": ["Buy Health (10 gold)","Buy weapon (30 gold)", "Go to town Square"],
//         "button function": [goStore, goCave, fightDragon],
//          text: "You're in the store"

    //}
 ];


//  initialize buttons

button1.onclick =goStore;
button2.onclick =goCave;
button3.onclick=fightDragon;



function update(locations){
    button1.innerHTML=locations["button text"][0];
    button2.innerHTML=locations["button text"][1];
    button3.innerHTML=locations["button text"][2];
    button1.onclick =locations["button function"][0];
    button2.onclick =locations["button function"][1];
    button3.onclick =locations["button function"][2];
    text.innerHTML= locations["text"];


}


function goTown(){
    update(locations[0]);
    

};

function goStore(){
    update(locations[1]);
    

};


function buyHealth(){
    console.log("health added");
}

function buyWeapon(){
    console.log("Weapon Added");
}
function goCave(){
    button2.innerHTML=("Going to cave now");
}

function fightDragon(){
    button3.innerHTML=("Fighting the dragon"); 
}


 
