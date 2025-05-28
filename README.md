# ServiceClub Monorepo 🚀

Un monorepo escalable para la plataforma ServiceClub, construido con **Turborepo**, **Next.js**, **TypeScript** y **Tailwind CSS**.

## 📁 Estructura del Proyecto

```
serviceclub-monorepo/
├── apps/                    # Aplicaciones Next.js
│   ├── hub-app/            # App central (puerto 3000)
│   ├── academy/            # Vertical de educación (puerto 3001)
│   ├── jobs/               # Portal de empleos
│   ├── shop/               # Marketplace
│   ├── services/           # Servicios profesionales
│   ├── communities/        # Comunidades
│   └── dashboard/          # Panel de control
├── packages/               # Paquetes compartidos
│   ├── ui-components/      # Componentes UI reutilizables
│   ├── api-client/         # Cliente API compartido
│   ├── state-management/   # Estado global (Zustand/TanStack Query)
│   ├── utils/              # Utilidades comunes
│   └── i18n/               # Internacionalización
├── configs/                # Configuraciones compartidas
│   ├── eslint-config.js    # ESLint compartido
│   └── prettier.config.js  # Prettier compartido
├── docs/                   # Documentación
├── turbo.json              # Configuración de Turborepo
├── package.json            # Dependencias raíz
└── tsconfig.json           # TypeScript base
```

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18+ 
- **pnpm** 8+

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd serviceclub-monorepo

# Instalar dependencias
pnpm install

# Ejecutar todas las apps en modo desarrollo
pnpm dev
```

### URLs de Desarrollo

- **Hub App** (Router Central): http://localhost:3000
- **Academy**: http://localhost:3001
- **Jobs**: http://localhost:3002
- **Shop**: http://localhost:3003
- **Services**: http://localhost:3004
- **Communities**: http://localhost:3005
- **Dashboard**: http://localhost:3006

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
pnpm dev              # Ejecutar todas las apps
pnpm dev --filter=academy  # Ejecutar solo Academy

# Build
pnpm build            # Construir todas las apps
pnpm build --filter=hub-app  # Construir solo Hub App

# Linting y Type Checking
pnpm lint             # Linter en todas las apps
pnpm type-check       # Verificación de tipos

# Limpieza
pnpm clean            # Limpiar builds y cache
```

## 📦 Packages Compartidos

### @ui-components
Componentes React reutilizables con Tailwind CSS:
```tsx
import { Button, Card } from '@ui-components';

<Button variant="primary" size="lg">
  Click me
</Button>
```

### @api-client
Cliente HTTP configurado con interceptores:
```tsx
import { apiClient } from '@api-client';

const data = await apiClient.get('/users');
```

### @utils
Utilidades comunes:
```tsx
import { capitalize, formatDate, isValidEmail } from '@utils';

const title = capitalize('hello world'); // "Hello world"
```

## 🏗️ Arquitectura

### Multi-Zona con Next.js
- **Hub App**: Router central que conecta todos los verticales
- **Verticales**: Apps independientes con sus propios dominios/subdominios
- **Packages**: Código compartido entre todas las apps

### TypeScript Paths
Configurados en `tsconfig.json` para imports limpios:
```tsx
import { Button } from '@ui-components/Button';
import { apiClient } from '@api-client';
import { formatDate } from '@utils';
```

## 🔧 Configuración

### ESLint y Prettier
Configuraciones compartidas en `/configs/`:
- Reglas consistentes en todo el monorepo
- Formateo automático con Prettier
- TypeScript strict mode habilitado

### Turborepo Pipeline
Optimización de builds y cache:
- Builds incrementales
- Cache distribuido
- Ejecución paralela de tareas

## 📱 Apps Implementadas

### ✅ Hub App
- Router central con navegación a todos los verticales
- Diseño moderno con Tailwind CSS
- Enlaces a apps locales y futuras URLs de producción

### ✅ Academy
- Página de bienvenida personalizada
- Diseño educativo con cards de funcionalidades
- Puerto 3001 configurado

### 🚧 Próximas Apps
- Jobs, Shop, Services, Communities, Dashboard
- Misma estructura base que Academy
- Puertos configurados (3002-3006)

## 🌐 Despliegue

### Desarrollo Local
```bash
pnpm dev  # Todas las apps en paralelo
```

### Producción
```bash
pnpm build  # Build optimizado
pnpm start  # Servidor de producción
```

### Vercel/Netlify
Cada app puede desplegarse independientemente:
- `apps/hub-app` → hub.serviceclub.com
- `apps/academy` → academy.serviceclub.com
- etc.

## 🤝 Contribución

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

---

**ServiceClub Team** 🎯
