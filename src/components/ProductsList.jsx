import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import useLocalStorage from './useLocalStorage';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const [addedToCart, setAddedToCart] = useLocalStorage('addedToCart', []);
    const [addedToFavorites, setAddedToFavorites] = useLocalStorage('addedToFavorites', []);
  
    useEffect(() => {
      fetch('/products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error loading products:', error));
    }, []);
  
    const handleAddToCart = (product) => {
      if (cartItems.includes(product)) {
        setCartItems(prevCartItems => prevCartItems.filter(item => item !== product));
        setAddedToCart(prevAdded => prevAdded.filter(id => id !== product.id));
      } else {
        setCartItems(prevCartItems => [...prevCartItems, product]);
        setAddedToCart(prevAdded => [...prevAdded, product.id]);
      }
    };
  
    const handleToggleFavorite = (product) => {
      if (favorites.includes(product)) {
        setFavorites(prevFavorites => prevFavorites.filter(item => item !== product));
        setAddedToFavorites(prevAdded => prevAdded.filter(id => id !== product.id));
      } else {
        setFavorites(prevFavorites => [...prevFavorites, product]);
        setAddedToFavorites(prevAdded => [...prevAdded, product.id]);
      }
    };
  
    return (
      <div>
        <div className="header">
          <span>Кошик ({cartItems.length})</span>
          <span>Обране ({favorites.length})</span>
        </div>
  
        <div className="product-list">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.includes(product)}
              isInCart={cartItems.includes(product)}
              isAddedToCart={addedToCart.includes(product.id)}
              isAddedToFavorites={addedToFavorites.includes(product.id)}
            />
          ))}
        </div>
      </div>
    );
  }
  
  export default ProductsList;

