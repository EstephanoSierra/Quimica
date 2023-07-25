function obtenerDatos(id, jsonData) {
  const elemento = jsonData[id];

  if (elemento) {
    const name = document.getElementById("nombre");
    name.textContent = `${elemento.nombre}`;

    const numero_atomico = document.getElementById("numero_atomico");
    numero_atomico.textContent = `Numero Atomico: ${elemento.numero_atomico}`;

    const simbolo = document.getElementById("simbolo");
    simbolo.textContent = `Simbolo: ${elemento.simbolo}`;

    const estado = document.getElementById("estado");
    estado.textContent = `Estado: ${elemento.estado}`;

    const masa_atomica = document.getElementById("masa_atomica");
    masa_atomica.textContent = `Masa Atomica: ${elemento.masa_atomica}`;

    const valencia = document.getElementById("valencia");
    valencia.textContent = `Valencia: ${elemento.valencia}`;

    const categoria = document.getElementById("categoria");
    categoria.textContent = `Categoria: ${elemento.categoria}`;
  } 
}

const lis = document.querySelectorAll("li");
lis.forEach(li => {
  li.addEventListener("click", () => {
    fetch("elements.json")
      .then(response => response.json())
      .then(jsonData => {
        obtenerDatos(li.id, jsonData);
      })
      .catch(error => {
        console.error("Error al cargar el JSON:", error);
      });
  });
});
