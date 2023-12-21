// Interface for the base Pizza
interface Pizza {
    pizzaName: string;
    cuire(): string;
    prix(): number;
}

// Concrete implementation of the base MargueritaPizza
class MargueritaPizza implements Pizza {
    readonly pizzaName = 'Marguerita';

    public cuire(): string {
        return 'je suis compatible avec le four à bois, magnifique !';
    }

    public prix(): number {
        return 8; // Base price for Marguerita
    }
}

// Concrete implementation of the base CarbonaraPizza
class CarbonaraPizza implements Pizza {
    readonly pizzaName = 'Carbonara';

    public cuire(): string {
        return 'je suis compatible avec le four à bois, attention à mes lardons !';
    }

    public prix(): number {
        return 10; // Base price for Carbonara
    }
}

// Abstract decorator class for pizza toppings
abstract class PizzaDecorator implements Pizza {
    protected pizza: Pizza;

    constructor(pizza: Pizza) {
        this.pizza = pizza;
    }
        pizzaName: string;

    public abstract cuire(): string;
    public abstract prix(): number;
}

// Concrete decorator class for adding extra meat topping
class ExtraViandeDecorator extends PizzaDecorator {
    public cuire(): string {
        return this.pizza.cuire();
    }

    public prix(): number {
        return this.pizza.prix() + 2;
    }
}

// Concrete decorator class for adding extra cheese topping
class ExtraFromageDecorator extends PizzaDecorator {
    public cuire(): string {
        return this.pizza.cuire();
    }

    public prix(): number {
        return this.pizza.prix() + 1;
    }
}

// Concrete decorator class for adding extra burrata topping
class ExtraBurrataDecorator extends PizzaDecorator {
    public cuire(): string {
        return this.pizza.cuire();
    }

    public prix(): number {
        return this.pizza.prix() + 2;
    }
}

// Concrete decorator class for adding extra raclette topping
class ExtraRacletteDecorator extends PizzaDecorator {
    public cuire(): string {
        return this.pizza.cuire();
    }

    public prix(): number {
        return this.pizza.prix() + 3;
    }
}

// Concrete decorator class for reducing meat topping
class MoinsViandeDecorator extends PizzaDecorator {
    public cuire(): string {
        return this.pizza.cuire();
    }

    public prix(): number {
        const newPrice = this.pizza.prix() - 2;
        return newPrice < 0 ? 0 : newPrice;
    }
}

// Concrete decorator class for reducing cheese topping
class MoinsFromageDecorator extends PizzaDecorator {
    public cuire(): string {
        return this.pizza.cuire();
    }

    public prix(): number {
        const newPrice = this.pizza.prix() - 1;
        return newPrice < 0 ? 0 : newPrice;
    }
}

// Example usage:
const margueritaPizza: Pizza = new MoinsViandeDecorator(
    new ExtraFromageDecorator(new MargueritaPizza())
);

console.log('Pizza: ', margueritaPizza.pizzaName);
console.log('Cuisson: ', margueritaPizza.cuire());
console.log('Prix: ', margueritaPizza.prix());

const carbonaraWithoutMeatPizza: Pizza = new MoinsViandeDecorator(
    new ExtraFromageDecorator(new CarbonaraPizza())
)

console.log('Pizza: ', carbonaraWithoutMeatPizza.pizzaName);
console.log('Cuisson: ', carbonaraWithoutMeatPizza.cuire());
console.log('Prix: ', carbonaraWithoutMeatPizza.prix());

  