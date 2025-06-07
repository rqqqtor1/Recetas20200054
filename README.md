# React + Vite

# 🎬 Movie Database - Gestor Personal de Películas

Una aplicación web moderna desarrollada en React.js para gestionar tu colección personal de películas, implementando operaciones CRUD completas con una interfaz intuitiva y responsive.

## 📋 Descripción del Proyecto

Esta aplicación permite a los usuarios crear su propia base de datos cinematográfica donde pueden registrar películas con información detallada como título, género, año de estreno y calificación personal. Ideal para cinéfilos que desean mantener un registro organizado de las películas que han visto.

## ✨ Características Principales

- **Pantalla de Bienvenida**: Introducción elegante con redirección automática al dashboard
- **Dashboard Principal**: Interfaz limpia para gestionar todas las películas
- **CRUD Completo**:
  - ✅ **Crear**: Agregar nuevas películas con formulario validado
  - ✅ **Leer**: Visualizar lista de películas con información detallada
  - ✅ **Actualizar**: Editar información de películas existentes
  - ✅ **Eliminar**: Remover películas con confirmación de seguridad
- **Validación de Formularios**: Usando React Hook Form con mensajes de error claros
- **Notificaciones**: Toasts informativos para confirmaciones y errores
- **Diseño Responsive**: Adaptable a móviles, tablets y escritorio
- **Navegación**: Implementada con React Router DOM
- **Componentes Reutilizables**: Arquitectura modular y mantenible

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React.js 18.2.0
- **Build Tool**: Vite 4.3.2
- **Routing**: React Router DOM 6.8.1
- **Form Management**: React Hook Form 7.43.9
- **Notifications**: React Hot Toast 2.4.0
- **Styling**: CSS3 con variables personalizadas
- **HTTP Client**: Fetch API nativo

## 📁 Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── Button.jsx       # Componente de botón
│   ├── Card.jsx         # Componente de tarjeta
│   ├── Title.jsx        # Componente de título
│   ├── Modal.jsx        # Componente modal
│   ├── MovieForm.jsx    # Formulario de películas
│   └── LoadingSpinner.jsx # Indicador de carga
├── hooks/               # Custom hooks
│   ├── useFetchMovies.js    # Hook para obtener películas
│   ├── useSaveMovie.js      # Hook para guardar películas
│   └── useDeleteMovie.js    # Hook para eliminar películas
├── pages/               # Páginas principales
│   ├── WelcomePage.jsx  # Pantalla de bienvenida
│   └── HomePage.jsx     # Dashboard principal
├── styles/              # Archivos CSS
│   ├── App.css          # Estilos globales
│   ├── WelcomePage.css  # Estilos de bienvenida
│   ├── HomePage.css     # Estilos del dashboard
│   ├── Button.css       # Estilos de botones
│   ├── Card.css         # Estilos de cards
│   ├── Title.css        # Estilos de títulos
│   ├── Modal.css        # Estilos de modal
│   ├── MovieForm.css    # Estilos del formulario
│   └── LoadingSpinner.css # Estilos de loading
├── App.jsx              # Componente raíz
└── main.jsx            # Punto de entrada
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd movie-database
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - La aplicación estará disponible en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Ejecuta la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 🔗 API Utilizada

La aplicación consume la API RESTful proporcionada:

- **URL Base**: `https://retoolapi.dev/vmJ8AL/peliculas`
- **Endpoints**:
  - `GET /` - Obtener todas las películas
  - `POST /` - Crear nueva película
  - `PUT /{id}` - Actualizar película existente
  - `DELETE /{id}` - Eliminar película

### Estructura de Datos

```json
{
  "id": 1,
  "pelicula": "Avengers: Endgame",
  "genero": "Accion",
  "estreno": 2019,
  "calificacion": 9
}
```

## 🎨 Características de Diseño

- **Paleta de Colores**: Gradientes modernos con azul y púrpura
- **Tipografía**: Segoe UI para mayor legibilidad
- **Iconos**: Emojis integrados para una interfaz amigable
- **Efectos**: Animaciones suaves y efectos hover
- **Responsive**: Mobile-first design approach

## 📱 Funcionalidades Destacadas

### Gestión de Películas
- Formulario con validaciones en tiempo real
- Selección de géneros predefinidos
- Calificación del 1 al 10 estrellas
- Validación de años (1900 - 2027)

### Experiencia de Usuario
- Pantalla de carga elegante
- Mensajes de confirmación y error
- Navegación intuitiva
- Estado vacío personalizado

### Componentes Reutilizables
- Sistema de botones con múltiples variantes
- Cards personalizables
- Modal reutilizable con efectos
- Títulos con diferentes niveles

## 🔧 Configuración de Desarrollo

### Variables de Entorno
No se requieren variables de entorno para este proyecto.

### Personalización
- Los colores principales se pueden modificar en `App.css` (variables CSS)
- Los géneros de películas se configuran en `MovieForm.jsx`
- Los mensajes de toast se personalizan en cada hook

## 📈 Próximas Mejoras

- [ ] Filtros por género y año
- [ ] Búsqueda de películas
- [ ] Ordenamiento personalizado
- [ ] Exportación de datos
- [ ] Modo oscuro
- [ ] Integración con APIs de películas externas

## 👥 Créditos

- **Desarrollador**: Raúl Eduardo Ochoa Marroquín
-