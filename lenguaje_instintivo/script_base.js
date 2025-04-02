export function codificar() {
  const mensajeOculto = document.getElementById("mensajeOculto").value.trim().split(/\s+/);
  let resultado = "";
  let espacioTotal = 0;
  mensajeOculto.forEach(palabra => {
    resultado += " ".repeat(espacioTotal) + palabra + "\n";
    espacioTotal += palabra.length;
  });
  document.getElementById("resultado").textContent = resultado;
}

export function decodificar() {
  alert("Función de decodificación aún no implementada.");
}

export function resetear() {
  document.getElementById("mensajeVisible").value = "";
  document.getElementById("mensajeOculto").value = "";
  document.getElementById("resultado").textContent = "";
}

export function codificarConPrecisionMilimetrica() {
  alert("Función de codificación con precisión milimétrica aún no implementada");
}


