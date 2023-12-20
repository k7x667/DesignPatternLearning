// Interface de base pour la pizza
interface Pizza {
    preparer(): void;
    cuire(): void;
    couper(): void;
    emballer(): void;
}

// Interface pour la Calzone
interface Calzone extends Pizza {
plier(): string;
}

// Classe concrète pour la pizza Margherita
class PizzaMargherita implements Pizza {
preparer(): void {
    console.log('Préparation de la pizza Margherita.');
}

cuire(): void {
    console.log('Cuisson de la pizza Margherita.');
}

couper(): void {
    console.log('Découpage de la pizza Margherita.');
}

emballer(): void {
    console.log('Emballage de la pizza Margherita.');
}
}

// Classe concrète pour la Calzone
class CalzoneJambon implements Calzone {
preparer(): void {
    console.log('Préparation de la Calzone au jambon.');
}

cuire(): void {
    console.log('Cuisson de la Calzone au jambon.');
}

couper(): void {
    console.log('Découpage de la Calzone au jambon.');
}

emballer(): void {
    console.log('Emballage de la Calzone au jambon.');
}

plier(): string {
    return 'La Calzone est pliée.';
}
}

// Interface pour la fabrique de pizzas
interface PizzaFactory {
creerPizza(): Pizza;
}

// Fabrique concrète pour la pizza Margherita
class PizzaMargheritaFactory implements PizzaFactory {
creerPizza(): Pizza {
    return new PizzaMargherita();
}
}

// Fabrique concrète pour la Calzone au jambon
class CalzoneJambonFactory implements PizzaFactory {
creerPizza(): Calzone {
    return new CalzoneJambon();
}
}

// Fonction client qui utilise la fabrique
function commanderPizza(factory: PizzaFactory): void {
const pizza = factory.creerPizza();

pizza.preparer();
pizza.cuire();
pizza.couper();
pizza.emballer();

if ('plier' in pizza) {
    const calzone = pizza as Calzone;
    console.log(calzone.plier());
}
}

// Exemple d'utilisation
const margheritaFactory = new PizzaMargheritaFactory();
const calzoneJambonFactory = new CalzoneJambonFactory();

commanderPizza(margheritaFactory);
commanderPizza(calzoneJambonFactory);
  