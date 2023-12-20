<?php

interface IProduct {
    public function getId(): string;
    public function getName(): string;
    public function getValue(): float;
    public function getDescription(): string;

    public function setName(string $name): void;
    public function setValue(float $value): void;
    public function setDescription(string $description): void;
}

class Product implements IProduct {
    // Existing Product class implementation...
}

interface IProductSystem {
    public function loadProduct(string $id): IProduct;
}

class ProductSystem implements IProductSystem {
    // Existing ProductSystem class implementation...
}

class OrderSystem {
    // Existing OrderSystem class implementation...
}

class PaymentSystem {
    // Existing PaymentSystem class implementation...
}

class ShoppingFacade {
    private $productSystem;
    private $orderSystem;
    private $paymentSystem;

    public function __construct(IProductSystem $productSystem, OrderSystem $orderSystem, PaymentSystem $paymentSystem) {
        $this->productSystem = $productSystem;
        $this->orderSystem = $orderSystem;
        $this->paymentSystem = $paymentSystem;
    }

    public function buyProducts(array $ids): Promise {
        $products = array_map(function ($item) {
            return $this->productSystem->loadProduct($item);
        }, $ids);

        $this->orderSystem->setProducts($products);

        return $this->paymentSystem->processPayment($this->orderSystem->calculateOrderValue())
            ->then(function ($response) {
                if (!$response) {
                    throw new Exception('This was unsuccessful');
                }

                $this->orderSystem->saveOrder();
            });
    }
}

// Example usage:
$productSystem = new ProductSystem();
$orderSystem = new OrderSystem();
$paymentSystem = new PaymentSystem();

$shoppingFacade = new ShoppingFacade($productSystem, $orderSystem, $paymentSystem);
$ids = ['324THT54GZG', '324F24TG35R', '23RI23UFJ'];

$shoppingFacade->buyProducts($ids)
    ->then(function () {
        echo 'Purchase successful';
    })
    ->catch(function (Exception $error) {
        echo 'Purchase failed: ' . $error->getMessage();
    });
