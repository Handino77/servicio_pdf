# Puppeteer PDF Service

Servicio simple de conversión HTML a PDF usando Puppeteer.

## 🚀 Cómo desplegar en Railway

1. Crea un nuevo repositorio en GitHub.
2. Sube los archivos `server.js`, `package.json` y `README.md`.
3. Ve a [https://railway.app](https://railway.app), crea un nuevo proyecto y elige “Deploy from GitHub”.
4. Selecciona tu repositorio y Railway se encargará del resto.

## 🧪 Cómo usarlo

Envía un POST a `/convert` con este body JSON:

```json
{
  "html": "<h1>Mi Manual ISO</h1><p>Contenido profesional...</p>"
}
