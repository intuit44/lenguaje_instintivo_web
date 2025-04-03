function motorSimbolicoAlineado() {
  const oculto = document.getElementById("mensajeOculto").value.trim().split(/\s+/);
  if (!oculto || oculto.length === 0) {
    alert("Por favor, escribe un mensaje oculto.");
    return;
  }

  let visible = "";
  let espacio = 0;

  for (let palabra of oculto) {
    const relleno = generarRellenoExacto(palabra.length);
    visible += relleno + " ".repeat(espacio) + palabra + " ";
    espacio += palabra.length;
  }

  const resultado = visible.trim();
  document.getElementById("mensajeVisible").value = resultado;
  document.getElementById("resultado").textContent = resultado;
  console.log("🧠 Motor simbólico alineado ejecutado:", resultado);
}

function generarRellenoExacto(longitud) {
  const letras = "abcdefghijklmnopqrstuvwxyz";
  let resultado = "";
  for (let i = 0; i < longitud; i++) {
    resultado += letras[Math.floor(Math.random() * letras.length)];
  }
  return resultado;
}
