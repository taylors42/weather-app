let button = document.querySelector(".cep-button");

const respo = document.querySelector(".formresponse-text");
let clean = document.querySelector(".clean");

button.addEventListener("click", async () => {
  respo.value = "";
  const text = document.querySelector(".textarea").value;
  try {
    const dados = await fetch(`https://viacep.com.br/ws/${text}/json`);
    const json = await dados.json();
    respo.style.display = "block";
    respo.value = `
CEP: ${json.cep}
BAIRRO:${json.bairro}
RUA: ${json.logradouro}
  `.trim();
  } catch (error) {
    alert("Erro ao buscar o CEP");
  } finally {
    const dados = await fetch(`https://viacep.com.br/ws/${text}/json`);
    const json = await dados.json();
    respo.style.display = "block";
    respo.value = `
CEP: ${json.cep}
BAIRRO:${json.bairro}
RUA: ${json.logradouro}
  `.trim();

    clean.style.display = "block";
  }
});
clean.addEventListener("click", () => {
  respo.style.display = "none";
  clean.style.display = "none";
});
