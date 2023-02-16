let current = 0;

const pokemonName = [           // Name, Number, Weight, Height, Types, Abilities, Hidden Abilities, HP, ATK, DEF, SPD, EXP
    ["Bulbasaur", "0001", "6.9 KG", "0.7 M", ["Grass", "Poison"], "Seed", ["Overgrow"], ["Chlorophyll"], "", "", "", "", ""],
    ["Ivysaur", "0002", "13.0 KG", "1.0 M", ["Grass", "Poison"], "Seed", ["Overgrow"], ["Chlorophyll"], "", "", "", "", ""],    
    ["Venusaur", "0003", "100.0 KG", "2.0 M", ["Grass", "Poison"], "Seed", ["Overgrow"], ["Chlorophyll"], "", "", "", "", ""],
    ["Charmander", "0004", "8.5 KG", "0.6 M", ["Fire"], "Lizard", ["Blaze"], ["Solar Power"], "", "", "", "", ""],
    ["Charmeleon", "0005", "19.0 KG", "1.1 M", ["Fire"], "Flame", ["Blaze"], ["Solar Power"], "", "", "", "", ""],
    ["Charizard", "0006", "90.5 KG", "1.7 M", ["Fire", "Flying"], "Flame", ["Blaze"], ["Solar Power"], "", "", "", "", ""],
    ["Squirtle", "0007", "9.0 KG", "0.5 M", ["Water"], "Tiny Turtle", ["Torrent"], ["Rain Dish"], "", "", "", "", ""],
    ["Wartortle", "0008", "22.5 KG", "1.0 M", ["Water"], "Turtle", ["Torrent"], ["Rain Dish"], "", "", "", "", ""],
    ["Blastoise", "0009", "85.5 KG", "1.6 M", ["Water"], "Shellfish", ["Torrent"], ["Rain Dish"], "", "", "", "", ""],
    ["Caterpie", "0010", "2.9 KG", "0.3 M", ["Bug"], "Worm", ["Shield Dust"], ["Run Away"], "", "", "", "", ""],
    ["Metapod", "0011", "9.9 KG", "0.7 M", ["Bug"], "Cocoon", ["Shed Skin"], ["-------"], "", "", "", "", ""],
    ["Butterfree", "0012", "32.0 KG", "1.1 M", ["Bug", "Flying"], "Butterfly", ["Compound Eyes"], ["Tinted Lens"], "", "", "", "", ""],
    ["Weedle", "0013", "3.2 KG", "0.3 M", ["Bug", "Poison"], "Hairy Bug", ["Shield Dust"], ["Run Away"], "", "", "", "", ""],
    ["Kakuna", "0014", "10.0 KG", "0.6 M", ["Bug", "Poison"], "Cocoon", ["Shed Skin"], ["-------"], "", "", "", "", ""],
    ["Beedrill", "0015", "29.5 KG", "1.0 M", ["Bug", "Poison"], "Poison Bee", ["Swarm"], ["Sniper"], "", "", "", "", ""],
    ["Pidgey", "0016", "1.8 KG", "0.3 M", ["Normal", "Flying"], "Tiny Bird", ["Keen Eye or Tangled Feet"], ["Big Pecks"], "", "", "", "", ""],
    ["Pidgeotto", "0017", "30.0 KG", "1.1 M", ["Normal", "Flying"], "Bird", ["Keen Eye or Tangled Feet"], ["Big Pecks"], "", "", "", "", ""], 
    ["Pidgeot", "0018", "39.5 KG", "1.5 M", ["Normal", "Flying"], "Bird", ["Keen Eye or Tangled Feet"], ["Big Pecks"], "", "", "", "", ""],
    ["Rattata", "0019", "3.5 KG", "0.3 M", ["Normal"], "Mouse", ["Run Away or Guts"], ["Hustle"], "", "", "", "", ""],
    ["Raticate", "0020", "18.5 KG", "0.7 M", ["Normal"], "Mouse", ["Run Away or Guts"], ["Hustle"], "", "", "", "", ""],
    ["Spearow", "0021", "2.0 KG", "0.3 M", ["Normal", "Flying"], "Tiny Bird", ["Keen Eye"], ["Sniper"], "", "", "", "", ""],
    ["Fearow", "0022", "38.0 KG", "1.2 M", ["Normal", "Flying"], "Beak", ["Keen Eye"], ["Sniper"], "", "", "", "", ""],
    ["Ekans", "0023", "6.9 KG", "2.0 M", ["Poison"], "Snake", "Intimidate or Shed Skin", "Unnerve", "", "", "", "", ""],
    ["Arbok", "0024", "65.0 KG", "3.5 M", ["Poison"], "Cobra", "Intimidate or Shed Skin", "Unnerve", "", "", "", "", ""],
    ["Pikachu", "0025", "6.0 KG", "0.4 M", ["Electric"], "Mouse", "Static", "Lightning Rod", "", "", "", "", ""],
    ["Raichu", "0026", "30.0 KG", "0.8 M", ["Electric"], "Mouse", "Static", "Lightning Rod", "", "", "", "", ""],
    ["Sandshrew", "0027", "12.0 KG", "0.6 M", ["Ground"], "Mouse", "Sand Veil", "Sand Rush", "", "", "", "", ""],
    ["Sandslash", "0028", "29.5 KG", "1.0 M", ["Ground"], "Mouse", "Sand Veil", "Sand Rush", "", "", "", "", ""],
    ["Nidoran♀", "0029", "7.0 KG", "0.4 M", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "", "", "", "", ""],
    ["Nidorina", "0030", "20.0 KG", "0.8 M", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "", "", "", "", ""],
    ["Nidoqueen", "0031", "60.0 KG", "1.3 M", ["Poison", "Ground"], "Drill", "Poison Point or Rivalry", "Sheer Force", "", "", "", "", ""],
    ["Nidoran♂", "0032", "9.0 KG", "0.5 M", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "", "", "", "", ""],
    ["Nidorino", "0033", "19.5 KG", "0.9 M", ["Poison"], "Poison Pin", "Poison Point or Rivalry", "Hustle", "", "", "", "", ""],
    ["Nidoking", "0034", "62.0 KG", "1.4 M", ["Poison", "Ground"], "Drill", "Poison Point or Rivalry", "Sheer Force", "", "", "", "", ""],
    ["Clefairy", "0035", "7.5 KG", "0.6 M", ["Fairy"], "Fairy", "Cute Charm or Magic Guard", "Friend Guard", "", "", "", "", ""],
    ["Clefable", "0036", "40.0 KG", "1.3 M", ["Fairy"], "Fairy", "Cute Charm or Magic Guard", "Unaware", "", "", "", "", ""],
    ["Vulpix", "0037", "9.9 KG", "0.6 M", ["Fire"], "Fox", "Flash Fire", "Drought", "", "", "", "", ""],
    ["Ninetales", "0038", "19.9 KG", "1.1 M", ["Fire"], "Fox", "Flash Fire", "Drought", "", "", "", "", ""],
    ["Jigglypuff", "0039", "5.5 KG", "0.5 M", ["Normal", "Fairy"], "Balloon", "Cute Charm or Competitive", "Friend Guard", "", "", "", "", ""],
    ["Wigglytuff", "0040", "12.0 KG", "1.0 M", ["Normal", "Fairy"], "Balloon", "Cute Charm or Competitive", "Frisk", "", "", "", "", ""]   
]
// ["", "", " KG", " M", [""]],
// 


