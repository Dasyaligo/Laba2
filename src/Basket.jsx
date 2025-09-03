// Basket.jsx
import { useCart } from "./CartContext";

function Basket(){
    const { cart, updateCartItem, removeFromCart, getTotalPrice } = useCart();

    const handleQuantityChange = (productId, newAmount) => {
        updateCartItem(productId, newAmount);
    };

    return(
        <div>
            <h1>Корзина</h1>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} style={{
                            padding: "10px",
                            margin: "10px 0"
                        }}>
                            <h3>{item.name}</h3>
                            <p>Цена: {item.price} руб.</p>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                <span>Количество:</span>
                                <button 
                                    onClick={() => handleQuantityChange(item.id, item.amount - 1)}
                                    disabled={item.amount <= 1}
                                >
                                    -
                                </button>
                                <span>{item.amount}</span>
                                <button 
                                    onClick={() => handleQuantityChange(item.id, item.amount + 1)}
                                >
                                    +
                                </button>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    style={{ marginLeft: "20px", color: "red" }}
                                >
                                    Удалить
                                </button>
                            </div>
                            <p>Итого: {item.price * item.amount} руб.</p>
                        </div>
                    ))}
                    <div style={{ marginTop: "20px", padding: "10px" }}>
                        <h3>Общая сумма: {getTotalPrice()} руб.</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Basket;