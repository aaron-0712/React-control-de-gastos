import { MyRoutes } from "./index";
import { createContext } from "react";
import { useState } from "react";
import { Light, Dark } from "./index";
import { ThemeProvider } from "styled-components";

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
/* Lo que esta en setTheme significa "Despachar" , es la forma en que React llama a una función cuyo único proposito es enviar una orden de actualización, y lo que está adentro es lo que indica que tipo de orden de actualización vamos a enviar (en este caso una orden de tipo useState) y en que tipo de valor (string) */

export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined,
);

function App() {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? Light : Dark;

    return (
        <>
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <MyRoutes />
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}

/*ThemeContext.Provider es un componente que viene de ThemeContext y este es el que proporciona los datos que nosotros vamos a recibir con el useContext, con el createContext solo creamos la estacion inicial para el Context API pero es necesario usar el "nombreDelContext".Provider para que pueda pasar la información que queremos pasar directamente a nuestros contenedores descendientes. 

En el ThemeProvider definimos que valores pasaremos y proveeremos a nuestros componentes descendientes, el ThemeProvider es un componente ya hecho por styled component que esta ya configurado para decir: Todo styled component que este dentro de mi recibira lo siguiente: ; en este caso la palabra theme es donde reside toda la informacion CSS+JS que va a ser aplicado a los styled components.

. El ThemeContext.Provider esta cubriendo al ThemeProvider es porque a través de las constantes que poseen el useState theme y setTheme trabaja el themeStyle que utiliza un operador ternario en base a theme. */

export default App;
