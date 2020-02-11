const expect = chai.expect;
const assert = chai.assert;

describe("Probando Restaurante", () => {
  const taoUp = new Restaurant(
    1,
    "TAO Uptown",
    "Asiática",
    "Nueva York",
    ["13:00", "15:30", "18:00"],
    "../img/asiatica1.jpg",
    [6, 7, 9, 10, 5]
  );

  it("eliminar un horario del array", () => {
    taoUp.reservarHorario("13:00");

    assert.notInclude(taoUp.horarios, "13:00");
  });
  it("obtener promedio del arreglo", () => {
    console.log(taoUp.obtenerPuntuacion());
  });
  it("agregar calificacion que falle", () => {
    taoUp.calificar(10);
    expect(taoUp.calificaciones[taoUp.calificaciones.length - 1]).to.equal(10);
  });
});

describe("Probando Listado", () => {
  const listadoDeRestaurantes = [
    new Restaurant(
      1,
      "TAO Uptown",
      "Asiática",
      "Nueva York",
      ["13:00", "15:30", "18:00"],
      "../img/asiatica1.jpg",
      [6, 7, 9, 10, 5]
    ),
    new Restaurant(
      2,
      "Mandarín Kitchen",
      "Asiática",
      "Londres",
      ["15:00", "14:30", "12:30"],
      "../img/asiatica2.jpg",
      [7, 7, 3, 9, 7]
    ),
    new Restaurant(
      3,
      "Burgermeister",
      "Hamburguesa",
      "Berlín",
      ["11:30", "13:00", "22:30"],
      "../img/hamburguesa4.jpg",
      [5, 8, 4, 9, 9]
    )
  ];

  const listado = new Listado(listadoDeRestaurantes);

  it("buscar restaurante por id inexistente", () => {
    console.log(listado.buscarRestaurante(4));
  });
  it("obtener restaurates sin pasarle nada", () => {
    expect(listado.obtenerRestaurantes()).to.have.lengthOf(3);
  });
});

describe("Probando Reservas", () => {
  const reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");

  const reserva2 = new Reserva(
    new Date(2018, 7, 27, 14, 100),
    2,
    150,
    "DES200"
  );

  it("Descontar y que el precio final sea 2450", () => {
    expect(reserva1.calcularPrecioTotal()).to.equal(2450);
  });
  it("Descontar y que el precio final sea 100", () => {
    expect(reserva2.calcularPrecioTotal()).to.equal(100);
  });
});

/*
React router
Redux
Unit Testing (Jest, enzyme, entre otros)
Axios
Redux forms
React Hooks
React Developer Tools
Indent-rainbow
*/
