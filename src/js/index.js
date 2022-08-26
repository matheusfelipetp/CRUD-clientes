import { Api } from "./modules/Api.js";

class ClientsPage {
  static async renderClients() {
    const container = document.querySelector(".container");
    const clients = await Api.listarClientes();

    clients.forEach((elem) => {
      const card = this.createCard(elem);
      container.appendChild(card);
    });
  }

  static createCard(client) {
    const card = document.createElement("li");
    const nome = document.createElement("h2");
    const divDados = document.createElement("div");
    const tituloDados = document.createElement("h3");
    const email = document.createElement("p");
    const idade = document.createElement("p");
    const cpf = document.createElement("p");
    const sexo = document.createElement("p");
    const divEndereco = document.createElement("div");
    const tituloEndereco = document.createElement("h3");
    const cep = document.createElement("p");
    const estado = document.createElement("p");
    const cidade = document.createElement("p");
    const bairro = document.createElement("p");
    const rua = document.createElement("p");
    const numero = document.createElement("p");

    card.classList.add("card");
    nome.innerText = client.nome;
    tituloDados.innerText = "Dados Pessoais";
    email.innerText = `Email: ${client.email}`;
    idade.innerText = `Idade: ${client.idade}`;
    cpf.innerText = `CPF: ${client.cpf}`;
    sexo.innerText = `Sexo: ${client.sexo}`;
    tituloEndereco.innerText = "Endereço";
    cep.innerText = `CEP: ${client.endereco.cep}`;
    estado.innerText = `Estado: ${client.endereco.estado}`;
    cidade.innerText = `Cidade: ${client.endereco.cidade}`;
    bairro.innerText = `Bairro: ${client.endereco.bairro}`;
    rua.innerText = `Rua: ${client.endereco.rua}`;
    numero.innerText = `Número: ${client.endereco.numero}`;

    divDados.append(tituloDados, email, idade, cpf, sexo);
    divEndereco.append(
      tituloEndereco,
      cep,
      estado,
      cidade,
      bairro,
      rua,
      numero
    );
    card.append(nome, divDados, divEndereco);

    return card;
  }
}

ClientsPage.renderClients();
