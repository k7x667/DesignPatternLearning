// Interface pour un personnage
interface Character {
    display(): string;
}
  
  // Interface pour une arme
  interface Weapon {
    display(): string;
}
  
// Classes concrètes pour un personnage elfique
class ElfCharacter implements Character {
    display(): string {
      return 'Elf Character';
}
}
  
  // Classes concrètes pour un personnage orc
  class OrcCharacter implements Character {
    display(): string {
      return 'Orc Character';
}
}
  
  // Classes concrètes pour une arme elfique
  class ElfWeapon implements Weapon {
    display(): string {
      return 'Elf Weapon';
}
}
  
  // Classes concrètes pour une arme orc
  class OrcWeapon implements Weapon {
    display(): string {
      return 'Orc Weapon';
}
}

// Interface pour l'Abstract Factory
interface GameFactory {
    createCharacter(): Character;
    createWeapon(): Weapon;
}

// Classe concrète pour la factory elfique
class ElfFactory implements GameFactory {
    createCharacter(): Character {
      return new ElfCharacter();
  }
  
    createWeapon(): Weapon {
      return new ElfWeapon();
  }
}
  
  // Classe concrète pour la factory orc
  class OrcFactory implements GameFactory {
    createCharacter(): Character {
      return new OrcCharacter();
  }
  
    createWeapon(): Weapon {
      return new OrcWeapon();
  }
}

let gameFactory: GameFactory = new ElfFactory();

// Utilisation de la factory pour créer un personnage elfique et une arme elfique
const elfCharacter = gameFactory.createCharacter();
const elfWeapon = gameFactory.createWeapon();

// Affichage des détails des personnages et des armes créés
console.log(elfCharacter.display()); // Output: Elf Character
console.log(elfWeapon.display());    // Output: Elf Weapon

