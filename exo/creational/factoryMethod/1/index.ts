// Interface Pizza
interface Pizza {
    pizzaName: string;
    cuire(): string;
}
  
  // Classe de base PizzaFactory
  abstract class PizzaFactory {
    abstract creerPizza(): Pizza;
  
    cuirePizza(): string {
      const pizza = this.creerPizza();
      return `Cuisson de la pizza ${pizza.pizzaName}: ${pizza.cuire()}`;
    }
}
  
  // Implémentation de la pizza Marguerita
  class Marguerita implements Pizza {
    pizzaName: string;
  
    constructor(nom: string) {
      this.pizzaName = nom;
    }
  
    cuire(): string {
      return "Cuisson Marguerita";
    }
}
  
  // Implémentation de la pizza Carbonara
  class Carbonara implements Pizza {
    pizzaName: string;
  
    constructor(nom: string) {
      this.pizzaName = nom;
    }
  
    cuire(): string {
      return "Cuisson Carbonara";
    }
}
  
  // Factory pour la pizza Marguerita
  class MargueritaFactory extends PizzaFactory {
    private nom: string;
  
    constructor(nom: string) {
      super();
      this.nom = nom;
    }
  
    creerPizza(): Pizza {
      return new Marguerita(this.nom);
    }
}
  
  // Factory pour la pizza Carbonara
  class CarbonaraFactory extends PizzaFactory {
    private nom: string;
  
    constructor(nom: string) {
      super();
      this.nom = nom;
    }
  
    creerPizza(): Pizza {
      return new Carbonara(this.nom);
    }
}
  
// Exemple d'utilisation
const margueritaFactory = new MargueritaFactory("MaMarguerita");
const carbonaraFactory = new CarbonaraFactory("MaCarbonara");

const pizzaMarguerita = margueritaFactory.cuirePizza();
const pizzaCarbonara = carbonaraFactory.cuirePizza();

console.log(pizzaMarguerita);
console.log(pizzaCarbonara);
  