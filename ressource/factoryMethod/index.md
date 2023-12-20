### Factory Method Pattern

The Factory Method Pattern is a creational design pattern that provides an interface for creating objects in a super class, but allows subclasses to alter the type of objects that will be created. It promotes loose coupling by allowing the client code to depend on the abstract interface rather than concrete classes.

#### Example in PHP:

Consider a scenario where you have a `Logger` interface and two different types of loggers: `FileLogger` and `DatabaseLogger`. The Factory Method Pattern allows you to create a logger without specifying its concrete class.

```php
// Logger interface
interface Logger {
    public function logMessage($message);
}

// FileLogger implementation
class FileLogger implements Logger {
    public function logMessage($message) {
        echo "Logging to file: $message\n";
  }
}

// DatabaseLogger implementation
class DatabaseLogger implements Logger {
    public function logMessage($message) {
        echo "Logging to database: $message\n";
  }
}

// LoggerFactory interface
interface LoggerFactory {
    public function createLogger(): Logger;
}

// Concrete implementation of LoggerFactory for FileLogger
class FileLoggerFactory implements LoggerFactory {
    public function createLogger(): Logger {
        return new FileLogger();
  }
}

// Concrete implementation of LoggerFactory for DatabaseLogger
class DatabaseLoggerFactory implements LoggerFactory {
    public function createLogger(): Logger {
        return new DatabaseLogger();
  }
}

// Client code
function clientCode(LoggerFactory $factory) {
    $logger = $factory->createLogger();
    $logger->logMessage("Hello, Factory Method Pattern!");
}

// Using FileLogger
$clientCode(new FileLoggerFactory());
// Output: Logging to file: Hello, Factory Method Pattern!

// Using DatabaseLogger
$clientCode(new DatabaseLoggerFactory());
// Output: Logging to database: Hello, Factory Method Pattern!
```

In this example, the `LoggerFactory` interface defines the factory method `createLogger()`, which is implemented by concrete factories (`FileLoggerFactory` and `DatabaseLoggerFactory`). Clients can use these factories to create instances of loggers without specifying the concrete logger class directly, promoting flexibility and maintainability.