import { Link, NavLink} from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import { useCart } from './CartContext';

function Menu(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { getTotalItems } = useCart();

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "red" : theme === "dark" ? "#fff" : "#000",
        fontWeight: isActive ? "bold" : "normal",
        marginRight: "10px",
        textDecoration: "none"
    });

    const linkStyle = {
        color: theme === "dark" ? "#fff" : "#000",
        marginRight: "10px",
        textDecoration: "none"
    };
            <Link to = "/basket" style = {linkStyle}>
                Корзина ({getTotalItems()}) 
            </Link>
    return (
        <nav style={{marginBottom: "20px", padding: "10px", backgroundColor: theme === "dark" ? "#333" : "#fff"}}>
            <NavLink to = "/" end style = {navLinkStyle}>
            Главная
            </NavLink>

            <NavLink to = "/about" style={navLinkStyle}>
             О нас
            </NavLink>

            <Link to = "/product/1" style = {linkStyle} >Товар 1</Link>
            <Link to = "/product/2" style = {linkStyle}>Товар 2</Link>
            
            <Link to = "/login" style = {linkStyle}>Вход</Link>

            <Link to = "/basket" style = {linkStyle}>Корзина</Link>

            <button onClick={toggleTheme} style = {{ marginLeft: "20px"}}>
                Переключить тему ({theme})
            </button>
          </nav>

    );

}

export default Menu;