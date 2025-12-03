// Contenido de los posts
const posts = {
    post1: {
        title: "Post 1: Introducción a los Grafos - Nodos, Aristas y Tipos",
        content: `
            <article>
                <h2>Introducción a los Grafos: Nodos, Aristas y Tipos</h2>
                
                <h3>¿Qué es un Grafo?</h3>
                <p>
                    Un <strong>grafo</strong> es una estructura de datos no lineal que consiste en un conjunto de 
                    objetos llamados <strong>vértices</strong> (o nodos) conectados por líneas llamadas <strong>aristas</strong> 
                    (o ejes). Los grafos son fundamentales en la informática y se utilizan para representar una 
                    amplia variedad de problemas en el mundo real, como redes de computadoras, sistemas de transporte, 
                    relaciones sociales y muchas otras aplicaciones.
                </p>

                <h3>Conceptos Clave</h3>

                <h4>1. Vértices o Nodos</h4>
                <p>
                    Un <strong>vértice</strong> (también llamado nodo) es un punto fundamental en un grafo. 
                    Representa una entidad o un objeto. Por ejemplo, en una red social, cada persona sería un vértice.
                </p>

                <h4>2. Aristas o Ejes</h4>
                <p>
                    Una <strong>arista</strong> (también llamada eje o enlace) es una conexión entre dos vértices. 
                    Representa una relación entre dos entidades. En una red social, una amistad entre dos personas 
                    sería una arista.
                </p>

                <h4>3. Peso (Opcional)</h4>
                <p>
                    Algunos grafos tienen <strong>pesos</strong> asociados a las aristas. Estos pesos pueden 
                    representar distancias, costos, capacidades, etc. Un grafo con pesos se llama <strong>grafo ponderado</strong>.
                </p>

                <h3>Tipos de Grafos</h3>

                <h4>1. Grafos No Dirigidos (Undirected Graphs)</h4>
                <p>
                    En un <strong>grafo no dirigido</strong>, las aristas no tienen una dirección específica. 
                    La relación es simétrica: si hay una arista de A a B, también hay una de B a A.
                </p>
                <div class="info-box">
                    <strong>Ejemplo:</strong> Una red de amigos en una red social. Si Ana es amiga de Bruno, 
                    entonces Bruno también es amigo de Ana.
                </div>

                <h4>2. Grafos Dirigidos (Directed Graphs o Digrafos)</h4>
                <p>
                    En un <strong>grafo dirigido</strong>, las aristas tienen una dirección específica, 
                    representada comúnmente por flechas. La relación es asimétrica.
                </p>
                <div class="info-box">
                    <strong>Ejemplo:</strong> Una red de Twitter. Si Ana sigue a Bruno, eso no significa 
                    que Bruno siga a Ana.
                </div>

                <h4>3. Grafos Ponderados (Weighted Graphs)</h4>
                <p>
                    Un <strong>grafo ponderado</strong> es aquel en el que cada arista tiene asociado un peso o valor numérico. 
                    Este peso puede representar distancia, tiempo, costo, etc.
                </p>
                <div class="info-box">
                    <strong>Ejemplo:</strong> Un mapa de ciudades donde las aristas representan carreteras con distancias asociadas.
                </div>

                <h4>4. Grafos Cíclicos y Acíclicos</h4>
                <p>
                    <strong>Grafo Cíclico:</strong> Contiene al menos un ciclo (un camino que comienza y termina en el mismo vértice).
                </p>
                <p>
                    <strong>Grafo Acíclico:</strong> No contiene ciclos. Un ejemplo importante es un Árbol, 
                    que es un grafo acíclico conectado.
                </p>

                <h3>Ejemplo Visual: Grafo No Dirigido</h3>
                <p>
                    A continuación se muestra un ejemplo de un grafo no dirigido con 5 nodos y sus conexiones:
                </p>
                <div class="canvas-container">
                    <canvas id="graphCanvas" width="600" height="400"></canvas>
                    <p class="canvas-label">Grafo No Dirigido: Red de 5 Nodos</p>
                </div>

                <h3>Notación Matemática</h3>
                <p>
                    Un grafo se denota formalmente como <strong>G = (V, E)</strong> donde:
                </p>
                <ul>
                    <li><strong>V</strong> es el conjunto de vértices</li>
                    <li><strong>E</strong> es el conjunto de aristas</li>
                </ul>

                <p>
                    Para el grafo del ejemplo:
                </p>
                <ul>
                    <li><strong>V = {A, B, C, D, E}</strong></li>
                    <li><strong>E = {(A,B), (A,C), (B,C), (B,D), (C,D), (C,E), (D,E)}</strong></li>
                </ul>

                <h3>Aplicaciones en el Mundo Real</h3>
                <ul>
                    <li><strong>Redes Sociales:</strong> Usuarios como vértices, amistades como aristas</li>
                    <li><strong>Sistemas de Navegación:</strong> Ciudades como vértices, carreteras como aristas ponderadas</li>
                    <li><strong>Internet:</strong> Computadoras como vértices, conexiones como aristas</li>
                    <li><strong>Redes de Transporte:</strong> Estaciones como vértices, rutas como aristas</li>
                    <li><strong>Compiladores:</strong> Análisis de dependencias de código</li>
                    <li><strong>Química:</strong> Moléculas como grafos con átomos como vértices</li>
                </ul>

                <h3>Conclusión</h3>
                <p>
                    Los grafos son una estructura de datos versátil y poderosa que permite modelar 
                    relaciones complejas entre entidades. Entender los conceptos básicos de nodos, aristas 
                    y los diferentes tipos de grafos es esencial para abordar problemas más complejos en ciencia 
                    de la computación.
                </p>
            </article>
        `
    },

    post2: {
        title: "Post 2: Representación de Grafos",
        content: `
            <article>
                <h2>Representación de Grafos</h2>
                
                <h3>Introducción</h3>
                <p>
                    Para trabajar con grafos en programas de computadora, necesitamos representarlos en memoria 
                    de una manera eficiente. Existen dos formas principales de representar un grafo: 
                    la <strong>Lista de Adyacencia</strong> y la <strong>Matriz de Adyacencia</strong>. 
                    Cada una tiene sus ventajas y desventajas según el caso de uso.
                </p>

                <h3>1. Lista de Adyacencia</h3>

                <h4>Definición</h4>
                <p>
                    Una <strong>Lista de Adyacencia</strong> es una representación donde cada vértice mantiene 
                    una lista de todos sus vértices adyacentes (vecinos). Se puede implementar usando un 
                    diccionario o un mapa donde la clave es un vértice y el valor es una lista de sus adyacentes.
                </p>

                <h4>Estructura</h4>
                <pre><code>Grafo = {
    A: [B, C],
    B: [A, C, D],
    C: [A, B, D, E],
    D: [B, C, E],
    E: [C, D]
}</code></pre>

                <h4>Ventajas</h4>
                <ul>
                    <li><strong>Eficiencia de Espacio:</strong> Ocupa O(V + E) donde V es vértices y E es aristas. Ideal para grafos dispersos (pocos aristas).</li>
                    <li><strong>Iteración Eficiente:</strong> Es fácil iterar sobre los adyacentes de un vértice.</li>
                    <li><strong>Escalable:</strong> No requiere espacio cuadrático incluso para grafos grandes.</li>
                </ul>

                <h4>Desventajas</h4>
                <ul>
                    <li><strong>Búsqueda Lenta:</strong> Verificar si existe una arista entre dos vértices puede tomar O(E) en el peor caso.</li>
                    <li><strong>Más Compleja de Implementar:</strong> Requiere estructuras dinámicas.</li>
                </ul>

                <h4>Ejemplo de Código (JavaScript)</h4>
                <pre><code>class GrafoAdyacencia {
    constructor() {
        this.adyacencia = new Map();
    }

    agregarVertice(vertice) {
        if (!this.adyacencia.has(vertice)) {
            this.adyacencia.set(vertice, []);
        }
    }

    agregarArista(v1, v2) {
        if (!this.adyacencia.has(v1)) this.agregarVertice(v1);
        if (!this.adyacencia.has(v2)) this.agregarVertice(v2);
        
        this.adyacencia.get(v1).push(v2);
        this.adyacencia.get(v2).push(v1); // Para grafo no dirigido
    }

    obtenerAdyacentes(vertice) {
        return this.adyacencia.get(vertice) || [];
    }
}</code></pre>

                <h3>2. Matriz de Adyacencia</h3>

                <h4>Definición</h4>
                <p>
                    Una <strong>Matriz de Adyacencia</strong> es una representación usando una matriz (array 2D) 
                    donde el elemento en la posición [i][j] indica si existe una arista entre los vértices i y j.
                </p>

                <h4>Estructura</h4>
                <p>
                    Supongamos que los vértices son A(0), B(1), C(2), D(3), E(4):
                </p>
                <pre><code>    A  B  C  D  E
A [ 0  1  1  0  0 ]
B [ 1  0  1  1  0 ]
C [ 1  1  0  1  1 ]
D [ 0  1  1  0  1 ]
E [ 0  0  1  1  0 ]</code></pre>

                <h4>Ventajas</h4>
                <ul>
                    <li><strong>Búsqueda Rápida:</strong> Verificar si existe una arista es O(1).</li>
                    <li><strong>Implementación Simple:</strong> Fácil de entender e implementar.</li>
                    <li><strong>Operaciones de Matriz:</strong> Permite usar álgebra de matrices.</li>
                </ul>

                <h4>Desventajas</h4>
                <ul>
                    <li><strong>Ineficiencia de Espacio:</strong> Ocupa O(V²) espacio incluso para grafos dispersos.</li>
                    <li><strong>Iteración Lenta:</strong> Iterar sobre los adyacentes de un vértice requiere revisar toda una fila.</li>
                </ul>

                <h4>Ejemplo de Código (JavaScript)</h4>
                <pre><code>class GrafoMatriz {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.matriz = Array(numVertices)
            .fill(0)
            .map(() => Array(numVertices).fill(0));
    }

    agregarArista(v1, v2, peso = 1) {
        this.matriz[v1][v2] = peso;
        this.matriz[v2][v1] = peso; // Para grafo no dirigido
    }

    existeArista(v1, v2) {
        return this.matriz[v1][v2] !== 0;
    }

    obtenerAdyacentes(vertice) {
        const adyacentes = [];
        for (let i = 0; i < this.numVertices; i++) {
            if (this.matriz[vertice][i] !== 0) {
                adyacentes.push(i);
            }
        }
        return adyacentes;
    }
}</code></pre>

                <h3>Comparación Visual: Mismo Grafo</h3>
                <p>
                    A continuación se muestra la comparación entre ambas representaciones para el mismo grafo:
                </p>
                <div class="canvas-container">
                    <canvas id="comparisonCanvas" width="700" height="500"></canvas>
                    <p class="canvas-label">Comparación: Lista vs Matriz de Adyacencia</p>
                </div>

                <h3>Tabla Comparativa</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Lista de Adyacencia</th>
                            <th>Matriz de Adyacencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Espacio</td>
                            <td>O(V + E)</td>
                            <td>O(V²)</td>
                        </tr>
                        <tr>
                            <td>Búsqueda de Arista</td>
                            <td>O(E) promedio</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Iteración Adyacentes</td>
                            <td>O(grado del vértice)</td>
                            <td>O(V)</td>
                        </tr>
                        <tr>
                            <td>Agregar Arista</td>
                            <td>O(1)</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Mejor Para</td>
                            <td>Grafos Dispersos</td>
                            <td>Grafos Densos</td>
                        </tr>
                    </tbody>
                </table>

                <h3>¿Cuál Usar?</h3>
                <div class="success-box">
                    <strong>Usa Lista de Adyacencia si:</strong>
                    <ul>
                        <li>El grafo es disperso (pocas aristas)</li>
                        <li>Necesitas iterar sobre los adyacentes frecuentemente</li>
                        <li>El espacio es una limitación crítica</li>
                        <li>No necesitas búsquedas rápidas de aristas específicas</li>
                    </ul>
                </div>

                <div class="warning-box">
                    <strong>Usa Matriz de Adyacencia si:</strong>
                    <ul>
                        <li>El grafo es denso (muchas aristas)</li>
                        <li>Necesitas búsquedas rápidas de aristas específicas</li>
                        <li>Usarás operaciones matriciales</li>
                        <li>El número de vértices es pequeño y manejable</li>
                    </ul>
                </div>

                <h3>Conclusión</h3>
                <p>
                    La elección entre Lista de Adyacencia y Matriz de Adyacencia depende de las características 
                    específicas de tu problema. Ambas representaciones son válidas y se usan ampliamente en algoritmos 
                    de grafos. Un buen programador debe conocer ambas y elegir la más apropiada para cada situación.
                </p>
            </article>
        `
    },

    post3: {
        title: "Post 3: Algoritmos Fundamentales de Recorrido - BFS y DFS",
        content: `
            <article>
                <h2>Algoritmos Fundamentales de Recorrido: BFS y DFS</h2>
                
                <h3>Introducción</h3>
                <p>
                    Los algoritmos de recorrido son fundamentales en la teoría de grafos. Permiten explorar 
                    todos los vértices y aristas de un grafo de manera sistemática. Los dos algoritmos más 
                    importantes son la <strong>Búsqueda en Amplitud (BFS)</strong> y la <strong>Búsqueda en Profundidad (DFS)</strong>.
                </p>

                <h3>1. Búsqueda en Amplitud (BFS - Breadth-First Search)</h3>

                <h4>Definición</h4>
                <p>
                    BFS es un algoritmo que explora un grafo nivel por nivel, comenzando desde un vértice de inicio. 
                    Primero visita todos los vértices adyacentes al vértice de inicio, luego los vértices adyacentes 
                    a esos, y así sucesivamente. Utiliza una <strong>Cola (Queue)</strong> para mantener el orden de exploración.
                </p>

                <h4>Características</h4>
                <ul>
                    <li><strong>Estructura de datos:</strong> Cola (FIFO - First In First Out)</li>
                    <li><strong>Complejidad temporal:</strong> O(V + E)</li>
                    <li><strong>Complejidad espacial:</strong> O(V)</li>
                    <li><strong>Distancia:</strong> Encuentra el camino más corto en grafos sin pesos</li>
                </ul>

                <h4>Algoritmo BFS paso a paso</h4>
                <pre><code>BFS(grafo, inicio):
    cola = new Cola()
    visitados = new Conjunto()
    
    cola.encolar(inicio)
    visitados.agregar(inicio)
    
    mientras cola no esté vacía:
        vertice = cola.desencolar()
        procesar(vertice)
        
        para cada adyacente en grafo.obtenerAdyacentes(vertice):
            si adyacente no está en visitados:
                visitados.agregar(adyacente)
                cola.encolar(adyacente)</code></pre>

                <h4>Implementación en JavaScript</h4>
                <pre><code>function BFS(grafo, inicio) {
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
}</code></pre>

                <h4>Ejemplo de Ejecución</h4>
                <p>
                    Ejecutando BFS desde el nodo A en nuestro grafo de ejemplo:
                </p>
                <div class="info-box">
                    <strong>Orden de visita:</strong> A → B, C → D, E
                    <br><strong>Resultado:</strong> [A, B, C, D, E]
                </div>

                <h3>2. Búsqueda en Profundidad (DFS - Depth-First Search)</h3>

                <h4>Definición</h4>
                <p>
                    DFS es un algoritmo que explora un grafo tan profundo como sea posible antes de retroceder. 
                    Comienza en un vértice de inicio y sigue un camino lo más profundo posible antes de explorar 
                    otras ramas. Utiliza una <strong>Pila (Stack)</strong> o recursión para mantener el orden de exploración.
                </p>

                <h4>Características</h4>
                <ul>
                    <li><strong>Estructura de datos:</strong> Pila (LIFO - Last In First Out) o Recursión</li>
                    <li><strong>Complejidad temporal:</strong> O(V + E)</li>
                    <li><strong>Complejidad espacial:</strong> O(V) en el peor caso</li>
                    <li><strong>Uso:</strong> Detección de ciclos, ordenamiento topológico, componentes conexas</li>
                </ul>

                <h4>Algoritmo DFS paso a paso (Versión Recursiva)</h4>
                <pre><code>DFS(grafo, vertice, visitados):
    visitados.agregar(vertice)
    procesar(vertice)
    
    para cada adyacente en grafo.obtenerAdyacentes(vertice):
        si adyacente no está en visitados:
            DFS(grafo, adyacente, visitados)</code></pre>

                <h4>Algoritmo DFS paso a paso (Versión Iterativa)</h4>
                <pre><code>DFS_Iterativo(grafo, inicio):
    pila = new Pila()
    visitados = new Conjunto()
    
    pila.apilar(inicio)
    
    mientras pila no esté vacía:
        vertice = pila.desapilar()
        
        si vertice no está en visitados:
            visitados.agregar(vertice)
            procesar(vertice)
            
            para cada adyacente en grafo.obtenerAdyacentes(vertice):
                si adyacente no está en visitados:
                    pila.apilar(adyacente)</code></pre>

                <h4>Implementación en JavaScript (Recursiva)</h4>
                <pre><code>function DFS_Recursivo(grafo, vertice, visitados = new Set(), resultado = []) {
    visitados.add(vertice);
    resultado.push(vertice);
    
    for (const adyacente of grafo[vertice] || []) {
        if (!visitados.has(adyacente)) {
            DFS_Recursivo(grafo, adyacente, visitados, resultado);
        }
    }
    
    return resultado;
}</code></pre>

                <h4>Implementación en JavaScript (Iterativa)</h4>
                <pre><code>function DFS_Iterativo(grafo, inicio) {
    const visitados = new Set();
    const pila = [];
    const resultado = [];
    
    pila.push(inicio);
    
    while (pila.length > 0) {
        const vertice = pila.pop();
        
        if (!visitados.has(vertice)) {
            visitados.add(vertice);
            resultado.push(vertice);
            
            // Agregar adyacentes a la pila (en orden inverso para mantener orden)
            const adyacentes = (grafo[vertice] || []).reverse();
            for (const adyacente of adyacentes) {
                if (!visitados.has(adyacente)) {
                    pila.push(adyacente);
                }
            }
        }
    }
    
    return resultado;
}</code></pre>

                <h4>Ejemplo de Ejecución</h4>
                <p>
                    Ejecutando DFS desde el nodo A en nuestro grafo de ejemplo:
                </p>
                <div class="info-box">
                    <strong>Orden de visita (DFS):</strong> A → B → C → D → E (dependiendo del orden de adyacentes)
                    <br><strong>Resultado:</strong> [A, B, C, D, E] (puede variar según el orden de exploración)
                </div>

                <h3>Comparación: BFS vs DFS</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Aspecto</th>
                            <th>BFS</th>
                            <th>DFS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Estructura de Datos</td>
                            <td>Cola</td>
                            <td>Pila o Recursión</td>
                        </tr>
                        <tr>
                            <td>Orden de Visita</td>
                            <td>Por niveles (amplitud)</td>
                            <td>Por profundidad</td>
                        </tr>
                        <tr>
                            <td>Complejidad Temporal</td>
                            <td>O(V + E)</td>
                            <td>O(V + E)</td>
                        </tr>
                        <tr>
                            <td>Complejidad Espacial</td>
                            <td>O(V)</td>
                            <td>O(V)</td>
                        </tr>
                        <tr>
                            <td>Camino Más Corto</td>
                            <td>✓ (sin pesos)</td>
                            <td>✗</td>
                        </tr>
                        <tr>
                            <td>Detección de Ciclos</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Componentes Conexas</td>
                            <td>✓</td>
                            <td>✓</td>
                        </tr>
                        <tr>
                            <td>Ordenamiento Topológico</td>
                            <td>✗</td>
                            <td>✓</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Visualización: BFS vs DFS</h3>
                <div class="canvas-container">
                    <canvas id="traversalCanvas" width="700" height="450"></canvas>
                    <p class="canvas-label">Comparación Visual: Orden de Visita BFS vs DFS</p>
                </div>

                <h3>Aplicaciones Prácticas</h3>

                <h4>BFS se usa para:</h4>
                <ul>
                    <li>Encontrar el camino más corto en grafos sin pesos</li>
                    <li>Búsqueda en anchura de redes</li>
                    <li>Niveles en un árbol</li>
                    <li>Análisis de componentes conexas</li>
                </ul>

                <h4>DFS se usa para:</h4>
                <ul>
                    <li>Detección de ciclos en un grafo</li>
                    <li>Ordenamiento topológico</li>
                    <li>Búsqueda de caminos en laberintos</li>
                    <li>Análisis de componentes fuertemente conexas</li>
                    <li>Backtracking en problemas combinatorios</li>
                </ul>

                <h3>Conclusión</h3>
                <p>
                    BFS y DFS son dos algoritmos fundamentales que forman la base de muchos algoritmos más complejos 
                    en teoría de grafos. Entender cómo funcionan, sus diferencias y cuándo usarlos es crucial para 
                    resolver problemas relacionados con grafos de manera eficiente. La elección entre BFS y DFS depende 
                    del problema específico que estés resolviendo.
                </p>
            </article>
        `
    }
};

