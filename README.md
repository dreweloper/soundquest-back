# soundquest-back

## Notas
- node-fetch v2: instalo la versión 2 y no la última, ya que esta no es compatible con CommonJS (sistema de modulos de JavaScript).
- Configuro la IP Access List de MongoDB Atlas con las Static Outbound IP Addresses de Render. De esta forma, evito cualquier posible error de conexión que tenga relación con el acceso desde Render a la base de datos de MongoDB Atlas.
- Actualizo url base de los endpoint en Postman.