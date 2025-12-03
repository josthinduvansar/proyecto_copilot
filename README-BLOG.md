# 📊 Blog Técnico: Estructura de Datos - Grafos

## Descripción del Proyecto

Este proyecto es un **Blog Técnico interactivo** dedicado a la estructura de datos **Grafos** (Graphs). Fue desarrollado como parte de la asignatura **Estructura de Datos 2** y combina desarrollo web moderno con contenido técnico de calidad.

El blog incluye **3 artículos principales** que cubren los aspectos fundamentales de los grafos, desde conceptos básicos hasta algoritmos de recorrido avanzados.

---

## 📚 Contenido del Blog

### Post 1: Introducción a los Grafos - Nodos, Aristas y Tipos
- **Conceptos**: Definición de grafos, vértices, aristas
- **Tipos**: Grafos dirigidos, no dirigidos, ponderados y cíclicos
- **Ejemplos**: Diagrama visual de un grafo no dirigido con 5 nodos
- **Aplicaciones**: Casos de uso en el mundo real

### Post 2: Representación de Grafos
- **Lista de Adyacencia**: Estructura, implementación, ventajas y desventajas
- **Matriz de Adyacencia**: Estructura, implementación, ventajas y desventajas
- **Comparación**: Tabla comparativa de ambas representaciones
- **Ejemplos Visuales**: Diagrama lado a lado de ambas formas
- **Guía de Uso**: Cuándo usar cada representación

### Post 3: Algoritmos Fundamentales de Recorrido - BFS y DFS
- **BFS (Breadth-First Search)**: Conceptos, algoritmo, implementación
- **DFS (Depth-First Search)**: Conceptos, algoritmo, implementación (recursiva e iterativa)
- **Comparación**: Tabla comparativa, orden de visita, aplicaciones
- **Visualización**: Diagrama de comparación BFS vs DFS
- **Complejidad**: Análisis temporal y espacial

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos responsive y animaciones
- **JavaScript (ES6+)**: Lógica interactiva y visualizaciones
- **Canvas API**: Diagramas y gráficos de grafos
- **Git/GitHub**: Control de versiones

---

## 📁 Estructura del Proyecto

```
proyecto-copilottt/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── app.js              # Lógica JavaScript y contenido
├── README.md           # Este archivo
└── .git/               # Repositorio Git
```

### Descripción de Archivos

| Archivo | Descripción |
|---------|------------|
| `index.html` | Estructura HTML del sitio con navegación |
| `styles.css` | Estilos CSS con diseño responsivo |
| `app.js` | Contenido de posts, lógica de navegación y visualizaciones |
| `README.md` | Documentación del proyecto |

---

## 🚀 Características Principales

✅ **Contenido de Calidad**: 3 artículos técnicos completos y bien documentados

✅ **Visualizaciones Interactivas**: Diagramas de grafos dibujados con Canvas

✅ **Navegación Fluida**: Transiciones suaves entre artículos

✅ **Diseño Responsivo**: Funciona perfectamente en cualquier dispositivo

✅ **Ejemplos de Código**: Implementaciones en JavaScript de estructuras y algoritmos

✅ **Tablas Comparativas**: Análisis de complejidad y comparación de métodos

✅ **Estilo Profesional**: Diseño moderno con gradientes y animaciones

---

## 💻 Cómo Usar

### 1. Clonar o Descargar el Repositorio
```bash
git clone https://github.com/josthinduvansar/proyecto-copilottt.git
cd proyecto-copilottt
```

### 2. Abrir en Navegador
Simplemente abre el archivo `index.html` en tu navegador web favorito:
```bash
# En Windows
start index.html

# En macOS
open index.html

# En Linux
xdg-open index.html
```

### 3. Navegar por el Blog
- Usa el menú de navegación para cambiar entre artículos
- Haz clic en las tarjetas de posts en la página de inicio
- Visualiza los diagramas interactivos en cada artículo

---

## 📖 Cómo Leer Este Blog

### Recomendado para Principiantes:
1. Comienza en la página de **Inicio**
2. Lee **Post 1: Introducción a los Grafos**
3. Continúa con **Post 2: Representación de Grafos**
4. Finaliza con **Post 3: Algoritmos de Recorrido**
5. Explora la sección **Acerca de** para más información

---

## 🎨 Paleta de Colores

