interface IProduct {
    getId(): string;
    getName(): string;
    getValue(): number;
    getDescription(): string;

    setName(name: string): void;
    setValue(value: number): void;
    setDescription(description: string): void;
}

class Product implements IProduct {
    // Existing Product class implementation...
}

interface IProductSystem {
    loadProduct(id: string): Promise<IProduct>;
}

class ProductSystem implements IProductSystem {
    // Existing ProductSystem class implementation...
    async loadProduct(id: string): Promise<IProduct> {
        // Implement the loading logic for a product with the given id
        // Example: return new Product(id, 'Product Name', 10.99, 'Product Description');
    }
}

class OrderSystem {
    // Existing OrderSystem class implementation...
    private products: IProduct[] = [];

    setProducts(products: IProduct[]): void {
        this.products = products;
    }

    calculateOrderValue(): number {
        // Implement the logic to calculate the order value based on products
        return this.products.reduce((total, product) => total + product.getValue(), 0);
    }

    saveOrder(): void {
        // Implement the logic to save the order
        console.log('Order saved.');
    }
}

class PaymentSystem {
    // Existing PaymentSystem class implementation...
    processPayment(orderValue: number): Promise<boolean> {
        // Implement the logic to process payment and return a Promise
        return new Promise((resolve) => {
            // Simulate a successful payment
            resolve(true);
        });
    }
}

class ShoppingFacade {
    private productSystem: IProductSystem;
    private orderSystem: OrderSystem;
    private paymentSystem: PaymentSystem;

    constructor(productSystem: IProductSystem, orderSystem: OrderSystem, paymentSystem: PaymentSystem) {
        this.productSystem = productSystem;
        this.orderSystem = orderSystem;
        this.paymentSystem = paymentSystem;
    }

    buyProducts(ids: string[]): Promise<void> {
        return Promise.all(ids.map(id => this.productSystem.loadProduct(id)))
            .then(products => {
                this.orderSystem.setProducts(products);
                return this.paymentSystem.processPayment(this.orderSystem.calculateOrderValue());
            })
            .then(response => {
                if (!response) {
                    throw new Error('This was unsuccessful');
                }
                this.orderSystem.saveOrder();
            });
    }
}

// Example usage:
const productSystem = new ProductSystem();
const orderSystem = new OrderSystem();
const paymentSystem = new PaymentSystem();

const shoppingFacade = new ShoppingFacade(productSystem, orderSystem, paymentSystem);
const ids = ['324THT54GZG', '324F24TG35R', '23RI23UFJ'];

shoppingFacade.buyProducts(ids)
    .then(() => {
        console.log('Purchase successful');
    })
    .catch((error: Error) => {
        console.log('Purchase failed: ' + error.message);
    });
