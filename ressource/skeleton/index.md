### Singleton Pattern:

The Singleton Pattern is a creational design pattern that ensures a class has only one instance and provides a global point of access to it. This pattern is useful when exactly one object is needed to coordinate actions across the system.

### PHP Example:

```php
<?php

class Singleton {
    private static $instance;

    // Private constructor to prevent instantiation from outside the class
    private function __construct() {}

    // Public method to get the singleton instance
    public static function getInstance() {
        if (!isset(self::$instance)) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    // Example method of the singleton class
    public function showMessage() {
        echo "Hello, I am a singleton instance!";
    }
}

// Usage
$singletonInstance1 = Singleton::getInstance();
$singletonInstance1->showMessage(); // Outputs: Hello, I am a singleton instance!

$singletonInstance2 = Singleton::getInstance();
$singletonInstance2->showMessage(); // Outputs: Hello, I am a singleton instance!

// Both instances refer to the same singleton object
var_dump($singletonInstance1 === $singletonInstance2); // Outputs: bool(true)
```

In this example, the `Singleton` class has a private static variable `$instance` that holds the single instance of the class. The `getInstance` method ensures that only one instance of the class is created and returned. The `showMessage` method is just an example of a functionality within the singleton class.

When two instances are obtained using `getInstance`, they refer to the same singleton object, demonstrating that the Singleton Pattern ensures a single point of access to the instance across the system.