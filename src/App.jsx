import './App.css';
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
    return(
      <BrowserRouter>  {/*Для маршрутизации*/}
        <div>
          {/*Меню навигации */}
          <nav style={{margin: "10px"}}>
            <Link to = "/" style = {{marginRight: "10px"}}>Главная</Link>

            <NavLink
              to = "/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
                fontWeight: isActive ? "bold" : "normal"
              })}
            >
             
            </NavLink>

            <Link to = "/about" style = {{marginRight: "10px"}}>О нас</Link>
            <Link to = "/product/1">Товар 1</Link>
            <Link to = "/product/2">Товар 2</Link>
          </nav>
          {/*Маршруты*/}
          <Routes>
            <Route path ='/' element = {<Home/>}/>
            <Route path ='/about' element = {<About/>}/>
            <Route path='/product/:id' element = {< Product/>}/> 
            
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;