export * from "./App";
export * from "./main";
export * from "./pages/Home";
export * from "./pages/Login";
export * from "./routers/routes";
export * from "./styles/themes";
export * from "./styles/variables";
export * from "./components/atomos/Icono";
export * from "./components/moleculas/BtnSave";
export * from "./components/templates/HomeTemplate";
export * from "./components/templates/LoginTemplate";

/* Este archivo nos permite tener todas las rutas import de manera organizada, aqui exportamos todo de todos los demás archivos, y si necesitamos acceder a componentes o variables de un archivo en específico en otro archivo lo llamamos desde aquí, esto lo hacemos para evitar tener rutas esparcidas en todo el proyecto, uso la extensión "Auto Barrel for VSCode" para hacer esto de forma automática */