- **Primario**: `#667eea` (Azul Violeta)
- **Secundario**: `#764ba2` (Violeta)
- **Éxito**: `#28a745` (Verde)
- **Advertencia**: `#ffc107` (Amarillo)
- **Información**: `#667eea` (Azul)

---

## 📊 Visualizaciones Incluidas

1. **Grafo No Dirigido**: Ejemplo con 5 nodos y 7 aristas
2. **Comparación Lista vs Matriz**: Visualización lado a lado de ambas representaciones
3. **BFS vs DFS**: Comparación del orden de visita de ambos algoritmos

---

## 💡 Ejemplos de Código Incluidos

### Grafo con Lista de Adyacencia
```javascript
class GrafoAdyacencia {
    constructor() {
        this.adyacencia = new Map();
    }
    
    agregarVertice(vertice) {
        if (!this.adyacencia.has(vertice)) {
            this.adyacencia.set(vertice, []);
        }
    }
    
    agregarArista(v1, v2) {
        // Implementación...
    }
}
```

### Algoritmo BFS
```javascript
function BFS(grafo, inicio) {
    const visitados = new Set();
    const cola = [];
    const resultado = [];
    
    cola.push(inicio);
    visitados.add(inicio);
    
    while (cola.length > 0) {
        const vertice = cola.shift();
        resultado.push(vertice);
        
        for (const adyacente of grafo[vertice] || []) {
            if (!visitados.has(adyacente)) {
                visitados.add(adyacente);
                cola.push(adyacente);
            }
        }
    }
    
    return resultado;
}
```

### Algoritmo DFS (Recursivo)
```javascript
function DFS_Recursivo(grafo, vertice, visitados = new Set(), resultado = []) {
    visitados.add(vertice);
    resultado.push(vertice);
    
    for (const adyacente of grafo[vertice] || []) {
        if (!visitados.has(adyacente)) {
            DFS_Recursivo(grafo, adyacente, visitados, resultado);
        }
    }
    
    return resultado;
}
```

---

## 🔄 Control de Versiones

Este proyecto utiliza **Git** para control de versiones. El repositorio está disponible en GitHub.

### Commits Principales
- Estructura base del blog (HTML, CSS, JS)
- Post 1: Introducción a Grafos
- Post 2: Representación de Grafos
- Post 3: Algoritmos BFS y DFS
- Visualizaciones con Canvas
- Documentación completa

---

## 📝 Requisitos Completados

✅ **Fase 1: Estructura y Contenido**
- [x] Mínimo 3 artículos (Posts)
- [x] Post 1: Introducción a Grafos (Definición, conceptos, tipos, diagrama)
- [x] Post 2: Representación (Lista de Adyacencia, Matriz, comparación)
- [x] Post 3: Algoritmos (BFS y DFS con explicaciones)
- [x] Diagramas visuales para cada concepto

✅ **Tecnologías Utilizadas**
- [x] HTML/CSS/JavaScript
- [x] Control de versiones (Git/GitHub)

✅ **Características Adicionales**
- [x] Navegación interactiva
- [x] Diseño responsivo
- [x] Ejemplos de código funcionales
- [x] Visualizaciones dinámicas con Canvas
- [x] Tablas comparativas
- [x] Documentación completa

---

## 🌐 Acceso al Blog

Para acceder al blog:
1. Clona o descarga el repositorio
2. Abre `index.html` en tu navegador
3. Explora el contenido usando la navegación principal

---

## 📧 Autor

**Proyecto creado para:** Estructura de Datos 2

**Período:** Noviembre 2025

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

## 🙏 Agradecimientos

Gracias a los instructores y compañeros de la asignatura Estructura de Datos 2 por la motivación y apoyo en la realización de este proyecto.

---

## 🚀 Posibles Mejoras Futuras

- [ ] Agregar más posts sobre algoritmos avanzados (Dijkstra, Floyd-Warshall)
- [ ] Implementar un simulador interactivo de algoritmos
- [ ] Agregar ejercicios prácticos interactivos
- [ ] Crear una sección de preguntas frecuentes (FAQ)
- [ ] Agregar temas en modo oscuro
- [ ] Implementar búsqueda dentro del blog
- [ ] Agregar comentarios y retroalimentación

---

**¡Gracias por leer este blog técnico sobre Grafos!** 📊✨
