
class Character {
    force: number;
    charisme: number;
    intelligence: number;
    discretion: number;
    agilite: number;
    rapidite: number;
    equipement: string;

    constructor() {
        // Initialisation des propriétés avec des valeurs par défaut
        this.force = 1;
        this.charisme = 1;
        this.intelligence = 1;
        this.discretion = 1;
        this.agilite = 1;
        this.rapidite = 1;
        this.equipement = "Équipement de base";
    }

    display(): void {
        console.log("Stats du personnage:");
        console.log(`Force: ${this.force}`);
        console.log(`Charisme: ${this.charisme}`);
        console.log(`Intelligence: ${this.intelligence}`);
        console.log(`Discretion: ${this.discretion}`);
        console.log(`Agilité: ${this.agilite}`);
        console.log(`Rapidité: ${this.rapidite}`);
        console.log(`Équipement: ${this.equipement}`);
    }
}

interface CharacterBuilder {
    setStrength(strength: number): void;
    setCharisma(charisma: number): void;
    setIntelligence(intelligence: number): void;
    setDiscretion(discretion: number): void;
    setAgility(agility: number): void;
    setSpeed(speed: number): void;
    setEquipment(equipment: string): void;
}


class ConcreteCharacterBuilder implements CharacterBuilder {
    character: Character;

    constructor() {
        this.character = new Character();
    }

    setStrength(strength: number): void {
        this.character.force = strength;
    }

    setCharisma(charisma: number): void {
        this.character.charisme = charisma;
    }

    setIntelligence(intelligence: number): void {
        this.character.intelligence = intelligence;
    }

    setDiscretion(discretion: number): void {
        this.character.discretion = discretion;
    }

    setAgility(agility: number): void {
        this.character.agilite = agility;
    }

    setSpeed(speed: number): void {
        this.character.rapidite = speed;
    }

    setEquipment(equipment: string): void {
        this.character.equipement = equipment;
    }
}


class CharacterDirector {
    private builder: CharacterBuilder;

    constructor(builder: CharacterBuilder) {
        this.builder = builder;
    }

    buildCharacter(): Character {
        return this.builder.character;
    }
}


// Utilisation dans le jeu
const builder = new ConcreteCharacterBuilder();
const director = new CharacterDirector(builder);

// Construction du personnage
director.builder.setStrength(5);
director.builder.setCharisma(3);
director.builder.setIntelligence(4);
director.builder.setDiscretion(2);
director.builder.setAgility(4);
director.builder.setSpeed(3);
director.builder.setEquipment("Épée en fer");

const playerCharacter = director.buildCharacter();

// Affichage des stats du personnage
playerCharacter.display();
