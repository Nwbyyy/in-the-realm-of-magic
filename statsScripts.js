
var spells = ["","","","","","","","","","","","","","","","",];

const abjurer = ["Disenchant","Ritual of Banishment","Resist Magic","Disrupt","Soul Bane","Enfeeble Being","Detect Magic", "Disrupt Light","Mentor","Pas", "Aura of Protection"];
const alchemist = ["Strange Brew","Alchemy"];
const assassin = ["Create Poison","Enchant Weapon","Deep Pockets","Death Watch","Assassin's Blade","Armor-Piercing Weapon","Feign Death","Disease Weapon","Ghost Blade"];
const blacksmith = ["Repair Item","Masterwork Hammer","Reforge","Mystic Forge","Enchant Armor","Armored Cloak","Protect Item", "Repair Armor"];
const channeler = ["Circle of Protection","Ward: Undead","Protect the Soul","Intervention","Ward: Enchanted Beings","Divine Aid","Call the Soul"];
const healer = ["Combat Raise Dead","Heal Limb","Group Healing","Seed of Life","Cry of Life","Circle of Healing","Raise Dead","Purity to Poison","Purity to Disease","Cure Disease", "Immunity to Poison",];
const necromancer = ["Embrace Death","Animate Undead General","Death Wish","Animate Undead","Commune with Spirit","Speak with Dead", "Zombie Walk", "Beckon Corpse"];
const sorcerer = ["Protection from Missile","Lightning Bolt","Magic Missile","Implement", "Light", "Protection from Boulder","Fighter's Intuition"];
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

for (type of names) {
    if(localStorage.getItem(type) == "undefined") {
        build[type] = 0;
    }
    else {
        build[type] = Number(localStorage.getItem(type));
    }
}


const autocolors = window['chartjs-plugin-autocolors'];


for(type of names) {
    if(localStorage.getItem(type) == "undefined") {
        build[type] = 0;
    }
    else {
        build[type] = Number(localStorage.getItem(type));
    }
}

const ctx = document.getElementById('pieChart');
      
var chartChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [names[0].charAt(0).toUpperCase() + names[0].slice(1),names[1].charAt(0).toUpperCase() + names[1].slice(1),names[2].charAt(0).toUpperCase() + names[2].slice(1),names[3].charAt(0).toUpperCase() + names[3].slice(1),names[4].charAt(0).toUpperCase() + names[4].slice(1),names[5].charAt(0).toUpperCase() + names[5].slice(1),names[6].charAt(0).toUpperCase() + names[6].slice(1),names[7].charAt(0).toUpperCase() + names[7].slice(1),names[8].charAt(0).toUpperCase() + names[8].slice(1),names[9].charAt(0).toUpperCase() + names[9].slice(1),],
    datasets: [{
      label: 'Circle Points',
      data: [build[names[0]],build[names[1]],build[names[2]],build[names[3]],build[names[4]],build[names[5]],build[names[6]],build[names[7]],build[names[8]],build[names[9]],],
    }]
  },
  plugins: [
    autocolors
  ],
  options: {
    plugins: {
        autocolors: {
            mode: 'data'
        },
        title: {
            display: true,
            text: 'Your Build Breakdown',
            font: {
                family: "'Immortal', sans-serif",
                size: "30 vmin"
            }
        },
        legend: {
            labels: {
                font: {
                    family: "'Immortal', sans-serif",
                    size: "15 vmin"
                }
            }
        }
    }
  }

});


function setClass(event) {
    var max = 0;
    var maxType = "";
    for(type of names) {
        if(build[type] > max) {
            max = build[type];
            maxType = type;
        }
    }
    if(!(maxType == "")) {
        document.getElementById("type").innerText = maxType.charAt(0).toUpperCase() + maxType.slice(1);
    }
    else {
        document.getElementById("type").innerText = "Add Spells!"
    }
    
}

function updateGraph() {
        
    const ctx = document.getElementById('pieChart');

    chartChart.destroy();
        
    chartChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: [names[0].charAt(0).toUpperCase() + names[0].slice(1),names[1].charAt(0).toUpperCase() + names[1].slice(1),names[2].charAt(0).toUpperCase() + names[2].slice(1),names[3].charAt(0).toUpperCase() + names[3].slice(1),names[4].charAt(0).toUpperCase() + names[4].slice(1),names[5].charAt(0).toUpperCase() + names[5].slice(1),names[6].charAt(0).toUpperCase() + names[6].slice(1),names[7].charAt(0).toUpperCase() + names[7].slice(1),names[8].charAt(0).toUpperCase() + names[8].slice(1),names[9].charAt(0).toUpperCase() + names[9].slice(1),],
          datasets: [{
            label: 'Circle Points',
            data: [build[names[0]],build[names[1]],build[names[2]],build[names[3]],build[names[4]],build[names[5]],build[names[6]],build[names[7]],build[names[8]],build[names[9]],],
          }]
        },
        plugins: [
          autocolors
        ],
        options: {
          plugins: {
              autocolors: {
                  mode: 'data'
              },
              title: {
                  display: true,
                  text: 'Your Build Breakdown',
                  font: {
                    family: "'Immortal', sans-serif",
                    size: "30 vmin"
                    }
              },
              legend: {
                  labels: {
                      font: {
                          family: "'Immortal', sans-serif",
                          size: "15 vmin"
                      }
                  }
              }
          }
        }
      
      });
}
