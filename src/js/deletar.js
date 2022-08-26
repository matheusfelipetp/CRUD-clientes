import { Api } from "./modules/Api.js";
import { RenderOptions } from "./modules/RenderOptions.js";

class DeletePage {
  static async deleteClient() {
    const clients = await Api.listarClientes();
    const select = document.querySelector("select");
    RenderOptions.listOptions(clients, select);

    const btnDeletar = document.getElementById("btn-deletar");
    btnDeletar.addEventListener("click", (event) => {
      event.preventDefault();
      let userId;

      clients.forEach((elem) => {
        if (elem.nome === select.value) {
          userId = elem.id;
        }
      });
      Api.deletarCliente(userId);
    });
  }
}

DeletePage.deleteClient();
