from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    """
     Category Model

    """
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Product(models.Model):
    """
     Product Model

    """
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Order(models.Model):
    """ Order model for customers

    Args:
        model (Order): to get the order of the customers

    Returns:
        object: return user, total order
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id}"

class OrderItem(models.Model):
    """ OrderItem model for customers

    Args:
        model (OrderItem): to get the order Itmes of the customer

    Returns:
        object: return user, total ordered Items
    """
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.quantity} of {self.product.name}"

class Cart(models.Model):
    """ Cart model

    Args:
        model (Cart): to get the selected Itmes of the customer

    Returns:
        object: return user, total selected Items
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class CartItem(models.Model):
    """ Cart Item model

    Args:
        model (Cart Item): to get the selected Items of the User

    Returns:
        object: return user, total selected Products
    """
    cart = models.ForeignKey(Cart, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

class Review(models.Model):
    """ Review model

    Args:
        model (Review): to allow User comments

    Returns:
        object: return user review
    """
    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
