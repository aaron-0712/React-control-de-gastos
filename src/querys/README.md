# Querys (TanStack Query)

Aquí vive la lógica de comunicación asíncrona con el servidor.

- Creamos `Custom Hooks` para cada petición a Supabase (ej: `useGetGastos`).
- Manejamos los estados de: `isLoading`, `isError` y el almacenamiento en caché de los datos.
- Es el puente que mantiene la UI sincronizada con la base de datos.
