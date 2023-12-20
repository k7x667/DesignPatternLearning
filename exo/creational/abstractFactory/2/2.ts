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
  