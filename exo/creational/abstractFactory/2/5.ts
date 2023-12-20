// Programme principal
let gameFactory: GameFactory = new ElfFactory();

// Utilisation de la factory pour créer un personnage elfique et une arme elfique
const elfCharacter = gameFactory.createCharacter();
const elfWeapon = gameFactory.createWeapon();

// Affichage des détails des personnages et des armes créés
console.log(elfCharacter.display()); // Output: Elf Character
console.log(elfWeapon.display());    // Output: Elf Weapon
