#!/bin/bash

echo "🚀 ServiceClub Quick Deploy Script"
echo "=================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_status "Node.js version check passed: $(node -v)"

# Install dependencies
print_status "Installing dependencies..."
npm install

# Build all apps
print_status "Building all applications..."
npm run build

if [ $? -eq 0 ]; then
    print_status "Build completed successfully!"
else
    print_error "Build failed!"
    exit 1
fi

# Check if user wants to deploy to Vercel
echo ""
echo "Choose deployment option:"
echo "1) Local development (npm run dev)"
echo "2) Docker deployment (requires Docker)"
echo "3) Vercel deployment (requires Vercel CLI)"
echo "4) Just build (already done)"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_status "Starting local development servers..."
        echo "Hub App will be available at: http://localhost:3000"
        echo "Academy will be available at: http://localhost:3001"
        echo ""
        print_warning "Press Ctrl+C to stop all servers"
        npm run dev
        ;;
    2)
        if ! command -v docker &> /dev/null; then
            print_error "Docker is not installed. Please install Docker first."
            exit 1
        fi
        print_status "Building Docker containers..."
        npm run docker:build
        print_status "Starting Docker containers..."
        npm run docker:up
        echo ""
        print_status "Deployment complete!"
        echo "🌐 Hub App: http://localhost"
        echo "🎓 Academy: http://academy.localhost (add to /etc/hosts)"
        echo ""
        echo "To stop: npm run docker:down"
        echo "To view logs: npm run docker:logs"
        ;;
    3)
        if ! command -v vercel &> /dev/null; then
            print_error "Vercel CLI is not installed. Install with: npm i -g vercel"
            exit 1
        fi
        print_status "Deploying to Vercel..."
        npm run deploy
        ;;
    4)
        print_status "Build completed. You can now deploy manually."
        ;;
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
print_status "ServiceClub deployment script completed!"
echo "📚 Check deploy.md for more deployment options" 