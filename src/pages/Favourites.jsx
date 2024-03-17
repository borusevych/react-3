import useLocalStorage from '../components/useLocalStorage';

function Favorites() {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);

    const removeFromFavorites = (product) => {
        setFavorites(prevFavorites => prevFavorites.filter(item => item !== product));
    };

    return (
        <div>
            <h2>Favorites</h2>
            {favorites.length === 0 ? (
                <p>The list of favorite products is empty</p>
            ) : (
                <div>
                    {favorites.map((item, index) => (
                        <div key={index} className="product-card">
                        <img src={item.image} alt={item.name} />
                        <h3 className="product-card_header">{item.name}</h3>
                        <p className="product-card_price">Ціна: {item.price} грн</p>
                        <div className="product-card_favorite" onClick={() => removeFromFavorites(item)} style={{ color: 'gold'}}>
                            {'В обраному ★'}
                        </div>

                    </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Favorites;