// Función para cargar el contenido de un post
function loadPost(postId) {
    const post = posts[postId];
    const content = document.getElementById('content');
    
    if (post) {
        content.innerHTML = post.content;
        
        // Dibujar gráficos según el post
        setTimeout(() => {
            if (postId === 'post1') {
                drawGraphExample1();
            } else if (postId === 'post2') {
                drawComparisonGraphs();
            } else if (postId === 'post3') {
                drawTraversalComparison();
            }
        }, 100);
    }
}

// Función para cargar la página de inicio
function loadHome() {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <h2>Bienvenido al Blog Técnico de Grafos</h2>
        <p>Este blog está dedicado a explicar la estructura de datos <strong>Grafos</strong> de manera 
        clara y accesible, con ejemplos prácticos, visualizaciones y código en JavaScript.</p>
        
        <p>Explora los siguientes artículos para aprender más sobre grafos:</p>
        
        <div class="posts-grid">
            <div class="post-card" onclick="loadPost('post1')">
                <h3>📚 Introducción a los Grafos</h3>
                <p>Aprende los conceptos básicos: nodos, aristas y tipos de grafos.</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">Incluye: Definiciones, tipos de grafos, conceptos clave y ejemplos visuales.</p>
                <button class="btn" style="width: 100%; text-align: center;">Leer Artículo →</button>
            </div>
            
            <div class="post-card" onclick="loadPost('post2')">
                <h3>🔧 Representación de Grafos</h3>
                <p>Descubre cómo representar grafos en memoria de forma eficiente.</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">Incluye: Lista de adyacencia, matriz de adyacencia, comparativas.</p>
                <button class="btn" style="width: 100%; text-align: center;">Leer Artículo →</button>
            </div>
            
            <div class="post-card" onclick="loadPost('post3')">
                <h3>🚀 Algoritmos de Recorrido</h3>
                <p>Domina BFS y DFS, los algoritmos fundamentales de exploración.</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">Incluye: BFS, DFS, implementaciones, comparativas, aplicaciones.</p>
                <button class="btn" style="width: 100%; text-align: center;">Leer Artículo →</button>
            </div>
        </div>
        
        <hr style="margin: 2rem 0; border: none; border-top: 2px solid #ddd;">
        
        <h3>¿Por qué aprender sobre Grafos?</h3>
        <ul>
            <li><strong>Fundamentales en CS:</strong> Los grafos son una estructura de datos esencial en ciencia de la computación.</li>
            <li><strong>Aplicaciones Reales:</strong> Se usan en redes sociales, GPS, búsqueda web, recomendaciones, etc.</li>
            <li><strong>Algoritmos Poderosos:</strong> Muchos algoritmos importantes están basados en grafos.</li>
            <li><strong>Entrevistas Técnicas:</strong> Las preguntas sobre grafos son comunes en entrevistas de programación.</li>
        </ul>
    `;
}

// Función para cargar la página About
function loadAbout() {
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <h2>Acerca de Este Blog</h2>
        
        <h3>Propósito</h3>
        <p>
            Este blog técnico fue creado como parte de la asignatura de <strong>Estructura de Datos 2</strong> 
            con el objetivo de proporcionar una guía clara y completa sobre la estructura de datos Grafos.
        </p>
        
        <h3>Contenido Disponible</h3>
        <ul>
            <li><strong>Post 1:</strong> Introducción a los Grafos - Conceptos fundamentales</li>
            <li><strong>Post 2:</strong> Representación de Grafos - Formas eficientes de almacenar grafos</li>
            <li><strong>Post 3:</strong> Algoritmos de Recorrido - BFS y DFS explicados</li>
        </ul>
        
        <h3>Tecnologías Utilizadas</h3>
        <ul>
            <li><strong>HTML5:</strong> Estructura del contenido</li>
            <li><strong>CSS3:</strong> Estilos y diseño responsivo</li>
            <li><strong>JavaScript:</strong> Interactividad y visualizaciones</li>
            <li><strong>Canvas API:</strong> Diagramas y gráficos de grafos</li>
            <li><strong>Git/GitHub:</strong> Control de versiones</li>
        </ul>
        
        <h3>Características</h3>
        <ul>
            <li>📱 Diseño responsivo para cualquier dispositivo</li>
            <li>🎨 Visualizaciones interactivas de grafos</li>
            <li>💻 Ejemplos de código en JavaScript</li>
            <li>📊 Comparativas y tablas de complejidad</li>
            <li>🚀 Navegación fluida entre artículos</li>
        </ul>
        
        <h3>Cómo Usar Este Blog</h3>
        <ol>
            <li>Comienza con el artículo de <strong>Introducción</strong> para entender los conceptos básicos.</li>
            <li>Continúa con <strong>Representación</strong> para aprender cómo almacenar grafos eficientemente.</li>
            <li>Finaliza con <strong>Algoritmos</strong> para dominar BFS y DFS.</li>
            <li>Experimenta con los ejemplos de código modificándolos según tus necesidades.</li>
        </ol>
        
        <div class="success-box">
            <strong>💡 Consejo:</strong> Para aprovechar al máximo este blog, trata de entender no solo 
            el código sino también el razonamiento detrás de cada concepto.
        </div>
        
        <h3>Recursos Adicionales</h3>
        <p>
            Algunos recursos externos que pueden ayudarte a profundizar en grafos:
        </p>
        <ul>
            <li>Visualizadores de grafos en línea</li>
            <li>Plataformas de práctica de algoritmos (LeetCode, HackerRank)</li>
            <li>Libros de estructura de datos y algoritmos</li>
            <li>Cursos online sobre teoría de grafos</li>
        </ul>
        
        <hr style="margin: 2rem 0; border: none; border-top: 2px solid #ddd;">
        
        <p><strong>Versión:</strong> 1.0</p>
        <p><strong>Última actualización:</strong> Noviembre 2025</p>
        <p><strong>Asignatura:</strong> Estructura de Datos 2</p>
    `;
}

