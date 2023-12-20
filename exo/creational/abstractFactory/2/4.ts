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
  