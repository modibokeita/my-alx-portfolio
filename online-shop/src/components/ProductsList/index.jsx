import  { useEffect, useState } from 'react';
import { ProductListContenair, ProductCard, ProductGrid } from './ProductsElements';
import Notification from '../Notification';
//import Cart from '../Cart';
import { Button } from '../ButtonElemet';
const ProductList = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products
  const [loading, setLoading] = useState(true); // State to handle loading indicator
  const [cart, setCart] = useState([]); // Cart state to hold added products
  const [notification, setNotification] = useState('');

  // Function to fetch products from the API
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/');
      const data = await response.json();
      setProducts(data); // Set the products data
      setLoading(false); // Stop the loading state
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  // Function to add product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add product to the cart
    setNotification(`${product.name} has been added to the cart`);
    setTimeout(() => setNotification(''), 3000);
  };
  //<Cart cart={cart} onCheckout={handleCheckout} />
  // Function to handle checkout
  //const handleCheckout = () => {
    //alert('Checkout functionality is not implemented yet.');
    // You can replace this alert with actual checkout logic (e.g., form submission or API call)
  //};

  // useEffect to call the fetchProducts function on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Render loading message while fetching products
  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <ProductListContenair>
      <h2>All Products</h2>
      <ProductGrid>
        {products.map(product => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </ProductCard>
        ))}
      </ProductGrid>
      <Notification message={notification} />
      {/* Include the Cart component */}

    </ProductListContenair>
  );
};

export default ProductList;
