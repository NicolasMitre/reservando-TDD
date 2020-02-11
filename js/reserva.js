const Reserva = function(horario, cantidad, precio, codigo_de_descuento) {
  this.horario = horario;
  this.cantidad = cantidad;
  this.precio = precio;
  this.codigo_de_descuento = codigo_de_descuento;
};

Reserva.prototype.calcularPrecioBase = function() {
  return this.cantidad * this.precio;
};

Reserva.prototype.calcularPrecioTotal = function() {
  // traer precioBase

  const precioBase = this.calcularPrecioBase();
  const adicional = this.calcularAdicionales(precioBase);
  const descuento = this.calcularDescuentos(precioBase);

  return precioBase + adicional - descuento;
};

Reserva.prototype.calcularAdicionales = function(precioBase) {
  adicional = precioBase;

  if (
    this.horario.getDay() === 5 ||
    this.horario.getDay() === 6 ||
    this.horario.getDay() === 0
  ) {
    adicional += precioBase * 0.1;
  }
  if (
    (this.horario.getHours() >= 13 && this.horario.getHours() <= 14) ||
    (this.horario.getHours() >= 20 && this.horario.getHours() <= 21)
  ) {
    adicional += precioBase * 0.15;
  }

  return adicional;
};

Reserva.prototype.calcularDescuentos = function(precioBase) {
  descuento = precioBase;

  if (this.cantidad >= 4 && this.cantidad <= 6) {
    descuento += precioBase * 0.05;
  } else if (this.cantidad >= 7 && this.cantidad <= 8) {
    descuento += precioBase * 0.1;
  } else if (this.cantidad > 8) {
    descuento += precioBase * 0.15;
  }
  switch (this.codigo_de_descuento) {
    case "DES15":
      descuento += precioBase * 0.15;
      break;
    case "DES200":
      descuento += 200;
      break;
    case "DES1":
      descuento += this.precio;
      break;
  }

  return descuento;
};