const images = [
    '0001Bulbasaur.png',
    '0002Ivysaur.png', 
    '0003Venusaur.png', 
    '0004Charmander.png',
    '0005Charmeleon.png',
    '0006Charizard.png',
    '0007Squirtle.png',
    '0008Wartortle.png',
    '0009Blastoise.png',
    '0010Caterpie.png',
    '0011Metapod.png',
    '0012Butterfree.png',
    '0013Weedle.png',
    '0014Kakuna.png',
    '0015Beedrill.png',
    '0016Pidgey.png',
    '0017Pidgeotto.png',
    '0018Pidgeot.png',
    '0019Rattata.png',
    '0020Raticate.png',
    '0021Spearow.png',
    '0022Fearow.png',
    '0023Ekans.png',
    '0024Arbok.png',
    '0025Pikachu.png',
    '0026Raichu.png',
    '0027Sandshrew.png',
    '0028Sandslash.png',
    '0029Nidoran.png',
    '0030Nidorina.png',
    '0031Nidoqueen.png',
    '0032Nidoran.png',
    '0033Nidorino.png',
    '0034Nidoking.png',
    '0035Clefairy.png',
    '0036Clefable.png',
    '0037Vulpix.png',
    '0038Ninetales.png',
    '0039Jigglypuff.png',
    '0040Wigglytuff.png',
];

