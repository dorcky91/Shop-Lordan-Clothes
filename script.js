addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "img/Slider/1.jpg",
    "img/Slider/2.jpg",
    "img/Slider/3.jpg",
    "img/Slider/4.jpg",
    "img/Slider/5.jpg",
    "img/Slider/6.jpg",
    "img/Slider/7.jpg",
    "img/Slider/8.jpg",
    "img/Slider/9.jpg",
    "img/Slider/10.jpg",
    "img/Slider/11.jpg",
    "img/Slider/12.jpg",
    "img/Slider/13.jpg",
    "img/Slider/14.jpg",
    "img/Slider/15.jpg",
    "img/Slider/16.jpg",
    "img/Slider/17.jpg",
    "img/Slider/18.jpg",
    "img/Slider/19.jpg",
    "img/Slider/20.jpg",
  ];

  let i = 1;
  const img1 = document.querySelector("#img1");
  const img2 = document.querySelector("#img2");
  const progressBar = document.querySelector("#progress-bar");
  const divIndicadores = document.querySelector("#indicadores");

  let porcentajeBase = 100 / imagenes.length;
  let porcentajeActual = porcentajeBase;

  for (let index = 0; index < imagenes.length; index++) {
    const div = document.createElement("div");
    div.classList.add("circles");
    div.id = index;
    divIndicadores.appendChild(div);
  }

  progressBar.style.width = porcentajeBase + "%";
  img1.src = imagenes[0];
  const circulos = document.querySelectorAll(".circles");
  circulos[0].classList.add("resaltado");

  const slideShow = () => {
    img2.src = imagenes[i];
    // const circuloActual = Array.from(circulos).find((el) => el.div == i);
    // Array.from(circulos).forEach((cir) => cir.classList.remove("resaltado"));
    // circuloActual.classList.add("resaltado");

    for (let index = 0; index < circulos.length; index++) {
      circulos[index].classList.remove("resaltado");
    }
    circulos[i].classList.add("resaltado");

    img2.classList.add("active");
    i++;
    porcentajeActual += porcentajeBase;
    progressBar.style.width = porcentajeActual + "%";
    if (i == imagenes.length) {
      i = 0;
      porcentajeActual = porcentajeBase - porcentajeBase;
    }

    setTimeout(() => {
      img1.src = img2.src;
      img2.classList.remove("active");
    }, 1000);
  };

  setInterval(slideShow, 5000);
});
