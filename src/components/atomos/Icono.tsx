import styled from "styled-components";
export const Icono = styled.span`
    color: ${(props) => props.theme};
`;

/* Aquí el color del ícono cambia dependiendo del valor de la propiedad theme de "ThemeProvider" un componente ya hecho por styled components que se encuentra ubicado en "../../App.tsx" Lín 22, col 17.
No confundir con "ThemeContext.Provider" el cual es el componente padre de "ThemeProvider" */
