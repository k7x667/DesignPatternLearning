### Adapter Design Pattern:

The Adapter design pattern allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by wrapping the interface of a class into another interface that a client expects.

### Example in TypeScript:

Let's consider a scenario where we have an existing `LegacyPrinter` class with a method called `printText`, and we want to use this legacy printer in a modern system that expects a `Printer` interface with a `print` method.

```typescript
// Legacy Printer with incompatible interface
class LegacyPrinter {
  printText(message: string): void {
    console.log(`Legacy Printer: ${message}`);
  }
}

// Modern Printer interface
interface Printer {
  print(message: string): void;
}

// Adapter for Legacy Printer to fit the Printer interface
class LegacyPrinterAdapter implements Printer {
  private legacyPrinter: LegacyPrinter;

  constructor(legacyPrinter: LegacyPrinter) {
    this.legacyPrinter = legacyPrinter;
  }

  print(message: string): void {
    this.legacyPrinter.printText(message);
  }
}

// Client code using the modern Printer interface
function clientCode(printer: Printer, message: string): void {
  printer.print(message);
}

// Usage of Adapter to make Legacy Printer compatible with the modern Printer interface
const legacyPrinter = new LegacyPrinter();
const adapter = new LegacyPrinterAdapter(legacyPrinter);

clientCode(adapter, "Hello, Adapter Pattern!");
```

### Output:

The output of the client code should be:

```
Legacy Printer: Hello, Adapter Pattern!
```

In this example, the `LegacyPrinterAdapter` acts as an adapter that allows the legacy `LegacyPrinter` to be used seamlessly in the modern system that expects a `Printer` interface. The client code prints a message using the modern `Printer` interface, and the adapter translates it to the legacy `LegacyPrinter` for actual printing.