
// Diccionario simple para pruebas (puede ampliarse)
const palabrasRelleno = [
  "luz", "paz", "voz", "en", "es", "del", "con", "hacia", "todo", "nace", "alma", "ritmo"
];

// Calcula el mensaje visible con alineación exacta
function motorSimbolicoAvanzado() {
  const oculto = document.getElementById("mensajeOculto").value.trim().split(/\s+/);
  if (!oculto.length) return alert("Escribe un mensaje oculto válido.");

  let visible = "";
  let offset = 0;

  for (let i = 0; i < oculto.length; i++) {
    const palabra = oculto[i];
    const espacioObjetivo = offset;
    let relleno = generarRellenoParaLongitud(espacioObjetivo);
    if (relleno.length !== espacioObjetivo) {
      relleno = relleno.padEnd(espacioObjetivo, " ");
    }
    visible += relleno + palabra + " ";
    offset += palabra.length;
  }

  const resultado = visible.trim();
  document.getElementById("mensajeVisible").value = resultado;
  document.getElementById("resultado").textContent = resultado;
  console.log("✅ Motor simbólico avanzado ejecutado:", resultado);
}

// Genera una cadena de palabras cuyo largo total se acerque al objetivo
function generarRellenoParaLongitud(target) {
  let resultado = "";
  let total = 0;

  while (total < target) {
    const palabra = palabrasRelleno[Math.floor(Math.random() * palabrasRelleno.length)];
    if (total + palabra.length + 1 > target) break;
    resultado += palabra + " ";
    total += palabra.length + 1;
  }

  return resultado.trim();
}
