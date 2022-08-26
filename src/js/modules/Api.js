export class Api {
  static baseUrl = `https://atividade-api-clientes.herokuapp.com/clientes`;
  static headers = {
    "Content-Type": "application/json",
  };

  static async listarClientes() {
    const clients = await fetch(this.baseUrl, {
      method: "GET",
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));

    return clients;
  }

  static async cadastrarCliente(data) {
    const newClient = await fetch(this.baseUrl, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        const toast = document.querySelector(".toast");
        const toastStatus = document.querySelector(".toast__header");
        const toastText = document.querySelector(".toast__header h2");
        const toastMsg = document.querySelector(".toast__body p");

        if (res.status === 400) {
          toast.style.display = "flex";
          toastStatus.style.backgroundColor = "red";
          toastText.innerText = "Alguma coisa deu errado!";
          toastMsg.innerText = "Verifique os campos do formulário!";

          setTimeout(() => {
            toast.style.display = "none";
          }, 3000);
        } else {
          toast.style.display = "flex";
          toastStatus.style.backgroundColor = "#40f035";
          toastText.innerText = "Deu tudo certo!";
          toastMsg.innerText = "Usuário cadastrado com sucesso!";

          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }

        return res;
      })
      .catch((err) => console.log(err));

    return newClient;
  }

  static async editarCliente(id, data) {
    const clientUpdate = await fetch(`${this.baseUrl}/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        const toast = document.querySelector(".toast");
        const toastStatus = document.querySelector(".toast__header");
        const toastText = document.querySelector(".toast__header h2");
        const toastMsg = document.querySelector(".toast__body p");

        if (res.status === 400) {
          toast.style.display = "flex";
          toastStatus.style.backgroundColor = "red";
          toastText.innerText = "Alguma coisa deu errado!";
          toastMsg.innerText = "Edite algum campo do formulário.";

          setTimeout(() => {
            toast.style.display = "none";
          }, 3000);
        } else {
          toast.style.display = "flex";
          toastStatus.style.backgroundColor = "#40f035";
          toastText.innerText = "Deu tudo certo!";
          toastMsg.innerText = "Usuário atualizado com sucesso!";

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }

        return res;
      })
      .catch((err) => console.log(err));

    return clientUpdate;
  }

  static async deletarCliente(id) {
    const clientDelete = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE",
      headers: this.headers,
    })
      .then((res) => {
        const toast = document.querySelector(".toast");
        const toastStatus = document.querySelector(".toast__header");
        const toastText = document.querySelector(".toast__header h2");
        const toastMsg = document.querySelector(".toast__body p");

        if (res.status === 400 || res.status === 401) {
          toast.style.display = "flex";
          toastStatus.style.backgroundColor = "red";
          toastText.innerText = "Alguma coisa deu errado!";
          toastMsg.innerText = "Selecione um usuário válido.";

          setTimeout(() => {
            toast.style.display = "none";
          }, 3000);
        } else {
          toast.style.display = "flex";
          toastStatus.style.backgroundColor = "#40f035";
          toastText.innerText = "Deu tudo certo!";
          toastMsg.innerText = "Usuário deletado com sucesso!";

          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }

        return res;
      })
      .catch((err) => console.log(err));

    return clientDelete;
  }
}
