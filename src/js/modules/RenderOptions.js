export class RenderOptions {
  static listOptions(clientes, tag) {
    clientes.forEach((elem) => {
      const opcao = document.createElement("option");
      opcao.innerText = elem.nome;
      opcao.value = elem.nome;

      tag.appendChild(opcao);
    });
  }
}
