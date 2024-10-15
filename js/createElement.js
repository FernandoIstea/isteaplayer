/* HTML
    <div class="contenido">
        <audio controls src="https://ferpro.online/es/mp3/musica/the-ramones-baby-i-love-you.mp3"></audio>
        <video controls width="100%" src="http://media.w3.org/2010/05/sintel/trailer.mp4"></video>

    </div>
*/

// JAVASCRIPT
// EJEMPLO DE CREATEELEMENT - REMOVEELEMENT
const divContenido = document.querySelector("div.contenido")
// const listaDeNodos = []

// divContenido.innerHTML = `<p id="idParagraph" class="color-blanco">Esto es un texto</p>` // backtick
// const paragraph = document.querySelector("p#idParagraph")
// paragraph.addEventListener("click", ()=> alert("Hola mundo!"))

// paragraph = HTMLParagraphElement
// const paragraph1 = document.createElement("p")
// paragraph1.id = "idParagraph1"
// paragraph1.className = "color-blanco"
// paragraph1.textContent = "Esto es un texto"

// addEventListener(evento(sin ON), callback o función a ejecutar) (2.015) 
// paragraph1.addEventListener("click", ()=> alert("Hola mundo!"))

// EVENTOS ON (1.999 cuando JS incluyó la funcionalidad de manejo de DOM)
// paragraph1.onclick = ()=> {
//     alert("Hola mundo!")
// }

//no hay forma de eliminar eventos ON

// paragraph1.addEventListener("dblclick", ()=> {
//     console.log("Hiciste doble click.")
// })
// listaDeNodos.push(paragraph1)

// const paragraph2 = document.createElement("p")
// paragraph2.id = "idParagraph2"
// paragraph2.className = "color-rojo"
// paragraph2.textContent = "Esto es otro texto"
// paragraph2.addEventListener("click", ()=> alert("Otro hola mundo!"))
// listaDeNodos.push(paragraph2)

// Agregar el elemento al documento HTML
// appendChild() agrega un nodo (elemento HTML) dentro de algún elemento HTML existente/contenedor
// divContenido.appendChild(paragraph1)
// divContenido.appendChild(paragraph2)

// append() agrega un conjunto de nodos.
// divContenido.append(paragraph1, paragraph2)
// divContenido.append(...listaDeNodos) // ... = Spread Operator ()
