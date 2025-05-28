# 🚀 ServiceClub Deployment Guide

## Quick Start

```bash
# Ejecutar script de deployment rápido
./quick-deploy.sh
```

## 🌟 Opciones de Deployment

### 1. **Vercel (Recomendado para producción)**

**Ventajas:**
- ✅ Soporte nativo para Next.js y Turborepo
- ✅ SSL automático
- ✅ CDN global
- ✅ Subdominios fáciles de configurar
- ✅ Deploy automático desde Git

**Setup:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy hub-app
cd apps/hub-app
vercel --prod

# Deploy academy
cd ../academy  
vercel --prod
```

**URLs resultantes:**
- Hub: `https://serviceclub-hub.vercel.app`
- Academy: `https://serviceclub-academy.vercel.app`

### 2. **Railway (Excelente para monorepos)**

**Ventajas:**
- ✅ Deploy directo desde GitHub
- ✅ Manejo automático de monorepos
- ✅ Base de datos incluida
- ✅ Subdominios automáticos

**Setup:**
```bash
# Conectar con GitHub y deploy automático
railway login
railway up
```

### 3. **Docker + cualquier cloud**

**Ventajas:**
- ✅ Control total del entorno
- ✅ Escalabilidad horizontal
- ✅ Funciona en cualquier cloud provider

**Setup:**
```bash
# Build y deploy local
npm run docker:build
npm run docker:up

# Para producción (AWS, GCP, Azure)
docker-compose -f docker-compose.prod.yml up -d
```

### 4. **Netlify**

**Ventajas:**
- ✅ Excelente para sitios estáticos
- ✅ Forms y funciones serverless
- ✅ Deploy previews automáticos

## 🌐 Configuración de Subdominios

### Desarrollo Local
```
localhost:3000          → Hub App (Landing + Dashboard)
localhost:3001          → Academy
localhost:3002          → Jobs (placeholder)
localhost:3003          → Shop (placeholder)
localhost:3004          → Services (placeholder)
localhost:3005          → Communities (placeholder)
```

### Producción con Subdominios
```
serviceclub.com         → Hub App
academy.serviceclub.com → Academy
jobs.serviceclub.com    → Jobs
shop.serviceclub.com    → Shop
services.serviceclub.com → Services
communities.serviceclub.com → Communities
```

## 📋 Checklist Pre-Deployment

- [ ] **Build Test**: `npm run build` ✅
- [ ] **Lint Check**: `npm run lint` ✅
- [ ] **Type Check**: `npm run type-check` ✅
- [ ] **Environment Variables**: Configuradas ✅
- [ ] **Domain/Subdomain**: DNS configurado ✅
- [ ] **SSL Certificates**: Configurados ✅

## 🔧 Variables de Entorno

### Hub App (`.env.production`)
```env
NEXT_PUBLIC_ACADEMY_URL=https://academy.serviceclub.com
NEXT_PUBLIC_JOBS_URL=https://jobs.serviceclub.com
NEXT_PUBLIC_SHOP_URL=https://shop.serviceclub.com
NEXT_PUBLIC_SERVICES_URL=https://services.serviceclub.com
NEXT_PUBLIC_COMMUNITIES_URL=https://communities.serviceclub.com
```

### Academy App (`.env.production`)
```env
NEXT_PUBLIC_HUB_URL=https://serviceclub.com
NEXT_PUBLIC_API_URL=https://api.serviceclub.com
```

## 🚀 Comandos Útiles

```bash
# Development
npm run dev              # Todos los servers en desarrollo
npm run dev:hub          # Solo hub-app
npm run dev:academy      # Solo academy

# Build & Test
npm run build            # Build todo el monorepo
npm run lint             # Lint todo el código
npm run type-check       # Verificar tipos TypeScript

# Deployment
npm run deploy           # Deploy a Vercel (hub + academy)
npm run deploy:hub       # Deploy solo hub-app
npm run deploy:academy   # Deploy solo academy

# Docker
npm run docker:build     # Build containers
npm run docker:up        # Start containers
npm run docker:down      # Stop containers
npm run docker:logs      # Ver logs
```

## 🔍 Troubleshooting

### Error: "Module not found"
```bash
# Limpiar y reinstalar
npm run clean
rm -rf node_modules
npm install
npm run build
```

### Error: "Port already in use"
```bash
# Matar procesos en puertos
lsof -ti:3000 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Error: Docker build fails
```bash
# Limpiar Docker cache
docker system prune -a
npm run docker:build --no-cache
```

## 📊 Monitoreo Post-Deployment

### URLs a verificar:
- [ ] Landing page: `https://serviceclub.com`
- [ ] Dashboard: `https://serviceclub.com/dashboard`
- [ ] Login: `https://serviceclub.com/auth/login`
- [ ] Signup: `https://serviceclub.com/auth/signup`
- [ ] Academy: `https://academy.serviceclub.com`

### Performance checks:
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] Mobile responsiveness ✅

## 🎯 Próximos Pasos

1. **Configurar CI/CD** con GitHub Actions
2. **Añadir monitoreo** con Sentry o LogRocket
3. **Configurar analytics** con Google Analytics
4. **Implementar testing** automatizado
5. **Configurar staging environment**

---

**¿Necesitas ayuda?** 
- 📖 Ver `deploy.md` para más detalles
- 🐛 Reportar issues en GitHub
- 💬 Contactar al equipo de desarrollo 