// Façade
class ShoppingFacade {
    private productSystem: IProductSystem;
    private orderSystem: OrderSystem;
    private paymentSystem: PaymentSystem;
  
    constructor() {
      this.productSystem = new ProductSystem();
      this.orderSystem = new OrderSystem();
      this.paymentSystem = new PaymentSystem();
    }
  
    public async processOrder(ids: string[]): Promise<void> {
      const products = this.loadProducts(ids);
      this.setOrderProducts(products);
      const orderValue = this.calculateOrderValue();
      await this.processPayment(orderValue);
      this.saveOrder();
    }
  
    private loadProducts(ids: string[]): IProduct[] {
      return ids.map((id) => this.productSystem.loadProduct(id));
    }
  
    private setOrderProducts(products: IProduct[]): void {
      this.orderSystem.setProducts(products);
    }
  
    private calculateOrderValue(): number {
      return this.orderSystem.calculateOrderValue();
    }
  
    private async processPayment(value: number): Promise<void> {
      const response = await this.paymentSystem.processPayment(value);
      if (!response) {
        throw new Error('Payment unsuccessful');
      }
    }
  
    private saveOrder(): void {
      this.orderSystem.saveOrder();
    }
  }
  
  // Utilisation de la façade
  const ids = ['324THT54GZG', '324F24TG35R', '23RI23UFJ'];
  
  const shoppingFacade = new ShoppingFacade();
  shoppingFacade.processOrder(ids)
    .then(() => console.log('Order processing completed successfully'))
    .catch((error) => console.error(`Error: ${error.message}`));
  