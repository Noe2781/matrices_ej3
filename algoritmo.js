const divTablero = document.querySelector("#tablero");

const MAX_FILA = 9;
const MAX_COL = 9;

for (let fila = 0; fila < MAX_FILA; fila++) {
   /*  matriz.push([]) */
   divTablero.innerHTML += `
   <div class="row">
   ${agregarColumnas()}

   </div>
   `
}
  
 function agregarColumnas() {
        let columnas = "";
        for (let columna = 0; columna <MAX_COL; columna++) {
            columnas += `
            <div class="col casilla"> </div>
            `;
    }
    return columnas;
    
}




/* document.addEventListener("DOMContentLoaded", function () {
    const tablero = document.querySelector(".tablero");

    // Crear las casillas del tablero
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const casilla = document.createElement("div");
            casilla.classList.add("casilla");
            // Puedes cambiar el color de cada casilla aquí
            casilla.style.backgroundColor = getRandomColor(); // Color aleatorio
            tablero.appendChild(casilla);
        }
    }

    // Función para obtener un color aleatorio
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}); */
