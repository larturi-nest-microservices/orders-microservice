# Orders Microservice

## Dev

- Clonar el repositorio
- Instalar dependencias
- Crear un archivo .env basado en el env.template

```bash
nvm use 20.12.2

pnpm install

pnpm run start:dev
```

## Levantar la base en ambiente dev con Docker

```bash
docker-compose up -d
```

## Ejecutar migración de la base de datos con Prisma

```bash
npx prisma migrate dev
```
