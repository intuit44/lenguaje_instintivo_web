export function codificarConPrecisionMilimetrica(mensajeOculto, lineasRellenoMin = 2, lineasRellenoMax = 4) {
    const letras = "abcdefghijklmnñopqrstuvwxyz";
    const palabrasClave = mensajeOculto.split(" ");
    let bloque = "";
    let columnaActual = 0;
  
    palabrasClave.forEach((palabraClave, index) => {
      // Generar líneas de relleno antes de insertar la palabra clave
      const lineasRelleno = Math.floor(Math.random() * (lineasRellenoMax - lineasRellenoMin + 1)) + lineasRellenoMin;
  
      for (let i = 0; i < lineasRelleno; i++) {
        let lineaRelleno = "";
        while (lineaRelleno.length < 80) { // Suponiendo que cada línea tiene un ancho de 80 caracteres
          const palabraFalsa = generarPalabraAleatoria(letras, 3, 8); // Palabras de 3 a 8 letras
          if (lineaRelleno.length + palabraFalsa.length + 1 > 80) break;
          lineaRelleno += palabraFalsa + " ";
        }
        bloque += lineaRelleno.trim() + "\n";
      }
  
      // Insertar la palabra clave alineada en la columna actual
      let lineaConPalabraClave = " ".repeat(columnaActual) + palabraClave;
      while (lineaConPalabraClave.length < 80) {
        const palabraFalsa = generarPalabraAleatoria(letras, 3, 8);
        if (lineaConPalabraClave.length + palabraFalsa.length + 1 > 80) break;
        lineaConPalabraClave += " " + palabraFalsa;
      }
      bloque += lineaConPalabraClave.trim() + "\n";
  
      // Actualizar la columna actual al final de la palabra clave
      columnaActual += palabraClave.length;
    });
  
    return bloque;
  }
  
  function generarPalabraAleatoria(letras, min, max) {
    const largo = Math.floor(Math.random() * (max - min + 1)) + min;
    let palabra = "";
    for (let i = 0; i < largo; i++) {
      palabra += letras[Math.floor(Math.random() * letras.length)];
    }
    return palabra;
  }
  
  export function codificarConPrecisionMilimetricaEnTextarea(textareaEntradaId, textareaSalidaId) {
    const textareaEntrada = document.getElementById(textareaEntradaId);
    const textareaSalida = document.getElementById(textareaSalidaId);
  
    if (!textareaEntrada || !textareaSalida) {
      console.error("No se encontraron los textareas con los IDs proporcionados.");
      return;
    }
  
    const mensajeOculto = textareaEntrada.value.trim();
    if (!mensajeOculto) {
      console.error("El mensaje oculto está vacío.");
      return;
    }
  
    const mensajeVisible = codificarConPrecisionMilimetrica(mensajeOculto);
    textareaSalida.value = mensajeVisible;
  }
  