// ===== FUNCIONES DE DIBUJO CON CANVAS =====

// Función para dibujar un nodo
function drawNode(ctx, x, y, radius, label, color = '#667eea') {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y);
}

// Función para dibujar una arista
function drawEdge(ctx, x1, y1, x2, y2, color = '#999', weight = '') {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    if (weight) {
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        ctx.fillStyle = '#fff';
        ctx.fillRect(midX - 15, midY - 10, 30, 20);
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 1;
        ctx.strokeRect(midX - 15, midY - 10, 30, 20);
        ctx.fillStyle = '#667eea';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(weight, midX, midY);
    }
}

// Ejemplo 1: Grafo No Dirigido
function drawGraphExample1() {
    const canvas = document.getElementById('graphCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Posiciones de los nodos
    const nodes = {
        A: { x: 300, y: 100 },
        B: { x: 150, y: 200 },
        C: { x: 300, y: 250 },
        D: { x: 450, y: 200 },
        E: { x: 300, y: 350 }
    };
    
    // Aristas
    const edges = [
        ['A', 'B'], ['A', 'C'], ['B', 'C'], 
        ['B', 'D'], ['C', 'D'], ['C', 'E'], ['D', 'E']
    ];
    
    // Dibujar aristas
    for (const [from, to] of edges) {
        const n1 = nodes[from];
        const n2 = nodes[to];
        drawEdge(ctx, n1.x, n1.y, n2.x, n2.y, '#ccc');
    }
    
    // Dibujar nodos
    for (const [label, pos] of Object.entries(nodes)) {
        drawNode(ctx, pos.x, pos.y, 25, label);
    }
    
    // Leyenda
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Este grafo tiene 5 nodos y 7 aristas', 20, 30);
}

// Comparación: Lista vs Matriz
function drawComparisonGraphs() {
    const canvas = document.getElementById('comparisonCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Sección izquierda: Lista de Adyacencia
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Lista de Adyacencia', 175, 30);
    
    const listaY = 70;
    ctx.fillStyle = '#333';
    ctx.font = '12px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('A → [B, C]', 50, listaY);
    ctx.fillText('B → [A, C, D]', 50, listaY + 25);
    ctx.fillText('C → [A, B, D, E]', 50, listaY + 50);
    ctx.fillText('D → [B, C, E]', 50, listaY + 75);
    ctx.fillText('E → [C, D]', 50, listaY + 100);
    
    // Características Lista
    ctx.fillStyle = '#28a745';
    ctx.font = '11px Arial';
    ctx.fillText('✓ Espacio: O(V+E)', 50, listaY + 150);
    ctx.fillText('✓ Grafos dispersos', 50, listaY + 170);
    
    // Sección derecha: Matriz de Adyacencia
    ctx.fillStyle = '#764ba2';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Matriz de Adyacencia', 550, 30);
    
    // Matriz
    const matrixX = 450;
    const matrixY = 70;
    const cellSize = 35;
    
    const headers = ['', 'A', 'B', 'C', 'D', 'E'];
    const matrix = [
        ['A', 0, 1, 1, 0, 0],
        ['B', 1, 0, 1, 1, 0],
        ['C', 1, 1, 0, 1, 1],
        ['D', 0, 1, 1, 0, 1],
        ['E', 0, 0, 1, 1, 0]
    ];
    
    // Dibujar matriz
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Headers
    for (let i = 0; i < headers.length; i++) {
        ctx.fillStyle = '#667eea';
        ctx.fillRect(matrixX + i * cellSize, matrixY, cellSize, cellSize);
        ctx.fillStyle = '#fff';
        ctx.fillText(headers[i], matrixX + i * cellSize + cellSize/2, matrixY + cellSize/2);
    }
    
    // Filas
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const x = matrixX + j * cellSize;
            const y = matrixY + (i + 1) * cellSize;
            
            if (j === 0) {
                ctx.fillStyle = '#667eea';
                ctx.fillRect(x, y, cellSize, cellSize);
                ctx.fillStyle = '#fff';
            } else {
                ctx.fillStyle = matrix[i][j] === 1 ? '#d4edda' : '#f5f5f5';
                ctx.fillRect(x, y, cellSize, cellSize);
                ctx.fillStyle = matrix[i][j] === 1 ? '#28a745' : '#999';
            }
            
            ctx.font = 'bold 11px Arial';
            ctx.fillText(matrix[i][j], x + cellSize/2, y + cellSize/2);
            
            ctx.strokeStyle = '#ddd';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellSize, cellSize);
        }
    }
    
    // Características Matriz
    ctx.fillStyle = '#28a745';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('✓ Búsqueda: O(1)', 450, 310);
    ctx.fillText('✓ Grafos densos', 450, 330);
    
    ctx.fillStyle = '#dc3545';
    ctx.fillText('✗ Espacio: O(V²)', 450, 350);
}