function createBugType() {
    var Bug = document.createElement("div");
    Bug.innerHTML = "Bug";
    Bug.id = "bugType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Bug);
}
let removeBugType = () => {
    let removeBug = document.getElementById("bugType");
    if (removeBug) {
        removeBug.parentNode.removeChild(removeBug);
    }
}
function createDarkType() {
    let Dark = document.createElement("div");
    Dark.innerHTML = "Dark";
    Dark.id = "darkType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Dark);
}
let removeDarkType = () => {
    let removeDark = document.getElementById("darkType");
    if (removeDark) {
        removeDark.parentNode.removeChild(removeDark);
    }
}
function createDragonType() {
    let Dragon = document.createElement("div");
    Dragon.innerHTML = "Dragon";
    Dragon.id = "dragonType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Dragon);
}
let removeDragonType = () => {
    let removeDragon = document.getElementById("dragonType");
    if (removeDragon) {
        removeDragon.parentNode.removeChild(removeDragon);
    }
}
function createElectricType() {
    let Electric = document.createElement("div");
    Electric.innerHTML = "Electric";
    Electric.id = "electricType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Electric);
}
let removeElectricType = () => {
    let removeElectric = document.getElementById("electricType");
    if (removeElectric) {
        removeElectric.parentNode.removeChild(removeElectric);
    }
}
function createFairyType() {
    let Fairy = document.createElement("div");
    Fairy.innerHTML = "Fairy";
    Fairy.id = "fairyType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Fairy);
}
let removeFairyType = () => {
    let removeFairy = document.getElementById("fairyType");
    if (removeFairy) {
        removeFairy.parentNode.removeChild(removeFairy);
    }
}
function createFightingType() {
    let Fighting = document.createElement("div");
    Fighting.innerHTML = "Fighting";
    Fighting.id = "fightingType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Fighting);
}
let removeFightingType = () => {
    let removeFighting = document.getElementById("fightingType");
    if (removeFighting) {
        removeFighting.parentNode.removeChild(removeFighting);
    }
}
function createFireType() {
    var Fire = document.createElement("div");
    Fire.innerHTML = "Fire";
    Fire.id = "fireType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Fire);
}
let removeFireType = () => {
    let removeFire = document.getElementById("fireType");
    if (removeFire) {
        removeFire.parentNode.removeChild(removeFire);
    }
}
function createFlyingType() {
    let Flying = document.createElement("div");
    Flying.innerHTML = "Flying";
    Flying.id = "flyingType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Flying);
}
let removeFlyingType = () => {
    let removeFlying = document.getElementById("flyingType");
    if (removeFlying) {
        removeFlying.parentNode.removeChild(removeFlying);
    }
}
function createGhostType() {
    let Ghost = document.createElement("div");
    Ghost.innerHTML = "Ghost";
    Ghost.id = "ghostType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Ghost);
}
let removeGhostType = () => {
    let removeGhost = document.getElementById("ghostType");
    if (removeGhost) {
        removeGhost.parentNode.removeChild(removeGhost)
    }
}
function createGrassType() {
    let Grass = document.createElement("div");
    Grass.innerHTML = "Grass";
    Grass.id = "grassType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Grass);
}
let removeGrassType = () => {
    let removeGrass = document.getElementById("grassType");
    if (removeGrass) {
        removeGrass.parentNode.removeChild(removeGrass)
    }
}
function createGroundType() {
    let Ground = document.createElement("div");
    Ground.innerHTML = "Ground";
    Ground.id = "groundType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Ground);
}
let removeGroundType = () => {
    let removeGround = document.getElementById("groundType");
    if (removeGround) {
        removeGround.parentNode.removeChild(removeGround)
    }
}
function createIceType() {
    let Ice = document.createElement("div");
    Ice.innerHTML = "Ice";
    Ice.id = "iceType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Ice);
}
let removeIceType = () => {
    let removeIce = document.getElementById("iceType");
    if (removeIce) {
        removeIce.parentNode.removeChild(removeIce)
    }
}
function createNormalType() {
    let Normal = document.createElement("div");
    Normal.innerHTML = "Normal";
    Normal.id = "normalType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Normal);
}
let removeNormalType = () => {
    let removeNormal = document.getElementById("normalType");
    if (removeNormal) {
        removeNormal.parentNode.removeChild(removeNormal)
    }
}
function createPoisonType() {
    let Poison = document.createElement("div");
    Poison.innerHTML = "Poison";
    Poison.id = "poisonType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Poison);
}
let removePoisonType = () => {
    let removePoison = document.getElementById("poisonType");
    if (removePoison) {
        removePoison.parentNode.removeChild(removePoison)
    }
}
function createPsychicType() {
    let Psychic = document.createElement("div");
    Psychic.innerHTML = "Psychic";
    Psychic.id = "psychicType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Psychic);
}
let removePsychicType = () => {
    let removePsychic = document.getElementById("psychicType");
    if (removePsychic) {
        removePsychic.parentNode.removeChild(removePsychic)
    }
}
function createRockType() {
    let Rock = document.createElement("div");
    Rock.innerHTML = "Rock";
    Rock.id = "rockType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Rock);
}
let removeRockType = () => {
    let removeRock = document.getElementById("rockType");
    if (removeRock) {
        removeRock.parentNode.removeChild(removeRock)
    }
}
function createSteelType() {
    let Steel = document.createElement("div");
    Steel.innerHTML = "Steel";
    Steel.id = "steelType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Steel);
}
let removeSteelType = () => {
    let removeSteel = document.getElementById("steelType");
    if (removeSteel) {
        removeSteel.parentNode.removeChild(removeSteel)
    }
}
function createWaterType() {
    let Water = document.createElement("div");
    Water.innerHTML = "Water";
    Water.id = "waterType";
    parent = document.getElementById("pokemon-type");
    parent.appendChild(Water);
}
let removeWaterType = () => {
    let removeWater = document.getElementById("waterType");
    if (removeWater) {
        removeWater.parentNode.removeChild(removeWater)
    }
}

