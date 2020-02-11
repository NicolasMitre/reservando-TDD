var Restaurant = function(
  id,
  nombre,
  rubro,
  ubicacion,
  horarios,
  imagen,
  calificaciones
) {
  this.id = id;
  this.nombre = nombre;
  this.rubro = rubro;
  this.ubicacion = ubicacion;
  this.horarios = horarios;
  this.imagen = imagen;
  this.calificaciones = calificaciones;
};

Restaurant.prototype.reservarHorario = function(horarioReservado) {
  this.horarios = this.horarios.filter(horario => horario !== horarioReservado);
  return;
};

Restaurant.prototype.calificar = function(nuevaCalificacion) {
  if (
    Number.isInteger(nuevaCalificacion) &&
    nuevaCalificacion > 0 &&
    nuevaCalificacion <= 10
  ) {
    this.calificaciones.push(nuevaCalificacion);
  }
};

Restaurant.prototype.obtenerPuntuacion = function() {
  if (this.calificaciones.length === 0) {
    return 0;
  } else {
    //hacer suma
    const sumaObtenida = obtenerSuma(this.calificaciones);

    //hacer promedio
    const promedioObtenido = obtenerPromedio(
      sumaObtenida,
      this.calificaciones.length
    );

    return promedioObtenido;
  }
};

function obtenerSuma(calificaciones) {
  let suma = 0;
  calificaciones.forEach(calificacion => (suma += calificacion));

  return suma;
}
function obtenerPromedio(sumaObtenida, size) {
  const promedio = Math.round((sumaObtenida / size) * 10) / 10;

  return promedio;
}
