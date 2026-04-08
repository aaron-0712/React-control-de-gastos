# Components (Atomic Design)

Usamos la metodología de **Diseño Atómico** para que la interfaz sea escalable.

- **Átomos:** Elementos simples que individualmente no son la gran cosa (un párrafo o un ícono), pero son la base de todo lo demás.
- **Moléculas:** Elementos compuestos de la unión de átomos (Un botón, una barra de búsqueda).
- **Organismos:** Secciones complejas, resultan de la unión de moléculas (Sidebar, Formulario de Gastos).
- **Templates:** Este es el "esqueleto" de la página. Definen dónde va cada organismo pero no contienen datos reales.

    _Relación con Pages:_ Una **Page** toma un **Template** y le inyecta la información que viene de la base de datos.
