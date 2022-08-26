import { Api } from "./modules/Api.js";
import { Cliente } from "./modules/Cliente.js";

class CreateClientPage {
  static getData() {
    const nomeUser = document.getElementById("nome").value;
    const emailUser = document.getElementById("email").value;
    const idadeUser = document.getElementById("idade").value;
    const cpfUser = document.getElementById("cpf").value;
    const sexoUser = document.getElementById("sexo").value;
    const cepUser = document.getElementById("cep").value;
    const ruaUser = document.getElementById("rua").value;
    const numeroUser = document.getElementById("numero").value;
    const bairroUser = document.getElementById("bairro").value;
    const cidadeUser = document.getElementById("cidade").value;
    const estadoUser = document.getElementById("estado").value;

    const endereco = {
      estado: estadoUser,
      cidade: cidadeUser,
      bairro: bairroUser,
      numero: numeroUser,
      rua: ruaUser,
      cep: cepUser,
    };

    const dataClient = new Cliente(
      nomeUser,
      emailUser,
      idadeUser,
      cpfUser,
      sexoUser,
      endereco
    );

    return dataClient;
  }

  static createClient() {
    const btnCadastrar = document.getElementById("btn-cadastrar");
    btnCadastrar.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = this.getData();
      Api.cadastrarCliente(data);
    });
  }
}

CreateClientPage.createClient();
