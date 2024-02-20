
var spells = ["","","","","","","","","","","","","","","","",];

const abjurer = ["Disenchant","Ritual of Banishment","Resist Magic","Disrupt","Soul Bane","Enfeeble Being","Detect Magic", "Disrupt Light","Mentor","Pas", "Aura of Protection"];
const alchemist = ["Strange Brew","Alchemy"];
const assassin = ["Create Poison","Enchant Weapon","Deep Pockets","Death Watch","Assassin's Blade","Armor-Piercing Weapon","Feign Death","Disease Weapon","Ghost Blade"];
const blacksmith = ["Repair Item","Masterwork Hammer","Reforge","Mystic Forge","Enchant Armor","Protect Item", "Repair Armor"];
const channeler = ["Circle of Protection","Ward: Undead","Protect the Soul","Intervention","Ward: Enchanted Beings","Divine Aid","Call the Soul"];
const healer = ["Combat Raise Dead","Heal Limb","Group Healing","Seed of Life","Cry of Life","Circle of Healing","Raise Dead","Purity to Poison","Purity to Disease","Cure Disease", "Immunity to Poison",];
const necromancer = ["Embrace Death","Animate Undead General","Death Wish","Animate Undead","Commune with Spirit","Speak with Dead", "Zombie Walk", "Beckon Corpse"];
const sorcerer = ["Armored Cloak","Protection from Missile","Lightning Bolt","Magic Missile","Implement", "Light", "Protection from Boulder","Fighter's Intuition"];
const seer = ["Guidance","Dream","Prophecy","Vision","Séance","Foretell","Find the Path","Skew Divination","Precognition","Fortune Tell","Identify"];
const shaman = ["Second Chance","Resist Death","Regeneration","Regenerate the Soul","Familiar","Transmute Self","Shapeshifting","Animal Companion","Speak", "Cantrip","Heartiness"];

const options = [abjurer, alchemist, assassin, blacksmith, channeler, healer, necromancer, sorcerer, seer, shaman];
const names = ["abjurer", "alchemist", "assassin", "blacksmith", "channeler", "healer", "necromancer", "sorcerer", "seer", "shaman"];


const build = {
    abjurer: 0,
    alchemist: 0,
    assassin: 0,
    blacksmith: 0,
    channeler: 0,
    healer: 0,
    necromancer: 0,
    sorcerer: 0,
    seer: 0,
    shaman: 0
};

for(type of names) {
    if(localStorage.getItem(type) == "undefined") {
        build[type] = 0;
    }
    else {
        build[type] = Number(localStorage.getItem(type));
    }
}

for (let i = 0; i <= 15; i++) {
    var list = document.getElementsByClassName("spell");
    spells[i] = localStorage.getItem(i); 
    if(localStorage.getItem(i) == "undefined" || localStorage.getItem(i) == "null") {
        list[i].firstChild.nodeValue = "";
    }
    else {
        list[i].firstChild.nodeValue = localStorage.getItem(i);
    }
}

function resetData() {
    for(type of names) {
        build[type] = 0;
    }
}

function reset() {
    for(list of document.getElementsByClassName("spell")) {
        list.firstChild.nodeValue = "";
    }
    spells = [];
    for(type of names) {
        build[type] = 0;
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.setItem(i, spells[i]);
    }
    for (let i = 0; i <= 15; i++) {
        localStorage.setItem(i, spells[i]);
    }
    for(obj of names) {
        localStorage.setItem(obj,build[obj])
    }
    resetData();
}

function showMenu(me, name) {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('c' + i + '-menu').setAttribute('hidden', 'hidden');
    }
    document.getElementById(name).removeAttribute('hidden');
    for (let i = 1; i <= 6; i++) {
        document.getElementById('c' + i).removeAttribute('hidden');
    }
    document.getElementById(me).setAttribute('hidden', 'hidden');
}

function hideMenu(num) {
    document.getElementById('c' + num).removeAttribute('hidden');
    document.getElementById('c' + num + '-menu').setAttribute('hidden', 'hidden');
}


function dragstartHandler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    for(list of document.getElementsByClassName("spell")) {
        if(ev.target.id[0] > list.getAttribute("id")) {
            list.setAttribute("style", "visibility: hidden;");
        }
        else {
            list.setAttribute("style", "border: #237573 solid;");
        }
    }
}

function dragendHandler(ev) {
    for(list of document.getElementsByClassName("spell")) {
        list.setAttribute("style", "visibility: visible;");
        list.setAttribute("style", "border: #3b46d9 solid;");
    } 
}

function dragoverHandler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
    const data = ev.dataTransfer.getData("application/my-app");
}

function dropHandler(ev) {
    for(list of document.getElementsByClassName("spell")) {
        list.setAttribute("style", "border: #3b46d9 solid;");
    }
    ev.preventDefault();
    const data = ev.dataTransfer.getData("application/my-app");
    

    if(document.getElementById(data).getAttribute('class')[3] <= ev.target.getAttribute('id')[0]) {
        ev.target.firstChild.nodeValue = document.getElementById(data).firstChild.nodeValue;
        if(ev.target.getAttribute('id')[0] == '1') {
            spells[Number(ev.target.getAttribute('id')[1])-1] = document.getElementById(data).firstChild.nodeValue;
        }
        else if (ev.target.getAttribute('id')[0] == '2') {
            spells[Number(ev.target.getAttribute('id')[0])+Number(ev.target.getAttribute('id')[1])] = document.getElementById(data).firstChild.nodeValue;
        }
        else if (ev.target.getAttribute('id')[0] == '3') {
            spells[Number(ev.target.getAttribute('id')[0])*2+Number(ev.target.getAttribute('id')[1])-1] = document.getElementById(data).firstChild.nodeValue;
        }
        else if (ev.target.getAttribute('id')[0] == '4') {
            spells[Number(ev.target.getAttribute('id')[0])*2+Number(ev.target.getAttribute('id')[1])] = document.getElementById(data).firstChild.nodeValue;
        }
        else if (ev.target.getAttribute('id')[0] == '5') {
            spells[Number(ev.target.getAttribute('id')[0])*2+Number(ev.target.getAttribute('id')[1])+1] = document.getElementById(data).firstChild.nodeValue;
        }
        else if (ev.target.getAttribute('id')[0] == '6') {
            spells[15] = document.getElementById(data).firstChild.nodeValue;
        }
    }


    resetData();
    for(let i = 0; i <= spells.length; i++) {
        if(spells[i] != "undefined") {
            var circle = 0;

            if(i < 3) {
                circle = 1;
            }
            else if(i < 6) {
                circle = 2;
            }
            else if(i < 9) {
                circle = 3;
            }
            else if(i < 12) {
                circle = 4;
            }
            else if(i < 15) {
                circle = 5;
            }
            else if(i == 15) {
                circle = 6;
            }
            
            for (let j = 0; j < 10; j++) {
                if(options[j].includes(spells[i])) {
                    build[names[j]] += circle;
                    break;
                }
            }
        }
    }


    for (let i = 0; i <= 15; i++) {
        localStorage.setItem(i, spells[i]);
    }
    for(obj of names) {
        localStorage.setItem(obj,build[obj])
    }
}


