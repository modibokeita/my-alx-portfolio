from rest_framework import serializers
from .models import Product, Category, Order, OrderItem, Cart, CartItem, Review
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

"""
    Serializetion of different models
"""


class ProductSerializer(serializers.ModelSerializer):
    """
    Serializetion of Product Model

    """

    class Meta:
        model = Product
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):

    """
    Serializetion of Category Model

    """
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    """
    Serializetion of Order Model

    """
    class Meta:
        model = OrderItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    """
    Serializetion of Items Model

    """
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):
    """
    Serializetion of Cart Items Model

    """
    class Meta:
        model = CartItem
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    """
    Serializetion of Cart Model

    """
    items = CartItemSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    """
    Serializetion of Review Model

    """
    class Meta:
        model = Review
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):
    """
    Serializetion of User Model

    """
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    """
    Serializetion of Sign up Model

    """
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        Token.objects.create(user=user)
        return user

class LoginSerializer(serializers.Serializer):
    """
    Serializetion of Login Model

    """
    username = serializers.CharField()
    password = serializers.CharField()
