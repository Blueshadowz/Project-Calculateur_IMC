const inputHeight = document.getElementById("inputHeight");
const inputWeight = document.getElementById("inputWeight");
const result = document.getElementById("result");
const btnSubmit = document.getElementById("btnSubmit");

let height = inputHeight.addEventListener("input", (e) => {
  height = e.target.value;
});

let weight = inputWeight.addEventListener("input", (e) => {
  weight = e.target.value;
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const imcCalcul = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
  switch (true) {
    case imcCalcul < 18.5:
      result.innerHTML = ` ${imcCalcul} = Poids insuffisant`;
      result.style.color = "#A6A6FF";
      break;
    case imcCalcul >= 18.5 && imcCalcul < 25:
      result.innerHTML = ` ${imcCalcul} = Poids normal`;
      result.style.color = "#A6FFA6";
      break;
    case imcCalcul >= 25 && imcCalcul < 30:
      result.innerHTML = ` ${imcCalcul} = Excès pondéral, surpoids`;
      result.style.color = "#FFFFA6";
      break;
    case imcCalcul >= 30 && imcCalcul < 40:
      result.innerHTML = ` ${imcCalcul} = Obésité`;
      result.style.color = "#FFC9A6";
      break;
    case imcCalcul > 40:
      result.innerHTML = ` ${imcCalcul} = Obésité morbide`;
      result.style.color = "#FFA6FF";
      break;
    default:
      break;
  }
});
