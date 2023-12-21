#### Single Responsibility Principle

```typescript
// Bad Way
class Customer {
  Add(db: Database): void {
    try {
      db.Add();
    } catch (error) {
      writeErrorToFile(error.toString());
    }
  }
}

// Good Way
class Customer {
  private logger: Logger = new FileLogger();

  Add(db: Database): void {
    try {
      db.Add();
    } catch (error) {
      this.logger.Handle(error.toString());
    }
  }
}

class FileLogger {
  Handle(error: string): void {
    // Implementation to write error to file
  }
}
```

#### Open for Extension Closed for Modification

```typescript
// Bad Way
class Customer {
  private type: number;

  Add(db: Database): void {
    if (this.type === 0) {
      db.Add();
    } else {
      db.AddExistingCustomer();
    }
  }
}

// Good Way
class CustomerBetter {
  Add(db: Database): void {
    db.Add();
  }
}

class ExistingCustomer extends CustomerBetter {
  Add(db: Database): void {
    db.AddExistingCustomer();
  }
}

class AnotherCustomer extends CustomerBetter {
  Add(db: Database): void {
    db.AnotherExtension();
  }
}
```

#### Liskov Substitution Principle

```typescript
// Bad Way
class Enquiry extends Customer {
  Discount(sales: number): number {
    return sales * 5;
  }

  Add(db: Database): void {
    throw new Error("Not allowed");
  }
}

class BetterGoldCustomer extends Customer {
  Discount(sales: number): number {
    return sales - 100;
  }
}

class BetterSilverCustomer extends Customer {
  Discount(sales: number): number {
    return sales - 50;
  }

}

// Good Way
interface IDiscount {
  Discount(sales: number): number;
}

interface IDatabase {
  Add(db: Database): void;
}

class Customer implements IDiscount, IDatabase {
  Discount(sales: number): number {
    return sales;
  }

  Add(db: Database): void {
    db.Add();
  }
}
```

#### Interface Segregation Principle

```typescript
// Bad Way
interface ICustomer {
  Add(): void;
  Read(): void;
}

// Good Way
interface ICustomerV1 extends ICustomer {
  Read(): void;
}

class CustomerWithRead implements ICustomer, ICustomerV1 {
  Add(): void {
    const customer = new Customer();
    customer.Add(new Database());
  }

  Read(): void {
    // New functionality here!
  }
}
```

#### Dependency Inversion

```typescript
// Bad Way
class FileLogger {
  Handle(error: string): void {
    // Implementation to write error to file
  }
}

class Customer {
  private logger: FileLogger = new FileLogger();

  Add(db: Database): void {
    try {
      db.Add();
    } catch (error) {
      this.logger.Handle(error.toString());
    }
  }
}

// Good Way
class BetterCustomer {
  private logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  Add(db: Database): void {
    try {
      db.Add();
    } catch (error) {
      this.logger.Handle(error.toString());
    }
  }
}

class EmailLogger implements ILogger {
  Handle(error: string): void {
    // Implementation to send error via email
  }
}

interface ILogger {
  Handle(error: string): void;
}

// Example of usage
const customer = new BetterCustomer(new EmailLogger());
customer.Add(new Database());
```