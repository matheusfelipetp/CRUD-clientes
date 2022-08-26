import { Api } from "./modules/Api.js";
import { RenderOptions } from "./modules/RenderOptions.js";

const clients = await Api.listarClientes();
const select = document.querySelector("select");
RenderOptions.listOptions(clients, select);

const nomeUser = document.getElementById("nome-editar");
const emailUser = document.getElementById("email-editar");
const idadeUser = document.getElementById("idade-editar");
const cpfUser = document.getElementById("cpf-editar");
const sexoUser = document.getElementById("sexo-editar");
const cepUser = document.getElementById("cep-editar");
const ruaUser = document.getElementById("rua-editar");
const numeroUser = document.getElementById("numero-editar");
const bairroUser = document.getElementById("bairro-editar");
const cidadeUser = document.getElementById("cidade-editar");
const estadoUser = document.getElementById("estado-editar");

const btnBuscar = document.getElementById("btn-buscar");
btnBuscar.addEventListener("click", buscarCliente);

function buscarCliente(event) {
  event.preventDefault();
  let idUser;

  clients.find((elem) => {
    if (elem.nome === select.value) {
      idUser = elem.id;
      nomeUser.value = elem.nome;
      emailUser.value = elem.email;
      idadeUser.value = elem.idade;
      cpfUser.value = elem.cpf;
      sexoUser.value = elem.sexo;
      cepUser.value = elem.endereco.cep;
      ruaUser.value = elem.endereco.rua;
      numeroUser.value = elem.endereco.numero;
      bairroUser.value = elem.endereco.bairro;
      cidadeUser.value = elem.endereco.cidade;
      estadoUser.value = elem.endereco.estado;
    }
  });
  return idUser;
}

class EditPage {
  static updateClient() {
    const update = {
      endereco: {},
    };

    const input = document.querySelectorAll("input");
    input.forEach((elem) => {
      elem.addEventListener("change", async () => {
        update[elem.name] = elem.value;

        if (
          elem.name === "rua" ||
          elem.name === "cep" ||
          elem.name === "cidade" ||
          elem.name === "bairro" ||
          elem.name === "estado" ||
          elem.name === "numero"
        )
          update.endereco[elem.name] = elem.value;
      });
    });

    const btnAtualizar = document.getElementById("btn-atualizar");
    btnAtualizar.addEventListener("click", async (event) => {
      event.preventDefault();
      const id = buscarCliente(event);
      await Api.editarCliente(id, update);
    });
  }
}

EditPage.updateClient();
