// App.jsx
import './App.css';
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { CartProvider } from './CartContext'; // Добавьте этот импорт
import Menu from "./Menu";
import GlobalStyles from './GlobalStyles'; // Исправлено: GlobalStyles вместо GlobalStyle
import Basket from './Basket';

function App() {
    return(
      <ThemeProvider>
        <CartProvider> {/* Добавьте этот провайдер */}
          <BrowserRouter>
            <GlobalStyles> {/* Исправлено: GlobalStyles */}
              <Menu/>
              <Routes>
                <Route path ='/' element = {<Home/>}/>
                <Route path ='/about' element = {<About/>}/>
                <Route path='/product/:id' element = {<Product/>}/>
                <Route path ='/login' element = {<Login/>}/>
                <Route path = '/basket' element = {<Basket/>}/>
              </Routes>
            </GlobalStyles>
          </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    );
}

export default App;