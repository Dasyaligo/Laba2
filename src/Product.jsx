
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

function Product(){
    const { id } = useParams();
    const { addToCart } = useCart();

    
    const product = {
        id: parseInt(id),
        name: `Товар ${id}`,
        price: id === "1" ? 150: 200,
        description: `Описание товара ${id}`
    };

    const handleAddToCart = () => {
        addToCart(product);
        
    };

    return (
        <div>
            <h2>Товар: {product.name}</h2>
            <p>Цена: {product.price} руб.</p>
            <p>{product.description}</p>
            <button onClick={handleAddToCart} style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}>
                Добавить в корзину
            </button>
        </div>
    );
}

export default Product;