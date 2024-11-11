# Drum Machine <img src="https://github.com/user-attachments/assets/31e0e11d-a91f-42d9-b4bd-3bf1f6e55924" alt="App Logo" width="50" height="50" />
<br>
<img src="https://github.com/user-attachments/assets/ebaeee9c-3c28-4cd3-ae52-a829ab9df9eb" alt="App Img" width="300" height="300" />

## 🛠️ Tecnologías Utilizadas

- **Framework:** React
- **Lenguaje:** TypeScript
- **Estilos:** SCSS
- **Testing:** Playwright (end-to-end)
- **Linter:** ESLint

## 📚 Instalación y Configuración

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local.

### 1. Clonar el repositorio

````
git clone https://github.com/jigcolapaolo/drum-machine.git
````

### 2. Instalar dependencias

```
npm install
````

### 4. Ejecutar la aplicación

Para ejecutar el proyecto en modo desarrollo:

````
npm run dev
````

Para construir y ejecutar en modo producción:

````
npm build
npm start
````

## 🧪 Tests

La app incluye tests de extremo a extremo (E2E) con configuraciones específicas para Playwright.

### Ejecutar Tests E2E con Playwright

1. Usa el siguiente comando para ejecutar todos los tests de Playwright:
````
npx playwright test
````
Opcional con UI:
````
npx playwright test --ui
````
