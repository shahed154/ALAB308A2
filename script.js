const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        subCompanion: {
          name: "Frank",
          type: "Flea",
          belongings: ['small hat','sunglasses']
        }
    },

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)

    }
}

adventurer.roll() 

//================= part 2 / 4 ====================//

class Character {
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
       
    }
    
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}
    
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

//================= part 3 / 4 ====================//

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard", "Hero"];
    constructor (name, role, damage) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");

      this.damage = damage;
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }//part 6 //////////////

    duel(adventurerToDuel) {
      // Continue dueling until someone's health drops to 50 or below
      while (this.health > 50 && adventurerToDuel.health > 50) {
        let roll = this.roll();
        let duelRoll = adventurerToDuel.roll();
    
        if (roll > duelRoll) {
          adventurerToDuel.health - this.damage;
          console.log(`${this.name} wins! ${adventurerToDuel.name} health: ${adventurerToDuel.health}`);
        } else if (duelRoll > roll) {
          this.health - adventurerToDuel.damage;
          console.log(`${adventurerToDuel.name} wins! ${this.name} health: ${this.health}`);
        } else {
          console.log("It's a tie! No damage dealt.");
        }
      }
    
      if (this.health > 50) {
        console.log(`${this.name} wins the duel. ${adventurerToDuel.name} has ${adventurerToDuel.health} health left`);
        return this;
      } else {
        console.log(`${adventurerToDuel.name} wins the duel. ${this.name} has ${this.health} health left`);
        return adventurerToDuel;
      }

      // part 6/7
 
    }
  }

  class Companion extends Character {
    constructor (name, damage){
    super(name);
    this.damage = damage;

    }
    companionAttack(){
    
        console.log(`${this.name} deals ${this.damage} damage! `);
        }

        }
    

 const AdventurerRobin = new Adventurer("Robin", "Hero");
 AdventurerRobin.inventory = ["sword", "potion", "artifact"];
 AdventurerRobin.companion = new Companion("Leo", 5);
 AdventurerRobin.companion.type = "Cat";
 AdventurerRobin.companion.companion = new Companion("Frank", 1);
 AdventurerRobin.companion.companion.type = "Flea";
 AdventurerRobin.companion.companion.inventory = ["small hat", "sunglasses"];
 AdventurerRobin.damage = 10;

//================= part 5 ====================//
class AdventurerFactory {  
  constructor (role) {
    this.role = role;
    this.adventurers = [];
  }
  generate (name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex (index) {
    return this.adventurers[index];
  }
  findByName (name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const robin = healers.generate("Robin");

//part 7
class Mount extends Character {
  static TYPES = ["Dragon", "Horse", "Wolf", "Giraffe"];
  
  constructor(name, type) {
    super(name);

    if (Mount.TYPES.includes(type)) {
      this.type = type;
    } else {
      console.log(`Invalid mount type: ${type}. Setting default type Horse.`);
      this.type = "Horse";
    }
  }
  
  ride() {
    console.log(`${this.name} the ${this.type} is carrying.`);
  }

}
const SuperDragon = new Mount(SuperDragon, Dragon)

// tbh lot of this is confusng tried adding some stuff but messed up syntax so gave up with the stuff that didnt work its fine 