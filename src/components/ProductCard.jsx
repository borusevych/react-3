import { useState } from "react";

function ProductCard({ product, onAddToCart, onToggleFavorite, isFavorite, isInCart, isAddedToCart, isAddedToFavorites }) {
    const [isAddedToCartLocal, setIsAddedToCartLocal] = useState(isAddedToCart);
    const [isStarred, setIsStarred] = useState(isFavorite);
    const [isAddedToFavoritesLocal, setIsAddedToFavoritesLocal] = useState(isAddedToFavorites);
  
    const handleAddToCartClick = () => {
      onAddToCart(product);
      setIsAddedToCartLocal(true);
    };
  
    const handleToggleFavoriteClick = () => {
      onToggleFavorite(product);
      setIsAddedToFavoritesLocal(true);
    };
  
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3 className="product-card_header">{product.name}</h3>
        <p className="product-card_price">Ціна: {product.price} грн</p>
        <button onClick={handleAddToCartClick}>{isInCart ? 'В кошику' : 'Додати в кошик'}</button>
        <div className="product-card_favorite" onClick={handleToggleFavoriteClick} style={{ color: isFavorite ? 'gold' : 'black' }}>
          {isFavorite ? 'В обраному ★' : 'В обране ☆'}
        </div>
      </div>
    );
  }
  
  export default ProductCard;