// Comparación BFS vs DFS
function drawTraversalComparison() {
    const canvas = document.getElementById('traversalCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Posiciones de nodos para BFS
    const nodesBFS = {
        A: { x: 150, y: 80 },
        B: { x: 80, y: 150 },
        C: { x: 150, y: 150 },
        D: { x: 220, y: 150 },
        E: { x: 150, y: 220 }
    };
    
    // Posiciones de nodos para DFS (igual configuración)
    const nodesDFS = {
        A: { x: 500, y: 80 },
        B: { x: 430, y: 150 },
        C: { x: 500, y: 150 },
        D: { x: 570, y: 150 },
        E: { x: 500, y: 220 }
    };
    
    const edges = [
        ['A', 'B'], ['A', 'C'], ['B', 'C'], 
        ['B', 'D'], ['C', 'D'], ['C', 'E'], ['D', 'E']
    ];
    
    // ===== BFS (Izquierda) =====
    ctx.fillStyle = '#667eea';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('BFS (Breadth-First)', 150, 30);
    
    // Dibujar aristas BFS
    for (const [from, to] of edges) {
        const n1 = nodesBFS[from];
        const n2 = nodesBFS[to];
        drawEdge(ctx, n1.x, n1.y, n2.x, n2.y, '#ccc');
    }
    
    // Dibujar nodos BFS con orden
    const bfsOrder = { A: 1, B: 2, C: 3, D: 4, E: 5 };
    for (const [label, pos] of Object.entries(nodesBFS)) {
        const order = bfsOrder[label];
        drawNode(ctx, pos.x, pos.y, 25, label);
        ctx.fillStyle = '#667eea';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`(${order})`, pos.x, pos.y + 35);
    }
    
    // Explicación BFS
    ctx.fillStyle = '#333';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Nivel 0: A', 50, 280);
    ctx.fillText('Nivel 1: B, C', 50, 295);
    ctx.fillText('Nivel 2: D', 50, 310);
    ctx.fillText('Nivel 3: E', 50, 325);
    
    // ===== DFS (Derecha) =====
    ctx.fillStyle = '#764ba2';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DFS (Depth-First)', 500, 30);
    
    // Dibujar aristas DFS
    for (const [from, to] of edges) {
        const n1 = nodesDFS[from];
        const n2 = nodesDFS[to];
        drawEdge(ctx, n1.x, n1.y, n2.x, n2.y, '#ccc');
    }
    
    // Dibujar nodos DFS con orden
    const dfsOrder = { A: 1, B: 2, C: 4, D: 5, E: 6 };
    for (const [label, pos] of Object.entries(nodesDFS)) {
        const order = dfsOrder[label];
        drawNode(ctx, pos.x, pos.y, 25, label, '#764ba2');
        ctx.fillStyle = '#764ba2';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`(${order})`, pos.x, pos.y + 35);
    }
    
    // Explicación DFS
    ctx.fillStyle = '#333';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Ruta: A → B → D → C → E', 400, 280);
    ctx.fillText('Profundo primero', 400, 295);
    ctx.fillText('Usa: Pila (Stack)', 400, 310);
    
    // Comparativa general
    ctx.fillStyle = '#666';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('BFS: Explora por niveles | DFS: Explora por profundidad', 350, 430);
}

// Cargar la página de inicio cuando el documento esté listo
document.addEventListener('DOMContentLoaded', function() {
    loadHome();
});
