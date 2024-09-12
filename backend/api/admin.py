from django.contrib import admin
from .models import Product
# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'stock', 'category', 'image')
    fields = ('name', 'description', 'price', 'stock', 'category', 'image')

admin.site.register(Product, ProductAdmin)
