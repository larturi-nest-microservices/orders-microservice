# Orders Microservice

## Dev

- Clonar el repositorio
- Instalar dependencias
- Crear un archivo .env basado en el env.template
- Ejecutar migración de prisma
- Ejecutar npm run start:dev
- Insertar Productos en la BD /prisma/products.sql

```bash
nvm use 20.12.2

pnpm install

npx prisma migrate dev

pnpm run start:dev
```
