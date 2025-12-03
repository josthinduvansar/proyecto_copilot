#!/bin/bash

# Script para preparar el entorno del blog

echo "📊 Preparando Blog Técnico de Grafos..."
echo ""

# Verificar si Git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Git no está instalado. Por favor, instala Git."
    exit 1
fi

echo "✅ Git está disponible"
echo ""

# Inicializar repositorio si no existe
if [ ! -d .git ]; then
    echo "Inicializando repositorio Git..."
    git init
    git config user.email "usuario@example.com"
    git config user.name "Tu Nombre"
fi

# Agregar archivos
echo "Agregando archivos al control de versiones..."
git add -A

# Hacer commit
echo "Realizando commit inicial..."
git commit -m "Feat: Blog Técnico sobre Grafos - Estructura completa

- Post 1: Introducción a los Grafos
- Post 2: Representación de Grafos
- Post 3: Algoritmos BFS y DFS
- Visualizaciones interactivas con Canvas
- Diseño responsivo y navegación fluida"

echo ""
echo "✅ Repositorio configurado correctamente"
echo ""
echo "Para ver el blog:"
echo "  1. Abre index.html en tu navegador"
echo "  2. O usa: python -m http.server (luego accede a http://localhost:8000)"
echo ""
echo "Para ver el historial de commits:"
echo "  git log --oneline"
