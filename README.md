# SysAcad TypeScript

Sistema académico rediseñado con TypeScript para la materia Desarrollo de Software. Utiliza metodología TDD (Testing Driven Development) y buenas prácticas como SOLID, KISS, YAGNI y DRY.

## 🚀 Características

- **Backend API REST** con Express.js y TypeScript
- **Base de datos PostgreSQL** con Prisma ORM
- **Testing completo** con Jest y Supertest
- **Generación de certificados** en PDF y DOCX
- **Arquitectura modular** con separación de responsabilidades
- **Docker** para desarrollo local

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Docker** y **Docker Compose**
- **Pandoc** (para conversión de documentos)

### Instalación de Pandoc

#### Windows
1. Descarga el instalador desde [pandoc.org](https://pandoc.org/installing.html)
2. Ejecuta el archivo `.msi` descargado
3. Sigue las instrucciones del instalador
4. Verifica la instalación abriendo PowerShell y ejecutando:
   ```bash
   pandoc --version
   ```

#### macOS
```bash
# Con Homebrew
brew install pandoc

# Con MacPorts
sudo port install pandoc

# Verificar instalación
pandoc --version
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install pandoc

# Verificar instalación
pandoc --version
```

#### Linux (CentOS/RHEL/Fedora)
```bash
# CentOS/RHEL
sudo yum install pandoc

# Fedora
sudo dnf install pandoc

# Verificar instalación
pandoc --version
```

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/valentinoaraya/sysacad_typescript.git
cd sysacad_typescript
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:

```bash
# Base de datos
DATABASE_URL="postgresql://anfatitofa:tu_password@localhost:3000/sysacad_db"
POSTGRES_USER=anfatitofa
POSTGRES_PASSWORD=tu_password
POSTGRES_DB=sysacad_db
POSTGRES_PORT=3000

# Servidor
SERVER_PORT=3001
SALT_SECRET=tu_salt_secret_aqui

# Entorno
NODE_ENV=development
```

### 4. Iniciar base de datos
```bash
docker-compose up -d
```

### 5. Generar cliente Prisma
```bash
npx prisma generate
```

### 6. Ejecutar migraciones
```bash
npx prisma migrate dev
```

## 🧪 Ejecutar Tests

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests específicos
```bash
# Tests de alumno
npm test -- tests/alumnoTests/

# Tests de área
npm test -- tests/areaTests/

# Tests de autoridad
npm test -- tests/autoridadTests/

# Tests de base de datos
npm test -- tests/baseDeDatosTests/
```

## 🗄️ Generar Datos de Prueba

### 1. Generar datos en la base de datos
```bash
npm run generate-data
```

Este comando ejecuta el script `src/utils/generarDatos.ts` que:
- Limpia la base de datos existente
- Crea una universidad (UTN)
- Crea una facultad (FRM)
- Crea una especialidad (Ingeniería en Sistemas de Información)
- Crea un plan de estudios
- Crea materias de ejemplo
- Crea orientaciones
- Crea un alumno de prueba (Valentino Araya)

### 2. Verificar datos generados
```bash
npm run access-db
```

## 📡 Usar la API

### Iniciar el servidor
```bash
npm start
```

El servidor estará disponible en `http://localhost:3001`

### Endpoints disponibles

#### Certificado de Alumno Regular
```
GET /api/v1/alumnos/certificado/:id/:tipo
```

**Parámetros:**
- `id`: ID del alumno (codificado con hashids)
- `tipo`: Formato del certificado (`pdf` o `docx`)

**Ejemplo de uso:**
```bash
# Obtener certificado en PDF
curl "http://localhost:3001/api/v1/alumnos/certificado/abc123/pdf"

# Obtener certificado en DOCX
curl "http://localhost:3001/api/v1/alumnos/certificado/abc123/docx"
```

**Nota:** El ID del alumno debe estar codificado usando la función `encodeId` del sistema. Para obtener el ID codificado de un alumno específico, puedes revisar los logs del comando `generate-data` o consultar la base de datos.

## 🏗️ Estructura del Proyecto

```
src/
├── config/          # Configuración y variables de entorno
├── controllers/     # Controladores de la API
├── models/         # Modelos de datos
├── repositories/   # Capa de acceso a datos
├── routes/         # Definición de rutas
├── services/       # Lógica de negocio
├── utils/          # Utilidades y helpers
├── validators/     # Validación de datos
└── index.ts        # Punto de entrada de la aplicación

tests/              # Tests unitarios y de integración
prisma/             # Esquema y migraciones de base de datos
```

## 🐳 Docker

### Comandos útiles

```bash
# Iniciar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down

# Reconstruir contenedores
docker-compose up -d --build

# Limpiar volúmenes
docker-compose down -v
```

## 📝 Scripts NPM Disponibles

- `npm start` - Inicia el servidor en modo desarrollo
- `npm run build` - Compila el proyecto TypeScript
- `npm test` - Ejecuta los tests
- `npm run clear-db` - Limpia la base de datos
- `npm run generate-data` - Genera datos de prueba
- `npm run access-db` - Accede a la base de datos PostgreSQL

## 🔧 Desarrollo

### Compilar TypeScript
```bash
npm run build
```

### Ejecutar en modo desarrollo
```bash
npm start
```

### Limpiar base de datos
```bash
npm run clear-db
```

## 🚨 Solución de Problemas

### Error de conexión a la base de datos
- Verifica que Docker esté ejecutándose
- Asegúrate de que el contenedor PostgreSQL esté activo
- Verifica las credenciales en el archivo `.env`

### Error de dependencias
- Elimina `node_modules` y `package-lock.json`
- Ejecuta `npm install` nuevamente

### Error de Prisma
- Ejecuta `npx prisma generate`
- Verifica que las migraciones estén actualizadas

## 📚 Tecnologías Utilizadas

- **Backend**: Node.js, Express.js, TypeScript
- **Base de datos**: PostgreSQL, Prisma ORM
- **Testing**: Jest, Supertest
- **Contenedores**: Docker, Docker Compose
- **Documentos**: HTML-PDF-Node, HTML-to-DOCX
- **Validación**: Validadores personalizados
- **Hashing**: Hashids para IDs seguros

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Rediseño del sistema académico SysAcad con TypeScript para la materia Desarrollo de Software. Utilizando metodología TDD (Testing Driven Development) y buenas prácticas como SOLID, KISS, YAGNI y DRY.


## Integrantes
- Angelo Conforti
- Facundo Contreras
- Faustino Durán
- Tomás Romero
- Valentino Araya 
- Ignacio Patiño
