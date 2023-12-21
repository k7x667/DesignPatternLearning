// Interface commune pour toutes les armes
interface Weapon {
    getDamage(): number;
    getDurability(): number;
    getAttackSpeed(): number;
    getDescription(): string;
}

// Implémentation de base de l'arme
class BasicWeapon implements Weapon {
    private damage: number;
    private durability: number;
    private attackSpeed: number;

    constructor(damage: number, durability: number, attackSpeed: number) {
        this.damage = damage;
        this.durability = durability;
        this.attackSpeed = attackSpeed;
    }

    getDamage(): number {
        return this.damage;
    }

    getDurability(): number {
        return this.durability;
    }

    getAttackSpeed(): number {
        return this.attackSpeed;
    }

    getDescription(): string {
        return "Arme de base";
    }
}

// Interface pour les enchantements
interface Enchantment extends Weapon {
    // Méthodes spécifiques aux enchantements
}

// Enchantement de force
class StrengthEnchantment implements Enchantment {
    private weapon: Weapon;

    constructor(weapon: Weapon) {
        this.weapon = weapon;
    }

    getDamage(): number {
        // Enchantement de force augmente les dégâts
        return this.weapon.getDamage() + 10;
    }

    getDurability(): number {
        // Enchantement de force ne modifie pas la durabilité
        return this.weapon.getDurability();
    }

    getAttackSpeed(): number {
        // Enchantement de force ne modifie pas la vitesse d'attaque
        return this.weapon.getAttackSpeed();
    }

    getDescription(): string {
        return this.weapon.getDescription() + ", Enchantement de Force";
    }
}

// Enchantement de feu
class FireEnchantment implements Enchantment {
    private weapon: Weapon;

    constructor(weapon: Weapon) {
        this.weapon = weapon;
    }

    getDamage(): number {
        // Enchantement de feu augmente fortement les dégâts
        return this.weapon.getDamage() + 30;
    }

    getDurability(): number {
        // Enchantement de feu réduit la durabilité
        return this.weapon.getDurability() - 20;
    }

    getAttackSpeed(): number {
        // Enchantement de feu ne modifie pas la vitesse d'attaque
        return this.weapon.getAttackSpeed();
    }

    getDescription(): string {
        return this.weapon.getDescription() + ", Enchantement de Feu";
    }
}

// Enchantement poids plume
class FeatherWeightEnchantment implements Enchantment {
    private weapon: Weapon;

    constructor(weapon: Weapon) {
        this.weapon = weapon;
    }

    getDamage(): number {
        // Enchantement poids plume réduit les dégâts
        return this.weapon.getDamage() - 5;
    }

    getDurability(): number {
        // Enchantement poids plume ne modifie pas la durabilité
        return this.weapon.getDurability();
    }

    getAttackSpeed(): number {
        // Enchantement poids plume augmente la vitesse d'attaque
        return this.weapon.getAttackSpeed() + 15;
    }

    getDescription(): string {
        return this.weapon.getDescription() + ", Enchantement Poids Plume";
    }
}

// Exemple d'utilisation
const basicSword: Weapon = new BasicWeapon(20, 100, 1.5);
console.log("Arme de base:");
console.log("Dégâts:", basicSword.getDamage());
console.log("Durabilité:", basicSword.getDurability());
console.log("Vitesse d'attaque:", basicSword.getAttackSpeed());
console.log("Description:", basicSword.getDescription());

const swordWithStrength: Weapon = new StrengthEnchantment(basicSword);
console.log("\nArme enchantée avec Force:");
console.log("Dégâts:", swordWithStrength.getDamage());
console.log("Durabilité:", swordWithStrength.getDurability());
console.log("Vitesse d'attaque:", swordWithStrength.getAttackSpeed());
console.log("Description:", swordWithStrength.getDescription());

const swordWithFire: Weapon = new FireEnchantment(basicSword);
console.log("\nArme enchantée avec Feu:");
console.log("Dégâts:", swordWithFire.getDamage());
console.log("Durabilité:", swordWithFire.getDurability());
console.log("Vitesse d'attaque:", swordWithFire.getAttackSpeed());
console.log("Description:", swordWithFire.getDescription());

const swordWithFeatherWeight: Weapon = new FeatherWeightEnchantment(basicSword);
console.log("\nArme enchantée avec Poids Plume:");
console.log("Dégâts:", swordWithFeatherWeight.getDamage());
console.log("Durabilité:", swordWithFeatherWeight.getDurability());
console.log("Vitesse d'attaque:", swordWithFeatherWeight.getAttackSpeed());
console.log("Description:", swordWithFeatherWeight.getDescription());
