//Calculador de costo de un libro dependiendo del valor del IVA

function calcularPrecioConIVA(precioSinIVA, porcentajeIVA) {
    let precioConIVA = precioSinIVA + (precioSinIVA * (porcentajeIVA / 100));
    return precioConIVA;
  }
  
  let preciosSinIVA = [];
  let porcentajesIVA = [];
  let preciosConIVA = [];
  
  let continuar = true;
  
  while (continuar) {
    let precioSinIVA = parseFloat(prompt("Ingresa el precio del libro sin IVA:"));
    let porcentajeIVA = parseFloat(prompt("Ingresa el porcentaje de IVA:"));
  
    preciosSinIVA.push(precioSinIVA);
    porcentajesIVA.push(porcentajeIVA);
  
    let precioConIVA = calcularPrecioConIVA(precioSinIVA, porcentajeIVA);
    preciosConIVA.push(precioConIVA);
  
    let respuesta = prompt("¿Deseas ingresar otro precio? (si/no)");
    if (respuesta === "no") {
      continuar = false;
    }
  }
  
  //console.log("Precios sin IVA: " + preciosSinIVA);
  //console.log("Porcentajes de IVA: " + porcentajesIVA);
  //console.log("Precios con IVA: " + preciosConIVA);

  // alert("Precios sin IVA: " + preciosSinIVA);
  // alert("Porcentajes de IVA: " + porcentajesIVA);
  alert("Precios con IVA: " + preciosConIVA);
