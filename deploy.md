# ServiceClub Deployment Guide

## 🚀 Opciones de Deployment

### 1. Vercel (Recomendado - Más fácil)

#### Setup inicial:
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login a Vercel
vercel login

# Deploy desde la raíz del monorepo
vercel
```

#### Configuración de subdominios en Vercel:
1. **Hub App (Principal)**: `serviceclub.vercel.app`
2. **Academy**: `academy-serviceclub.vercel.app` 
3. **Jobs**: `jobs-serviceclub.vercel.app`
4. **Shop**: `shop-serviceclub.vercel.app`
5. **Services**: `services-serviceclub.vercel.app`

#### Configurar cada app por separado:
```bash
# Deploy hub-app
cd apps/hub-app
vercel --prod

# Deploy academy  
cd ../academy
vercel --prod
```

### 2. Netlify con subdominios

#### Setup:
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy cada app
cd apps/hub-app
netlify deploy --prod --dir=.next

cd ../academy  
netlify deploy --prod --dir=.next
```

### 3. Railway (Fácil para monorepos)

#### Setup:
```bash
# Instalar Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy desde raíz
railway up
```

### 4. Docker + cualquier cloud provider

Ver `docker-compose.yml` para setup completo.

## 🌐 Configuración de Subdominios

### Opción A: Subdominios reales (Producción)
- `serviceclub.com` → Hub App
- `academy.serviceclub.com` → Academy
- `jobs.serviceclub.com` → Jobs
- `shop.serviceclub.com` → Shop
- `services.serviceclub.com` → Services

### Opción B: Path-based routing (Desarrollo/Testing)
- `serviceclub.com` → Hub App
- `serviceclub.com/academy` → Academy
- `serviceclub.com/jobs` → Jobs
- `serviceclub.com/shop` → Shop
- `serviceclub.com/services` → Services

## 📋 Checklist pre-deployment

- [ ] Todas las apps buildan correctamente (`npm run build`)
- [ ] Tests pasan (`npm run test`)
- [ ] Linting limpio (`npm run lint`)
- [ ] Variables de entorno configuradas
- [ ] Dominios/subdominios configurados
- [ ] SSL certificados configurados

## 🔧 Variables de Entorno

Crear `.env.production` en cada app:

```env
# Hub App
NEXT_PUBLIC_ACADEMY_URL=https://academy.serviceclub.com
NEXT_PUBLIC_JOBS_URL=https://jobs.serviceclub.com
NEXT_PUBLIC_SHOP_URL=https://shop.serviceclub.com
NEXT_PUBLIC_SERVICES_URL=https://services.serviceclub.com
NEXT_PUBLIC_COMMUNITIES_URL=https://communities.serviceclub.com

# Academy App
NEXT_PUBLIC_HUB_URL=https://serviceclub.com
```

## 🚀 Comandos de deployment

```bash
# Build todo el monorepo
npm run build

# Deploy con Turborepo
npm run deploy

# Deploy individual
npm run deploy:hub
npm run deploy:academy
``` 