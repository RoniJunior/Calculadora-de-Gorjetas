function calculateTip(event) {
  event.preventDefault();

  // Captura dos valores de entrada
  let bill = document.getElementById('bill').value;
  let serviceQual = document.getElementById('serviceQual').value;
  let people = document.getElementById('people').value;

  // Validação dos campos obrigatórios
  if (bill === "" || serviceQual == 0) {
    alert("Por favor, preencha os valores");
    return;
  }

  // Verifica o número de pessoas
  if (people.trim() === "" || people <= 1) {
    people = 1;
    document.getElementById('each').style.display = "none";
  } else {
    document.getElementById('each').style.display = "block";
  }

  // Cálculo da gorjeta por pessoa
  let total = (bill * serviceQual) / people;
  total = total.toFixed(2);

  // Exibe o resultado
  document.getElementById('tip').innerHTML = total;
  document.getElementById('totalTip').style.display = "block";
}

// Configuração inicial para esconder os elementos de resultado
document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

// Adiciona o evento ao formulário
document.getElementById('tipsform').addEventListener('submit', calculateTip);


