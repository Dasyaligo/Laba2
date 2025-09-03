import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    function handleLogin(){
        const isAuth = true;

        if(isAuth){
            navigate("/dashboard"); //Программный переход после логина
        }
        else{
            alert("Ошибка авторизации");

        }
    }

    return(
        <div style = {{textAlign: "center", marginTop: "50px"}}>
            <h2>Старница вход</h2>
            <button onClick={handleLogin}>Войти</button>
        </div>
    )
}