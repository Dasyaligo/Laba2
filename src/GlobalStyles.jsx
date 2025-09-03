import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function GlobalStyles({ children}){
    const {theme} = useContext(ThemeContext);

    const appStyles = {
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "20 px",
        margin: 0
    };

    return(
        <div style = {appStyles}>
            {children}
        </div>
    );
}

export default GlobalStyles;