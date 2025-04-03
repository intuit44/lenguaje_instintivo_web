
const bancoWikipedia = {
  "guía": ["acompaña", "dirige", "orienta"],
  "vibra": ["emite", "siente", "resuena"],
  "verdad": ["certeza", "realidad", "esencia"],
  "silencio": ["pausa", "calma", "serenidad"]
};

function generarMensajeAlineadoWikipedia(palabrasClave) {
  let mensaje = "";
  let espacios = 0;
  for (const palabra of palabrasClave) {
    const opciones = bancoWikipedia[palabra] || ["..."];
    const relleno = opciones[Math.floor(Math.random() * opciones.length)];
    mensaje += relleno + " ".repeat(espacios) + palabra + " ";
    espacios += palabra.length;
  }
  return mensaje.trim();
}

function generarDesdeWikipediaAlineado() {
  console.log("Función generarDesdeWikipediaAlineado llamada");

  const input = document.getElementById("mensajeOculto").value.trim().split(/\s+/);
  console.log("Input capturado:", input);

  const resultado = generarMensajeAlineadoWikipedia(input);
  console.log("Resultado generado:", resultado);

  let resultadoFinal = resultado.charAt(0).toUpperCase() + resultado.slice(1);
  if (!resultadoFinal.trim().endsWith(".")) {
    resultadoFinal += ".";
  }

  document.getElementById("mensajeVisible").value = resultadoFinal;
  document.getElementById("resultado").textContent = resultadoFinal;
}
