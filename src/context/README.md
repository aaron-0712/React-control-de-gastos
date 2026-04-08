# Context

Aquí reside el **React Context API**.

Se usa para estados que deben ser accesibles en toda la app pero que no cambian constantemente.

**Ejemplo:** `ThemeContext` para manejar el modo oscuro/claro y el idioma.

Funciona como una "estación de radio" que transmite datos a los componentes sin usar props, gracias a esto nos ahorramos el "Prop Drilling"(pasar datos de padre a hijo sin necesidad).