let removeAllTypes = () => {
    removeBugType();
    removeDarkType();
    removeDragonType();
    removeElectricType();
    removeFairyType();
    removeFightingType();
    removeFireType();
    removeFlyingType();
    removeGhostType();
    removeGrassType();
    removeGroundType();
    removeIceType();
    removeNormalType();
    removePoisonType();
    removePsychicType();
    removeRockType();
    removeSteelType();
    removeWaterType();
}

let backgroundBug = () => {
    let BugBG = document.getElementById("abilities");
    BugBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundDark = () => {
    let DarkBG = document.getElementById("abilities");
    DarkBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundDragon = () => {
    let DragonBG = document.getElementById("abilities");
    DragonBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundElectric = () => {
    let ElectricBG = document.getElementById("abilities");
    ElectricBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFairy = () => {
    let FairyBG = document.getElementById("abilities");
    FairyBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFighting = () => {
    let FightingBG = document.getElementById("abilities");
    FightingBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFire = () => {
    let FireBG = document.getElementById("abilities");
    FireBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundFlying = () => {
    let FlyingBG = document.getElementById("abilities");
    FlyingBG.classList.add = `abilities-${pokemonName[current][4][0]}`;
}
let backgroundGhost = () => {
    let GhostBG = document.getElementById("abilities");
    GhostBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundGrass = () => {
    let GrassBG = document.getElementById("abilities");
    GrassBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundGround = () => {
    let GroundBG = document.getElementById("abilities");
    GroundBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundIce = () => {
    let IceBG = document.getElementById("abilities");
    IceBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundNormal = () => {
    let NormalBG = document.getElementById("abilities");
    NormalBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundPoison = () => {
    let PoisonBG = document.getElementById("abilities");
    PoisonBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundPsychic = () => {
    let PsychicBG = document.getElementById("abilities");
    PsychicBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundRock = () => {
    let RockBG = document.getElementById("abilities");
    RockBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundSteel = () => {
    let SteelBG = document.getElementById("abilities");
    SteelBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}
let backgroundWater = () => {
    let WaterBG = document.getElementById("abilities");
    WaterBG.classList.add(`abilities-${pokemonName[current][4][0]}`);
}

console.log(`abilities-${pokemonName[current][4][0]}`)
let backgroundTypeRemove = () => {
        let removeBG = document.getElementById("abilities");
        removeBG.classList.remove("abilities-Dark");
        removeBG.classList.remove("abilities-Bug");
        removeBG.classList.remove("abilities-Dragon");
        removeBG.classList.remove("abilities-Electric");
        removeBG.classList.remove("abilities-Fairy");
        removeBG.classList.remove("abilities-Fighting");
        removeBG.classList.remove("abilities-Fire");
        removeBG.classList.remove("abilities-Flying");
        removeBG.classList.remove("abilities-Ghost");
        removeBG.classList.remove("abilities-Grass");
        removeBG.classList.remove("abilities-Ground");
        removeBG.classList.remove("abilities-Ice");
        removeBG.classList.remove("abilities-Normal");
        removeBG.classList.remove("abilities-Poison");
        removeBG.classList.remove("abilities-Psychic");
        removeBG.classList.remove("abilities-Rock");
        removeBG.classList.remove("abilities-Steel");
        removeBG.classList.remove("abilities-Water");
    }

let updateUI = function() {
    let currentPokemon = pokemonName[current];

    const Name = document.querySelector("#pokemon-name");
    const pokemonBG = document.getElementById("abilities");
    const pokemonClassification = document.getElementById("pokemon-classification");
    const numberPokedex = document.querySelector("#pokemon-number");
    const weightPokedex = document.querySelector("#pokemon-weight");
    const heightPokedex = document.querySelector("#pokemon-height");
    const typePokedex = document.querySelector("#pokemon-type");
    const imagesPokedex = document.getElementById("pokemon-image")
    const pokemonAbility = document.getElementById("ability");
    const pokemonHiddenAbility = document.getElementById("hidden-ability");

    Name.textContent = currentPokemon[0];
    imagesPokedex.src = `Images/${images[current]}`;
    numberPokedex.textContent = currentPokemon[1];
    weightPokedex.textContent = currentPokemon[2];
    heightPokedex.textContent = currentPokemon[3];
    pokemonClassification.textContent = `${currentPokemon[5]} Pokemon`;
    pokemonAbility.textContent = currentPokemon[6];
    pokemonHiddenAbility.textContent = currentPokemon[7];

    console.log(Name);
    console.log(currentPokemon[0]);
    console.log(currentPokemon[1]);
    console.log(currentPokemon[2]);
    console.log(currentPokemon[3]);
    console.log(current, "current value")

    let typeGenerator = () => {
        if(currentPokemon[4].length == 2){
            if(currentPokemon[4][0] == "Grass" && currentPokemon[4][1] == "Poison"){
                removeAllTypes();
                createGrassType();
                createPoisonType();
                backgroundTypeRemove();
                backgroundGrass();
            }
            if(currentPokemon[4][0] == "Fire" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createFireType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundFire();
            }
            if(currentPokemon[4][0] == "Bug" && currentPokemon[4][1] == "Poison"){
                removeAllTypes();
                createBugType();
                createPoisonType();
                backgroundTypeRemove();
                backgroundBug();
            }
            if(currentPokemon[4][0] == "Bug" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createBugType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundBug();
            }
            if(currentPokemon[4][0] == "Normal" && currentPokemon[4][1] == "Flying"){
                removeAllTypes();
                createNormalType();
                createFlyingType();
                backgroundTypeRemove();
                backgroundNormal();
            }
            if(currentPokemon[4][0] == "Normal" && currentPokemon[4][1] == "Fairy"){
                removeAllTypes();
                createNormalType();
                createFairyType();
                backgroundTypeRemove();
                backgroundNormal();
            }
            if(currentPokemon[4][0] == "Poison" && currentPokemon[4][1] == "Ground"){
                removeAllTypes();
                createPoisonType();
                createGroundType();
                backgroundTypeRemove();
                backgroundPoison();
            }
            
            
        } else if (currentPokemon[4].length == 1){
            if(currentPokemon[4].includes("Grass")){
                removeAllTypes();
                createGrassType();
                backgroundTypeRemove();
                backgroundGrass();
            }
            if(currentPokemon[4].includes("Fire")){
                removeAllTypes();
                createFireType();
                backgroundTypeRemove();
                backgroundFire();
            }
            if(currentPokemon[4].includes("Water")){
                removeAllTypes();
                createWaterType();
                backgroundTypeRemove();
                backgroundWater();
            }
            if(currentPokemon[4].includes("Poison")){
                removeAllTypes();
                createPoisonType();
                backgroundTypeRemove();
                backgroundPoison();
            }
            if(currentPokemon[4].includes("Flying")){
                removeAllTypes();
                createFlyingType();
                backgroundTypeRemove();
                backgroundFlying();
            }
            if(currentPokemon[4].includes("Bug")){
                removeAllTypes();
                createBugType();
                backgroundTypeRemove();
                backgroundBug();
            }
            if(currentPokemon[4].includes("Normal")){
                removeAllTypes();
                createNormalType();
                backgroundTypeRemove();
                backgroundNormal();
            }
            if(currentPokemon[4].includes("Fairy")){
                removeAllTypes();
                createFairyType();
                backgroundTypeRemove();
                backgroundFairy();
            }
        }
    }
    typeGenerator();
};

const buttonPrev = document.querySelector("#Prev");
    buttonPrev.addEventListener("click", function(){
        if (current === 0) {
            current = pokemonName.length - 1;
        } else {
            current = current - 1;
        }
        console.log(current, " prev");
        updateUI();
    });

    const buttonNext = document.querySelector("#Next");
    buttonNext.addEventListener("click", function(){
        if (current === pokemonName.length - 1) {
            current = 0;
        } else {
            current = current + 1;
        }
        console.log(current, " next");
        updateUI();
        
    });

updateUI();




