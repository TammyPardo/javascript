//Calculador de costo de un libro dependiendo del valor del IVA



function calcularPrecioConIVA(precioSinIVA, porcentajeIVA) {
    var precioConIVA = precioSinIVA + (precioSinIVA * (porcentajeIVA / 100));
    return precioConIVA;
  }
  
  var preciosSinIVA = [];
  var porcentajesIVA = [];
  var preciosConIVA = [];
  
  var continuar = true;
  
  while (continuar) {
    var precioSinIVA = parseFloat(prompt("Ingresa el precio del libro sin IVA:"));
    var porcentajeIVA = parseFloat(prompt("Ingresa el porcentaje de IVA:"));
  
    preciosSinIVA.push(precioSinIVA);
    porcentajesIVA.push(porcentajeIVA);
  
    var precioConIVA = calcularPrecioConIVA(precioSinIVA, porcentajeIVA);
    preciosConIVA.push(precioConIVA);
  
    var respuesta = prompt("¿Deseas ingresar otro precio? (s/n)");
    if (respuesta === "n") {
      continuar = false;
    }
  }
  
  //console.log("Precios sin IVA: " + preciosSinIVA);
  //console.log("Porcentajes de IVA: " + porcentajesIVA);
  //console.log("Precios con IVA: " + preciosConIVA);

  alert("Precios sin IVA: " + preciosSinIVA);
  alert("Porcentajes de IVA: " + porcentajesIVA);
  alert("Precios con IVA: " + preciosConIVA);
