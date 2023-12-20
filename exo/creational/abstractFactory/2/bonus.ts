// Changement d'environnement en utilisant une autre factory (Orc)
gameFactory = new OrcFactory();

const orcCharacter = gameFactory.createCharacter();
const orcWeapon = gameFactory.createWeapon();

console.log(orcCharacter.display()); // Output: Orc Character
console.log(orcWeapon.display());    // Output: Orc Weapon
