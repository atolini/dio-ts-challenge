import login from "./loginClass";
import loginForm from "./loginFormClass";
import movie from "./movieClass";

loginForm.password.addEventListener("blur", () =>
  loginForm.validateLoginButton()
);
loginForm.username.addEventListener("blur", () =>
  loginForm.validateLoginButton()
);
loginForm.apiKey.addEventListener("blur", () =>
  loginForm.validateLoginButton()
);

loginForm.loginButton.addEventListener("click", async () => {
  try {
    await login.criarRequestToken();
    loginForm.createMessage("Criando Request Token ...");
    await login.logar();
    loginForm.createMessage("Validando credenciais ...");
    await login.criarSessao();
    loginForm.createMessage("Usuario logado!");
  } catch (e) {
    loginForm.createMessage(`Error ${e}`);
  }
});

movie.searchButton.addEventListener("click", async () => {
  let lista = document.getElementById("lista");
  if (lista) {
    lista.outerHTML = "";
  }
  let queryElement = document.getElementById("search") as HTMLInputElement;
  let query = queryElement.value;
  let listaDeFilmes = await movie.procurarFilme(query);
  let ul = document.createElement("ul");
  ul.id = "lista";
  for (const item of listaDeFilmes.results) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(`${item.original_title}`));
    ul.appendChild(li);
  }
  console.log(listaDeFilmes);
  movie.searchContainer.appendChild(ul);
});
