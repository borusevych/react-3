import { useState } from 'react';
import useLocalStorage from '../components/useLocalStorage';

function Cart() {
    const [cartItems, setCartItems] = useLocalStorage('cartItems', []);
    const [showModal, setShowModal] = useState(false);
    const [itemToRemove, setItemToRemove] = useState(null);

    const removeFromCart = (product) => {
        setItemToRemove(product);
        setShowModal(true);
    };

    const handleDelete = () => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item !== itemToRemove));
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };
    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="product-card">
                            <img src={item.image} alt={item.name} />
                            <h3 className="product-card_header">{item.name}</h3>
                            <p className="product-card_price">Ціна: {item.price} грн</p>
                            <button onClick={() => removeFromCart(item)}>Delete from cart</button>
                        </div>
                    ))}
                </div>
            )}
            <div>
        
      
      </div>
            {showModal && (
                <div className="modal-background">
                    <div className="modal">
                        <p>Are you sure?</p>
                        <div>
                            <button onClick={handleDelete}>Delete</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;



  